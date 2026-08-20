// Media Database
const mediaItems = [
  { type: 'youtube', src: 'KfbxbXhMCRg', category: 'video', title: '제주 소원사, 천년의 노래' },
  { type: 'image', src: '260820-01.jpg', category: 'scenery', title: '황금 포대화상과 현대식 법당 전경' },
  { type: 'image', src: '260820-02.jpg', category: 'scenery', title: '포대화상 주변의 참배 쉼터와 사찰 전경' },
  { type: 'image', src: '260820-03.jpg', category: 'scenery', title: '소원사 범종각과 석가탑 불사 안내대' },
  { type: 'image', src: '260820-04.jpg', category: 'scenery', title: '범종각과 황금 관세음보살상이 맞이하는 진입로' },
  { type: 'image', src: '260820-05.jpg', category: 'scenery', title: '소원사 현판이 걸린 장엄한 일주문' },
  { type: 'image', src: '260820-06.jpg', category: 'scenery', title: '황금 와불상과 제주시 야경이 어우러진 저녁 풍경' },
  { type: 'image', src: '260820-07.jpg', category: 'scenery', title: '울창한 수목 사이로 내려다본 사찰 진입로' },
  { type: 'image', src: '260820-08.jpg', category: 'scenery', title: '노을빛 아래 자비로이 누워계신 황금 와불상' },
  { type: 'image', src: '260820-09.jpg', category: 'scenery', title: '소나무와 함께 어우러진 황금 와불상 근경' },
  { type: 'image', src: '260820-10.jpg', category: 'scenery', title: '은은한 석등 불빛이 흐르는 사찰 돌담길' },
  { type: 'image', src: '260820-11.jpg', category: 'scenery', title: '아름다운 기와지붕 법당과 고요한 석등길' },
  { type: 'image', src: '260820-12.jpg', category: 'scenery', title: '석축 화단 속 소나무와 은은한 정원등' },
  { type: 'image', src: '260820-13.jpg', category: 'scenery', title: '밤하늘 아래 조용히 빛나는 사찰 돌담과 기와지붕' },
  { type: 'image', src: '260820-14.jpg', category: 'scenery', title: '황금 거북상과 조각상들이 호위하는 계단길' },
  { type: 'image', src: '260820-15.jpg', category: 'scenery', title: '조경수로 가꾸어진 아름다운 노송과 정원등' },
  { type: 'image', src: '260820-16.jpg', category: 'scenery', title: '잔디 정원을 장식한 황금 관세음보살상 야경' },
  { type: 'image', src: '260820-17.jpg', category: 'scenery', title: '양옆을 밝히는 은은한 석등과 본당으로 향하는 길' },
  { type: 'image', src: '260820-18.jpg', category: 'scenery', title: '어둠 속에서 황금빛으로 빛나는 범종각' },
  { type: 'image', src: '260820-19.jpg', category: 'scenery', title: '조명이 켜진 고요한 소원사 밤길과 범종각' },
  { type: 'image', src: '260820-20.jpg', category: 'scenery', title: '가로등 불빛이 아늑하게 흐르는 사찰 내 산책로' },
  { type: 'image', src: '260820-21.jpg', category: 'scenery', title: '저녁 노을 속 도량을 지키는 여러 황금 보살상들' },
  { type: 'youtube', src: 'O0Lfq4pKXRU', category: 'video', title: '소원사 소개 유튜브 영상' },
  { type: 'youtube', src: '9SFNz_iwMxo', category: 'video', title: '소원사 특별 유튜브 영상' },
  { type: 'video', src: '20260719_141532.mp4', category: 'video', title: '법당 내부와 청아한 예불 소리' },
  { type: 'video', src: '20260719_141544.mp4', category: 'video', title: '소원사 도량의 맑은 바람과 풍경 소리' },
  { type: 'image', src: '1784440538834.png', category: 'scenery', title: '돌담 위에 세워진 고요한 부처님 실루엣 조형물' },
  { type: 'image', src: '20260719_135118.jpg', category: 'scenery', title: '소원사 전망대에서 내려다본 푸른 한라산 숲과 계곡 전경' },
  { type: 'image', src: '20260719_135120.jpg', category: 'scenery', title: '푸른 소나무 숲 사이로 보이는 소원사의 요사채와 전경' },
  { type: 'image', src: '20260719_135127.jpg', category: 'scenery', title: '나무들과 함께 펼쳐진 한라산 자락의 평화로운 계곡 풍경' },
  { type: 'image', src: '20260719_135130.jpg', category: 'scenery', title: '탁 트인 하늘 아래 멀리 바다가 내려다보이는 제주도 전경' },
  { type: 'image', src: '20260719_141038.jpg', category: 'scenery', title: '법당 내부 수미단에 정갈하게 봉안된 석가모니 주불과 보살상' },
  { type: 'image', src: '20260719_141043.jpg', category: 'scenery', title: '대웅전 주불과 그 주변을 장식한 붉은 번(幡) 및 소형 불상들' },
  { type: 'image', src: '20260719_141045.jpg', category: 'scenery', title: '법당 내부에 봉안된 독성(獨聖) 탱화와 신중단 모습' },
  { type: 'image', src: '20260719_141048.jpg', category: 'scenery', title: '독성 조각상과 불단 위에 정성스레 올려진 공양물' },
  { type: 'image', src: '20260719_141050.jpg', category: 'scenery', title: '형형색색의 연등과 연꽃등이 불을 밝힌 대웅전 법당 내부 전경' },
  { type: 'image', src: '20260719_141059.jpg', category: 'scenery', title: '법당 한쪽 벽면에 열 맞춰 봉안된 눈부신 황금 소형 불상들' },
  { type: 'image', src: '20260719_141102.jpg', category: 'scenery', title: '온화한 미소를 띠고 있는 황금 석가모니불 입상' },
  { type: 'image', src: '20260719_141105.jpg', category: 'scenery', title: '호랑이와 함께 그려진 산신(山神) 탱화와 공양단' },
  { type: 'image', src: '20260719_141107.jpg', category: 'scenery', title: '산신 탱화 앞에 모셔진 산신 조각상과 촛대들' },
  { type: 'image', src: '20260719_141109.jpg', category: 'scenery', title: '여의주를 든 용왕(龍王) 탱화와 용왕 조각상' },
  { type: 'image', src: '20260719_141120.jpg', category: 'scenery', title: '산신, 독성, 용왕 등 여러 신중이 모셔진 법당 내부 전경' },
  { type: 'image', src: '20260719_141327.jpg', category: 'scenery', title: '새로 지어진 목조 법당의 외관과 처마 구조' },
  { type: 'image', src: '20260719_141329.jpg', category: 'scenery', title: '전통 한옥 양식으로 정교하게 짜 맞춘 법당의 목조 처마선' },
  { type: 'image', src: '20260719_141332.jpg', category: 'scenery', title: '하늘을 향해 날렵하게 뻗은 법당 지붕의 모서리 처마' },
  { type: 'image', src: '20260719_141335.jpg', category: 'scenery', title: '깔끔하게 단장된 목조 법당의 측면 기둥과 창호' },
  { type: 'image', src: '20260719_141338.jpg', category: 'scenery', title: '못을 쓰지 않고 나무를 맞물려 고정한 기둥 위 공포 구조' },
  { type: 'image', src: '20260719_141348.jpg', category: 'scenery', title: '회색 기와가 깔끔하게 얹어진 전통 기와지붕의 지붕면' },
  { type: 'image', src: '20260719_141410.jpg', category: 'scenery', title: '처마 밑 서까래들이 부채꼴로 펼쳐진 정교한 목조 구조' },
  { type: 'image', src: '20260719_141413.jpg', category: 'scenery', title: '나무의 결이 그대로 살아 있는 튼튼한 목조 서까래 상세' },
  { type: 'image', src: '20260719_141425.jpg', category: 'scenery', title: '나무 창살로 장식된 미닫이창과 처마가 어우러진 벽면' },
  { type: 'image', src: '20260719_141429.jpg', category: 'scenery', title: '전통 창살 무늬가 들어간 현대식 이중 유리창과 외벽' },
  { type: 'image', src: '20260719_141445.jpg', category: 'scenery', title: '단청을 칠하지 않아 나무 본연의 멋이 살아 있는 신축 법당 전경' },
  { type: 'image', src: '20260719_141451.jpg', category: 'scenery', title: '법당 앞마당에 정갈하게 깔린 화강암 석판 바닥' },
  { type: 'image', src: '20260719_141510.jpg', category: 'scenery', title: '처마 밑에서 바라본 지붕 기와의 곡선과 끝마무리' },
  { type: 'image', src: '20260719_141517.jpg', category: 'scenery', title: '천장의 서까래와 대들보가 훤히 보이는 신축 법당 내부' },
  { type: 'image', src: '20260719_141523.jpg', category: 'scenery', title: '튼튼하게 시공된 법당 건물의 콘크리트 기초와 배수 공간' },
  { type: 'image', src: '20260719_141626.jpg', category: 'scenery', title: '유리창을 통해 싱그러운 초록 숲이 내다보이는 종무실 창가' },
  { type: 'image', src: '20260719_141630.jpg', category: 'scenery', title: '창밖의 숲을 마주 보며 업무를 보는 차분한 종무실 내부' },
  { type: 'image', src: '20260719_141711.jpg', category: 'scenery', title: '창틀 프레임 너머로 액자 속 그림처럼 펼쳐진 초록빛 나무들' },
  { type: 'image', src: '20260719_141713.jpg', category: 'scenery', title: '조명이 켜진 종무실 내부와 창밖에 늘어선 나무들의 전경' },
  { type: 'image', src: '20260719_141825.jpg', category: 'scenery', title: '주변의 자연 숲과 어우러진 현대적 디자인의 요사채 전경' },
  { type: 'image', src: '20260719_141720.jpg', category: 'scenery', title: '종무용 컴퓨터와 프린터가 구비된 종무실의 사무 공간' },
  { type: 'image', src: '20260719_141724.jpg', category: 'scenery', title: '종무실 서류 출력을 담당하는 다기능 복합기' },
  { type: 'image', src: '20260719_141727.jpg', category: 'scenery', title: '넓은 창문을 통해 햇살이 가득 들어오는 종무실 실내' },
  { type: 'image', src: '20260719_141741.jpg', category: 'scenery', title: '화이트 톤 벽면과 우드 도어가 조화를 이룬 종무소 복도' },
  { type: 'image', src: '20260719_141747.jpg', category: 'scenery', title: '현대적이고 깔끔하게 마감된 사찰 사무동의 출입문' },
  { type: 'image', src: '20260719_141800.jpg', category: 'scenery', title: '불투명 유리창이 달린 나무 프레임의 실내 미닫이문' },
  { type: 'image', src: '20260719_141822.jpg', category: 'scenery', title: '흰색 외벽과 짙은 회색 프레임 창문이 돋보이는 모던한 건물 외관' },
  { type: 'image', src: '20260719_141908.jpg', category: 'scenery', title: '대웅전 법당으로 향하는 완만한 경사의 야외 석조 계단' },
  { type: 'image', src: '20260719_141912.jpg', category: 'scenery', title: '돌계단 위에서 바라본 고요한 사찰 경내와 숲길' },
  { type: 'image', src: '20260719_142018.jpg', category: 'scenery', title: '에어컨과 사무 가구들이 배치된 쾌적한 종무실 내부 전경' },
  { type: 'image', src: '20260719_142021.jpg', category: 'scenery', title: '종무 행정 업무를 처리하는 사무용 컴퓨터와 모니터 화면' },
  { type: 'image', src: '20260719_142023.jpg', category: 'scenery', title: '행정 서류철과 비품 상자들이 정리된 종무실 책상 주변' },
  { type: 'image', src: '20260719_142032.jpg', category: 'scenery', title: '종무소 직원이 사용하는 안락한 사무용 회전의자' },
  { type: 'image', src: '20260719_142035.jpg', category: 'scenery', title: '다양한 서식과 안내장이 보관된 종무실의 파일 꽂이함' },
  { type: 'image', src: '20260719_142050.jpg', category: 'scenery', title: '종무실 한쪽에 설치된 공기청정기와 프린터' },
  { type: 'image', src: '20260719_142057.jpg', category: 'scenery', title: '전체적으로 정돈된 현대식 종무실 내부의 모습' },
  { type: 'image', src: '20260719_142102.jpg', category: 'scenery', title: '다양한 불교 서적과 서류가 놓인 업무용 데스크' },
  { type: 'image', src: '20260719_142112.jpg', category: 'scenery', title: '종무실 내부에서 입구 출입문을 바라본 구도' },
  { type: 'image', src: '20260719_142117.jpg', category: 'scenery', title: '바람이 통하도록 살짝 열어둔 종무실의 현대식 창문' },
  { type: 'image', src: '20260719_142141.jpg', category: 'scenery', title: '업무 관련 문서와 필기구가 정돈된 종무실 테이블' },
  { type: 'image', src: '20260719_142144.jpg', category: 'scenery', title: '복사기와 서류 박스들이 배치된 종무실의 실용적인 사무 공간' },
  { type: 'image', src: '20260719_142228.jpg', category: 'scenery', title: '소원사 현판과 그 아래 전시된 아기자기한 수석들' },
  { type: 'image', src: '20260719_142231.jpg', category: 'scenery', title: '다양한 모양의 아기자기한 소형 불상들이 진열된 장식장' },
  { type: 'image', src: '20260719_142305.jpg', category: 'scenery', title: '소원사 야외 도량의 황금 와불상과 거북 조형물' },
  { type: 'image', src: '20260719_142308.jpg', category: 'scenery', title: '소나무 아래 자비로운 자태로 누워 있는 황금 와불상' },
  { type: 'image', src: '20260719_142318.jpg', category: 'scenery', title: '돌계단을 따라 늘어선 십이지신상과 야외 도량 전경' },
  { type: 'image', src: '20260719_142334.jpg', category: 'scenery', title: '소원사 진입 도로와 야외 쉼터 전경' },
  { type: 'image', src: '20260719_142337.jpg', category: 'scenery', title: '쉼터 옆 바위 위에 미소를 지으며 앉아 계신 황금 포대화상' },
  { type: 'image', src: '20260719_142344.jpg', category: 'scenery', title: '소원사의 기도 접수 및 상담 안내가 적힌 야외 배너판' }
];

// Gallery Pagination Configuration
let currentCategory = 'all';
let itemsToShow = 12;
let filteredItems = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeaderScroll();
  initMobileMenu();
  initHeroSlider();
  initGallery();
  initLightbox();
  initScrollReveal();
  updateActiveNavLink();
  initConsultations();
});

// 1. Theme Configuration (Light/Dark Mode)
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', storedTheme);
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// 2. Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = 'var(--shadow-md)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    updateActiveNavLink();
  });
}

// 3. Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    menuBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

// 4. Hero Background Slider
function initHeroSlider() {
  const slider = document.getElementById('hero-slider');
  const slideImages = [
    '20260719_135118.jpg', // Temple Scenery
    '20260719_141517.jpg', // Pavilion with Hallasan
    '20260719_135127.jpg'  // Main Hall
  ];
  
  slideImages.forEach((img, index) => {
    const slide = document.createElement('div');
    slide.className = `hero-slide ${index === 0 ? 'active' : ''}`;
    slide.style.backgroundImage = `url('./images/${img}')`;
    slider.appendChild(slide);
  });
  
  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');
  
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 6000);
}

// 5. Dynamic Gallery Logic
function initGallery() {
  const grid = document.getElementById('gallery-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Filter functionality
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      currentCategory = e.target.getAttribute('data-filter');
      itemsToShow = 12;
      
      grid.style.opacity = 0;
      setTimeout(() => {
        renderGallery();
        grid.style.opacity = 1;
      }, 250);
    });
  });

  // Load More functionality
  loadMoreBtn.addEventListener('click', () => {
    itemsToShow += 12;
    renderGallery();
  });

  // Initial Render
  renderGallery();
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');
  
  // Filter items
  if (currentCategory === 'all') {
    filteredItems = mediaItems;
  } else {
    filteredItems = mediaItems.filter(item => item.category === currentCategory);
  }
  
  // Slice items to show
  const visibleItems = filteredItems.slice(0, itemsToShow);
  
  // Clear grid
  grid.innerHTML = '';
  
  // Render
  visibleItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'gallery-item reveal';
    card.setAttribute('data-index', index);
    
    let mediaHtml = '';
    let iconClass = 'fa-search-plus';
    
    if (item.type === 'youtube') {
      mediaHtml = `<img src="https://img.youtube.com/vi/${item.src}/hqdefault.jpg" alt="${item.title}" class="youtube-thumb" loading="lazy">`;
      iconClass = 'fa-play-circle';
    } else if (item.type === 'video') {
      mediaHtml = `<video muted preload="metadata"><source src="./images/${item.src}" type="video/mp4"></video>`;
      iconClass = 'fa-play-circle';
    } else {
      mediaHtml = `<img src="./images/${item.src}" alt="${item.title}" loading="lazy">`;
    }
    
    card.innerHTML = `
      <div class="gallery-media-wrapper">
        ${mediaHtml}
        <div class="gallery-item-overlay">
          <span class="gallery-item-icon"><i class="fas ${iconClass}"></i></span>
        </div>
      </div>
      <div class="gallery-item-caption">
        ${item.title}
      </div>
    `;
    
    // Attach Lightbox event
    card.addEventListener('click', () => {
      openLightbox(mediaItems.indexOf(item));
    });
    
    grid.appendChild(card);
    
    // Quick delay trigger for scroll reveal of newly rendered items
    setTimeout(() => {
      card.classList.add('active');
    }, index * 30);
  });
  
  // Show/Hide Load More Button
  if (itemsToShow >= filteredItems.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'inline-block';
  }
}

// 6. Lightbox Logic
let currentLightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  
  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', prevLightbox);
  nextBtn.addEventListener('click', nextLightbox);
  
  // Close on backdrop click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const item = mediaItems[index];
  const lightbox = document.getElementById('lightbox');
  const mediaContainer = document.getElementById('lightbox-media-container');
  const caption = document.getElementById('lightbox-caption');
  
  // Reset container
  mediaContainer.innerHTML = '';
  
  if (item.type === 'youtube') {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${item.src}?autoplay=1`;
    iframe.className = 'lightbox-video';
    iframe.style.border = '0';
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', 'true');
    mediaContainer.appendChild(iframe);
  } else if (item.type === 'video') {
    const video = document.createElement('video');
    video.src = `./images/${item.src}`;
    video.controls = true;
    video.autoplay = true;
    video.className = 'lightbox-video';
    mediaContainer.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = `./images/${item.src}`;
    img.alt = item.title;
    img.className = 'lightbox-img';
    mediaContainer.appendChild(img);
  }
  
  caption.textContent = '';
  
  lightbox.style.display = 'flex';
  // Force reflow
  lightbox.offsetHeight;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const mediaContainer = document.getElementById('lightbox-media-container');
  
  lightbox.classList.remove('active');
  setTimeout(() => {
    lightbox.style.display = 'none';
    mediaContainer.innerHTML = '';
  }, 400);
  
  document.body.style.overflow = 'auto';
}

function prevLightbox() {
  // Navigation should stay within filtered items or all items
  let newIndex = currentLightboxIndex - 1;
  if (newIndex < 0) newIndex = mediaItems.length - 1;
  openLightbox(newIndex);
}

function nextLightbox() {
  let newIndex = (currentLightboxIndex + 1) % mediaItems.length;
  openLightbox(newIndex);
}

// 7. Scroll Reveal Animations
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => revealObserver.observe(el));
}

// 8. Navigation Active Link Syncing
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section, hero');
  const navLinks = document.querySelectorAll('.nav-link');
  let currentActiveId = '';
  
  const scrollPosition = window.scrollY + 200; // Offset to trigger early
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentActiveId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentActiveId}`) {
      link.classList.add('active');
    }
  });
}

// 9. Quick Consultation Modal & Form Handler
function initConsultations() {
  const modal = document.getElementById('consult-modal');
  const openBtn = document.getElementById('open-consult-modal');
  const closeBtn = document.getElementById('close-consult-modal');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
      setTimeout(() => {
        modal.classList.add('active');
      }, 10);
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 400);
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        setTimeout(() => {
          modal.style.display = 'none';
        }, 400);
      }
    });
  }

  const handleFormSubmit = (formId) => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = {
        callerName: formData.get('callerName'),
        callerPhone: formData.get('callerPhone'),
        enshrineType: formData.get('enshrineType'),
        message: formData.get('message') || '없음'
      };

      // Local Server API backup save
      try {
        const response = await fetch('/api/save-consultation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        if (!response.ok) {
          console.warn('Local backup failed, proceeding with direct message linkage');
        }
      } catch (err) {
        console.warn('Backup error:', err);
      }

      // SMS/KakaoTalk message template builder
      const messageText = `[제주 소원사 상담 신청]\n성함: ${data.callerName}\n연락처: ${data.callerPhone}\n유형: ${data.enshrineType}\n문의: ${data.message}`;

      // Close modal if open
      if (modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        setTimeout(() => {
          modal.style.display = 'none';
        }, 400);
      }

      // Alert the user and offer direct SMS redirection
      const userChoice = confirm(`상담 신청이 정상 접수되었습니다!\n\n안내 법사님(010-5557-0267)께 작성하신 상담 내용을 문자로 즉시 전송하시겠습니까?`);
      if (userChoice) {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        const separator = isIOS ? '&' : '?';
        const smsUrl = `sms:010-5557-0267${separator}body=${encodeURIComponent(messageText)}`;
        window.location.href = smsUrl;
      } else {
        alert('상담 신청이 완료되었습니다. 사찰에서 신속하게 검토 후 연락드리겠습니다.');
      }

      form.reset();
    });
  };

  handleFormSubmit('consultation-form');
  handleFormSubmit('modal-consultation-form');
}
