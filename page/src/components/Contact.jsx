import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface-dark text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Contact</h2>
        <p className="text-slate-400 text-sm sm:text-base mb-8">
          문의가 있으시면 아래 버튼을 눌러 주세요.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
        >
          Get in touch
          <Mail size={20} />
        </Link>
      </div>
    </section>
  )
}
