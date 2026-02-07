import { useState, useEffect, useRef } from 'react'
import { resolveApiImageUrl } from '../api/imageUtils'

/**
 * API 이미지 전용 컴포넌트.
 * WebView에서 img src가 막힐 때 fetch → blob → URL.createObjectURL() 로 표시합니다.
 * API_BASE 기준 URL(localhost 치환·상대 경로 포함)에 사용하세요.
 */
export default function ApiImage({ src, alt = '', className, ...props }) {
  const [objectUrl, setObjectUrl] = useState(null)
  const [error, setError] = useState(false)
  const blobUrlRef = useRef(null)

  const resolvedSrc = resolveApiImageUrl(src)

  useEffect(() => {
    if (!resolvedSrc || !resolvedSrc.startsWith('http')) {
      setError(true)
      return
    }
    setError(false)
    let revoked = false
    const controller = new AbortController()
    fetch(resolvedSrc, { signal: controller.signal, mode: 'cors' })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.blob()
      })
      .then((blob) => {
        if (!revoked) {
          if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current)
          blobUrlRef.current = URL.createObjectURL(blob)
          setObjectUrl(blobUrlRef.current)
        }
      })
      .catch(() => setError(true))

    return () => {
      revoked = true
      controller.abort()
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current)
        blobUrlRef.current = null
      }
    }
  }, [resolvedSrc])

  if (error) {
    return (
      <div
        className={className}
        role="img"
        aria-label={alt || '이미지 로드 실패'}
        style={{ background: '#f1f5f9', minHeight: 80 }}
        {...props}
      />
    )
  }

  if (objectUrl) {
    return <img src={objectUrl} alt={alt} className={className} {...props} />
  }

  return (
    <div
      className={className}
      style={{ background: '#f1f5f9', minHeight: 80 }}
      aria-hidden
      {...props}
    />
  )
}
