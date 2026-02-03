import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: '홈', to: '/', hash: '#home' },
  { label: '프로젝트', to: '/', hash: '#projects' },
  { label: '개발이력', to: '/', hash: '#dev-history' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = (link) => {
    setOpen(false)
    if (link.hash && location.pathname === '/') {
      document.querySelector(link.hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="text-primary-700 font-bold text-lg tracking-tight">
          홍길동
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.to + (link.hash || '')}>
              {link.hash ? (
                <a
                  href={link.to + link.hash}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link)
                  }}
                  className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden p-2 text-slate-600"
          onClick={() => setOpen((o) => !o)}
          aria-label="메뉴"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <ul className="px-4 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.to + (link.hash || '')}>
                {link.hash ? (
                  <a
                    href={link.to + link.hash}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link)
                    }}
                    className="block py-2 text-slate-600 font-medium"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    className="block py-2 text-slate-600 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
