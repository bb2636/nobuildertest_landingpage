import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, ArrowLeft } from 'lucide-react'
import { submitContact } from '../api/contactApi'

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const trimmed = {
      name: form.name?.trim() ?? '',
      email: form.email?.trim() ?? '',
      phone: form.phone?.trim() ?? '',
      message: form.message?.trim() ?? '',
    }
    if (!trimmed.name || !trimmed.email || !trimmed.phone || !trimmed.message) {
      alert('모든 항목을 채워 주세요.')
      return
    }
    setSubmitting(true)
    try {
      await submitContact(trimmed)
      alert('전송 성공!')
      setForm(initialForm)
    } catch (err) {
      console.error('Contact 전송 에러:', err)
      console.error('에러 상세:', err?.response?.data)
      console.error('상태 코드:', err?.response?.status)
      alert(err?.response?.data?.message || '전송에 실패했습니다. 다시 시도해 주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-surface-dark text-white flex flex-col">
      <header className="border-b border-slate-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={20} />
            홈으로
          </Link>
          <span className="text-primary-400 font-bold text-lg">Contact</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Get in touch</h1>
          <p className="text-slate-400 text-sm mb-8">문의 내용을 입력해 주세요.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-slate-300 text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="이름을 입력하세요"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-slate-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="이메일 주소를 입력하세요"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-slate-300 text-sm font-medium mb-2">
                Phone
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="연락처를 입력하세요"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-slate-300 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="문의 내용을 입력하세요"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-8 py-3.5 bg-primary-500 hover:bg-primary-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg shadow-primary-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-800"
              >
                {submitting ? '전송 중...' : 'Submit'}
              </button>
            </div>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-600 space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <Mail size={18} className="text-slate-400 flex-shrink-0" />
              <a href="mailto:oooo@ooooo.io" className="text-slate-300 hover:text-white transition-colors">
                oooo@ooooo.io
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={18} className="text-slate-400 flex-shrink-0" />
              <span className="text-slate-300">서울 강남구 삼성로 123 (강남빌딩 4층)</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
