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
    details: [
      "Flutter 기반 앱의 신규 기능 개발, 성능 개선, 유지보수, 배포를 담당했습니다.",
      "날씨별 콘텐츠 추천 페이지와 상품 전시 영역 등 신규 기능을 추가했습니다.",
      "Next.js 기반 웹 페이지와 Spring Boot 기반 백오피스를 유지보수했습니다.",
      "텍스트 폰트 적용 로직을 개선해 텍스트 렌더링 성능을 약 9% 향상시켰습니다.",
      "상품과 포스트의 N:M 구조를 공통 서비스 레이어로 관리해 상태 일관성을 확보했습니다.",
      "유닛 테스트와 GitHub Actions 자동화로 코드 변경 시 기존 로직 신뢰성을 확보했습니다."
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
    details: [
      "Unity AR Foundation을 통해 실내 AR 내비게이션 기능을 개발했습니다.",
      "Android 뷰를 통해 AR 내비게이션 UI를 구현했습니다.",
      "AAR 빌드 후 내부 코드를 수정해 앱 전체의 UI 통일성을 유지했습니다."
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
    details: [
      "Jetpack Compose와 XML 기반 UI를 병행 개발했습니다.",
      "Compose를 통한 커스텀 뷰를 개발했습니다.",
      "Dagger-Hilt를 통한 의존성 주입을 적용했습니다.",
      "OAuth2를 이용한 GitHub, 카카오 로그인을 구현했습니다.",
      "NASA SOHO 위성 데이터를 수집하고 전처리했습니다."
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
    details: [
      "Room을 이용해 메모 데이터를 저장했습니다.",
      "푸시 알림 답장 기능을 이용한 간편 메모 기능을 구현했습니다.",
      "실사용자 리뷰를 바탕으로 최근 메모 일부를 상단바에 표시하는 개선을 진행했습니다.",
      "Google Play에 앱을 배포했습니다."
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
  modalDetails.innerHTML = project.details.map((detail) => `<li>${detail}</li>`).join("");
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
