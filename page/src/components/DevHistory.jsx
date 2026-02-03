import { Calendar } from 'lucide-react'

const items = [
  { title: '물류관리 시스템 구축', period: '2023.05 ~ 2024.01', desc: '2022년부터 약 1년간 중견 물류기업의 통합 물류관리 시스템 구축 프로젝트에 참여했습니다. Node.js와 Express 프레임워크 기반으로 전체 서버 아키텍처를 설계했으며, MongoDB와 PostgreSQL을 동시에 사용하는 하이브리드 데이터베이스 구조를 도입했습니다. RESTful API를 통해 각 지점의 입출고 데이터를 실시간으로 수집 및 분석할 수 있도록 했고, 권한 관리를 통해 보안을 강화했습니다.' },
  { title: 'MVP 플랫폼', period: '2024.01 ~ 2024.03', desc: '스타트업 초기 단계에서 MVP(최소 기능 제품) 플랫폼을 기획하고 직접 구현한 경험이 있습니다. React와 Node.js, MongoDB를 기반으로 빠르게 프로토타입을 개발하였으며, 약 6주 만에 유저 피드백을 받을 수 있는 베타 버전을 출시했습니다. 프론트엔드에서는 Chakra UI를 활용해 빠르고 일관된 디자인 시스템을 도입했고, GitHub Actions를 통해 자동 배포 파이프라인을 설정했습니다.' },
  { title: '수강신청 리뉴얼', period: '2024.03 ~ 2024.05', desc: '기존의 수강신청 시스템이 느리고 불편하다는 피드백을 받아, 전체 프론트엔드 UI/UX 및 구조를 React 기반으로 재설계하였습니다. 사용자의 주요 액션(과목 검색, 즐겨찾기 등록, 실시간 신청)은 Redux 상태 관리와 Context API를 활용하여 일관되게 처리했습니다. 기존에는 페이지 리로딩이 자주 발생했지만, React Router와 CSR 구조를 도입하여 응답 속도를 약 3배 이상 개선했습니다. ' },
]

export default function DevHistory() {
  return (
    <section id="dev-history" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Calendar className="text-primary-600" size={32} />
          개발이력
        </h2>
        <p className="text-slate-600 mb-12">2023.05 ~ 2024.05 주요 프로젝트</p>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200" aria-hidden />
          <ul className="space-y-0">
            {items.map(({ title, period, desc }) => (
              <li key={title} className="relative pl-14 pb-12 last:pb-0">
                <span
                  className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-primary-600 border-4 border-white shadow ring-2 ring-primary-100"
                  aria-hidden
                />
                <div className="bg-surface-light rounded-lg border border-slate-200 p-5">
                  <p className="text-xs font-medium text-primary-600 mb-1">{period}</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
