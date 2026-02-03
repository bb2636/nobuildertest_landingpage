export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1 text-sm">
          <p>
            <a href="mailto:oooo@ooooo.io" className="hover:text-white transition-colors">
              oooo@ooooo.io
            </a>
          </p>
          <p>서울 강남구 삼성로 123 (강남빌딩 4층)</p>
          <p className="text-slate-500 pt-1">© 2025 Myportfolio</p>
        </div>
        <p className="text-sm text-slate-500 sm:text-right">All Rights Reserved</p>
      </div>
    </footer>
  )
}
