const projects = [
  { title: 'SmartLog', description: 'SmartLog는 AI를 활용한 실시간 물류 자동화 효율적인 입출고를 지원하는 솔루션입니다.', image: '/smartlog.png' },
  { title: 'EduTrack', description: '학생의 학습 행동 데이터를 분석하여 개인화된 학습 콘텐츠를 제공하는 교육 플랫폼입니다.', image: '/edutrack.png' },
  { title: 'FitTogether', description: '사용자 간 운동 목표를 공유하고, 파트너를 찾는 기능을 중심으로 한 소셜 매칭 앱입니다.', image: '/fittogether.png' },
  { title: 'PlanHive', description: '자주 쓰는 코드, 명령어 등을 공유하고 태그별로 저장할 수 있는 커뮤니티 플랫폼입니다.', image: '/planhive.png' },
  { title: 'DevVault', description: '소규모 스타트업 및 프리랜서 팀을 위한 협업 중심의 일정 관리 툴 입니다.', image: '/devvault.png' },
  { title: 'DocEase', description: '기업 내부 문서의 자동 생성, 서명, 기록 관리까지 전 과정을 자동화하는 솔루션입니다.', image: '/docease.png' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          프로젝트
        </h2>
        <p className="text-slate-600 mb-10 max-w-2xl">
          버블로 구현한 웹·앱 프로젝트입니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, image }) => (
            <article
              key={title}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-primary-200 transition-all flex flex-col"
            >
              <div className="p-5 pb-3 text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
              <img
                src={image}
                alt={title}
                className="w-full aspect-video object-cover"
              />
              <div className="flex justify-center py-4">
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-primary-100 flex items-center justify-center text-slate-600 hover:text-primary-600 transition-colors"
                  aria-label={`${title} 더 보기`}
                >
                  <span className="text-lg font-bold leading-none">↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
