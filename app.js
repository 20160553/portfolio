const workProjects = [
  {
    category: "Work Project",
    name: "패션앤스타일",
    period: "2025.06 - 재직중",
    role: "플러터 개발, 웹 및 백오피스 유지보수",
    metaLabel: "구분",
    metaValue: "정규직 / 매니저",
    stack: "Flutter, Next.js, Spring Boot, JavaScript",
    image: "asset/image1.mp4",
    summary: "패션앤스타일 앱 신규 기능 개발 및 웹, 백오피스 유지보수를 담당했습니다.",
    achievements: [
      {
        title: "텍스트 렌더링 성능 개선",
        cause: "다양한 폰트 스타일 적용 과정에서 텍스트 렌더링 비용 반복 발생",
        process: "폰트 적용 로직 점검 및 중복 계산 감소 구조로 정리",
        result: "텍스트 렌더링 성능 약 9% 개선"
      },
      {
        title: "정지 상태 UI 렌더링으로 인한 발열 개선",
        cause: "정지된 화면에서 UI 렌더링이 지속적으로 발생하여 발열 현상 발생",
        process: "미노출 중에도 동작하던 애니메이션 및 로딩 인디케이터 수정",
        result: "정지 화면에서 3fps -> 0fps UI 렌더링"
      },
      {
        title: "상품 상태 일관성 확보",
        cause: "여러 화면이 동일 상품의 별도 인스턴스를 각자 보유해 상태 불일치 발생",
        process: "GetxService 기반 단일 저장소(SSOT)를 설계해 모든 화면이 동일 Rx<Product>를 구독하도록 구조화, 북마크 변경 시 포스트 내 중첩 상품 데이터까지 일괄 동기화",
        result: "상품 상세·포스트 미리보기 등 전 화면 간 상태 일관성 확보"
      },
      {
        title: "변경 안정성 강화",
        cause: "신규 기능 개발과 유지보수 병행으로 기존 로직 회귀 확인 필요",
        process: "핵심 로직 유닛 테스트 추가 및 GitHub Actions 기반 자동 검증 구성",
        result: "유닛테스트 기준 테스트 커버리지 0% -> 18% 달성(진행 중)"
      },
      {
        title: "신규 콘텐츠 기능 확장",
        cause: "사용자 상황 기반 콘텐츠 노출 및 상품 전시 영역 확장 필요",
        process: "위치기반 날씨별 콘텐츠 추천 페이지와 상품 전시 영역 Flutter 앱에 추가",
        result: "앱 내 콘텐츠 탐색 흐름 및 상품 노출 접점 확장"
      }
    ]
  }
];

const sideProjects = [
  {
    category: "Side Project",
    name: "PathFinder",
    period: "2023.04 - 2023.05",
    role: "팀장 및 AR 담당",
    metaLabel: "인원",
    metaValue: "5인",
    stack: "Android, Unity, Kotlin, C#",
    image: "asset/image8.gif",
    summary: "NFC와 비콘을 이용한 실내 AR 내비게이션 애플리케이션입니다.",
    achievements: [
      {
        title: "실내 AR 내비게이션 구현",
        cause: "GPS 사용이 어려운 실내 환경에서 목적지 안내 수단 필요",
        process: "NFC와 비콘으로 위치 기준점 설정, Unity AR Foundation으로 경로 안내 화면 구현",
        result: "실내 AR 화면 기반 이동 방향 확인 흐름 구현"
      },
      {
        title: "Android-Unity 화면 통합",
        cause: "Unity AR 화면과 Android 네이티브 화면 간 UI 차이 발생 가능성",
        process: "Android 뷰 기반 내비게이션 UI 구성, AAR 빌드 후 내부 코드 조정",
        result: "앱 전체 화면 전환 및 UI 표현 통일성 유지"
      }
    ]
  },
  {
    category: "Side Project",
    name: "Aro",
    period: "2023.02 - 2023.04",
    role: "모바일 개발, 데이터 처리",
    metaLabel: "인원",
    metaValue: "6인",
    stack: "Android, Kotlin, R",
    image: "asset/image5.jpeg",
    summary: "NASA 위성 데이터를 이용한 오로라 예측 정보 제공 애플리케이션입니다.",
    achievements: [
      {
        title: "위성 데이터 기반 예측 정보 구성",
        cause: "오로라 예측을 위한 외부 관측 데이터 가공 필요",
        process: "NASA SOHO 위성 데이터 수집 및 R 기반 전처리",
        result: "앱 내 오로라 예측 정보 제공을 위한 데이터 기반 마련"
      },
      {
        title: "로그인과 의존성 구조 정리",
        cause: "외부 로그인과 화면 기능 증가로 인증 로직 및 객체 생성 흐름 분리 필요",
        process: "OAuth2 기반 GitHub/카카오 로그인 구현, Dagger-Hilt 의존성 주입 적용",
        result: "인증 기능 분리 관리 및 화면 기능 확장 부담 감소"
      },
      {
        title: "혼합 UI 환경 대응",
        cause: "기존 XML 화면과 신규 Compose 화면의 병행 운영 필요",
        process: "Jetpack Compose와 XML 기반 UI 병행 개발, Compose 커스텀 뷰 구성",
        result: "기존 화면 유지와 신규 UI 요소의 점진적 도입"
      }
    ]
  },
  {
    category: "Side Project",
    name: "상단바 메모",
    period: "2021.03 - 2021.06",
    role: "모바일 개발",
    metaLabel: "인원",
    metaValue: "4인",
    stack: "Android, Kotlin",
    image: "asset/image14.mp4",
    summary: "알림 간편 답장 기능을 이용한 간편 메모 애플리케이션입니다.",
    achievements: [
      {
        title: "알림 기반 빠른 메모 구현",
        cause: "앱 실행 없이 짧은 메모를 빠르게 남길 수 있는 흐름 필요",
        process: "푸시 알림 간편 답장 기능 활용, Room 기반 메모 데이터 저장",
        result: "상단바에서 바로 메모 작성 및 저장 가능한 핵심 기능 구현"
      },
      {
        title: "사용자 리뷰 기반 개선",
        cause: "최근 작성 메모를 더 빠르게 확인하고 싶다는 실사용자 피드백",
        process: "최근 메모 일부를 상단바에 표시하도록 화면 및 데이터 표시 방식 개선",
        result: "앱 진입 없이 최근 메모 확인 가능, 사용 흐름 단축"
      },
      {
        title: "스토어 배포 경험 확보",
        cause: "프로젝트를 실제 사용자에게 제공하기 위한 배포 과정 필요",
        process: "앱 패키징, 배포 준비, Google Play 등록 절차 진행",
        result: "Google Play 앱 배포 완료"
      }
    ]
  }
];

const allProjects = [...workProjects, ...sideProjects];
const workGrid = document.querySelector("#work-grid");
const projectGrid = document.querySelector("#project-grid");
const modal = document.querySelector("#project-modal");
const modalMedia = document.querySelector("#modal-media");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalSummary = document.querySelector("#modal-summary");
const modalMeta = document.querySelector("#modal-meta");
const modalDetails = document.querySelector("#modal-details");
let activeCard = null;

function isVideo(src) {
  return src.toLowerCase().endsWith(".mp4");
}

function renderMedia(src, alt) {
  if (!src) {
    return `<span class="media-placeholder">대표 자료 준비 중</span>`;
  }

  if (isVideo(src)) {
    return `<video src="${src}" aria-label="${alt}" autoplay muted loop playsinline></video>`;
  }

  return `<img src="${src}" alt="${alt}">`;
}

function renderProjectCard(project) {
  const index = allProjects.indexOf(project);

  return `
    <button class="project-card" type="button" data-project-index="${index}">
      <span class="project-card__media">
        ${renderMedia(project.image, `${project.name} 대표 자료`)}
      </span>
      <span class="project-card__body">
        <span class="eyebrow">${project.category}</span>
        <h3>${project.name}</h3>
        <p>${project.summary}</p>
        <span class="project-card__meta">
          <span><b>기간</b>${project.period}</span>
          <span><b>역할</b>${project.role}</span>
          <span><b>${project.metaLabel}</b>${project.metaValue}</span>
        </span>
      </span>
    </button>
  `;
}

function renderProjects() {
  workGrid.innerHTML = workProjects.map(renderProjectCard).join("");
  projectGrid.innerHTML = sideProjects.map(renderProjectCard).join("");
}

function renderAchievement(achievement) {
  return `
    <article class="achievement-card">
      <h4>${achievement.title}</h4>
      <dl>
        <div>
          <dt>원인</dt>
          <dd>${achievement.cause}</dd>
        </div>
        <div>
          <dt>과정</dt>
          <dd>${achievement.process}</dd>
        </div>
        <div>
          <dt>결과</dt>
          <dd>${achievement.result}</dd>
        </div>
      </dl>
    </article>
  `;
}

function openModal(project, trigger) {
  activeCard = trigger;
  modalMedia.innerHTML = renderMedia(project.image, `${project.name} 상세 대표 자료`);
  modalCategory.textContent = project.category;
  modalTitle.textContent = project.name;
  modalSummary.textContent = project.summary;
  modalMeta.innerHTML = `
    <dt>기간</dt><dd>${project.period}</dd>
    <dt>역할</dt><dd>${project.role}</dd>
    <dt>${project.metaLabel}</dt><dd>${project.metaValue}</dd>
    <dt>기술</dt><dd>${project.stack}</dd>
  `;
  modalDetails.innerHTML = project.achievements.map(renderAchievement).join("");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".modal__close").focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (activeCard) {
    activeCard.focus();
  }
}

renderProjects();

document.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (card) {
    openModal(allProjects[Number(card.dataset.projectIndex)], card);
    return;
  }

  if (event.target.matches("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});
