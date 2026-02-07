import { API_BASE } from './contactApi'

/**
 * DB/API에 저장된 이미지 URL을 현재 API 주소 기준으로 치환합니다.
 * localhost, 127.0.0.1 또는 상대 경로(/uploads/ 등)를 API_BASE로 변환.
 * @param {string} url - API에서 받은 이미지 URL (상대 경로 또는 localhost/127.0.0.1 절대 경로)
 * @returns {string} - 앱에서 사용할 절대 URL
 */
export function resolveApiImageUrl(url) {
  if (!url || typeof url !== 'string') return url
  const trimmed = url.trim()
  if (!trimmed) return url
  // 상대 경로면 API_BASE 붙임 (업로드 API가 /uploads/파일명 형태로 반환하는 경우)
  if (trimmed.startsWith('/')) {
    const base = API_BASE.replace(/\/$/, '')
    return `${base}${trimmed}`
  }
  // localhost / 127.0.0.1 로 저장된 URL은 API_BASE 호스트로 치환
  try {
    const u = new URL(trimmed)
    const isLocal =
      u.hostname === 'localhost' ||
      u.hostname === '127.0.0.1'
    if (isLocal) {
      const baseUrl = new URL(API_BASE)
      u.protocol = baseUrl.protocol
      u.hostname = baseUrl.hostname
      u.port = baseUrl.port
      return u.toString()
    }
  } catch {
    // URL 파싱 실패 시 그대로 반환
  }
  return url
}
