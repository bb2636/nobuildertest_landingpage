import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pb-20 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
        <div className="flex-shrink-0 order-1 md:order-1 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl ">
          <img
            src="/profile.png"
            alt="홍길동 프로필"
            className="w-full h-full object-cover"
            style={{ transform: 'rotate(-12deg) scale(1.1)' }}
          />
        </div>
        <div className="flex-1 text-center md:text-left order-2 md:order-2">
          <p className="text-slate-400 text-sm sm:text-base mb-3">
            안녕하세요
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
            노코드 개발자,
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            홍길동 입니다
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
            노코드 툴 버블을 사용하여 Web, App 등을 구현합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-500 hover:bg-primary-400 text-white font-semibold rounded-lg transition-colors"
            >
              프로젝트 보기
              <ArrowRight size={20} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-slate-500 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              문의하기
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
