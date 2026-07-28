// Media Database
const mediaItems = [
  { type: 'youtube', src: 'O0Lfq4pKXRU', category: 'video', title: '소원사 소개 유튜브 영상' },
  { type: 'youtube', src: '9SFNz_iwMxo', category: 'video', title: '소원사 특별 유튜브 영상' },
  { type: 'video', src: '20260719_141532.mp4', category: 'video', title: '법당 내부와 청아한 예불 소리' },
  { type: 'video', src: '20260719_141544.mp4', category: 'video', title: '소원사 도량의 맑은 바람과 풍경 소리' },
  { type: 'image', src: '1784440538834.png', category: 'scenery', title: '소원사 안내 및 경내 조감도' },
  { type: 'image', src: '20260719_135118.jpg', category: 'scenery', title: '한라산 자락 아래 소원사 전경' },
  { type: 'image', src: '20260719_135120.jpg', category: 'scenery', title: '사찰 입구 계단과 울창한 조경수' },
  { type: 'image', src: '20260719_135127.jpg', category: 'scenery', title: '소원사 대웅전 전경' },
  { type: 'image', src: '20260719_135130.jpg', category: 'scenery', title: '대웅전 앞 잔디 마당과 석등' },
  { type: 'image', src: '20260719_141038.jpg', category: 'scenery', title: '요사채 발코니에서 바라본 제주시 전경' },
  { type: 'image', src: '20260719_141043.jpg', category: 'scenery', title: '발코니에서 바라본 한라산과 숲길' },
  { type: 'image', src: '20260719_141045.jpg', category: 'scenery', title: '요사채 주변의 푸른 소나무와 자연경관' },
  { type: 'image', src: '20260719_141048.jpg', category: 'scenery', title: '발코니 난간 너머의 돌담과 정원' },
  { type: 'image', src: '20260719_141050.jpg', category: 'scenery', title: '사찰을 둘러싼 울창한 제주 침엽수림' },
  { type: 'image', src: '20260719_141059.jpg', category: 'scenery', title: '추모관(봉안당) 내부 전경' },
  { type: 'image', src: '20260719_141102.jpg', category: 'scenery', title: '법당 천장에 장식된 오색 연등' },
  { type: 'image', src: '20260719_141105.jpg', category: 'scenery', title: '법당 내부의 엄숙하고 평온한 분위기' },
  { type: 'image', src: '20260719_141107.jpg', category: 'scenery', title: '연등 아래 매달린 신도들의 소원지' },
  { type: 'image', src: '20260719_141109.jpg', category: 'scenery', title: '대웅전 내부 삼존불상과 후불탱화' },
  { type: 'image', src: '20260719_141120.jpg', category: 'scenery', title: '대웅전 법당 내부 전경' },
  { type: 'image', src: '20260719_141327.jpg', category: 'scenery', title: '추모관에 봉안된 황금 불상들' },
  { type: 'image', src: '20260719_141329.jpg', category: 'scenery', title: '봉안당 내부의 차분한 목조 장식' },
  { type: 'image', src: '20260719_141332.jpg', category: 'scenery', title: '추모관 내 지장보살 원불' },
  { type: 'image', src: '20260719_141335.jpg', category: 'scenery', title: '경건한 기도를 올리는 추모 제단' },
  { type: 'image', src: '20260719_141338.jpg', category: 'scenery', title: '추모관 벽면의 정갈한 위패 안치대' },
  { type: 'image', src: '20260719_141348.jpg', category: 'scenery', title: '추모관에 바쳐진 흰 공양미 포대' },
  { type: 'image', src: '20260719_141410.jpg', category: 'scenery', title: '창밖으로 내다본 야외 지장보살상 로드' },
  { type: 'image', src: '20260719_141413.jpg', category: 'scenery', title: '발코니에서 내려다본 황금 불상 산책로' },
  { type: 'image', src: '20260719_141425.jpg', category: 'scenery', title: '사찰 입구의 석조 거북상과 조형물' },
  { type: 'image', src: '20260719_141429.jpg', category: 'scenery', title: '울창한 수림 사이로 보이는 제주 시내' },
  { type: 'image', src: '20260719_141445.jpg', category: 'scenery', title: '자연석으로 쌓아 올린 튼튼한 축대' },
  { type: 'image', src: '20260719_141451.jpg', category: 'scenery', title: '사찰 건물 측면 전통 기와 곡선' },
  { type: 'image', src: '20260719_141510.jpg', category: 'scenery', title: '법당 내부의 화려한 닷집 단청' },
  { type: 'image', src: '20260719_141517.jpg', category: 'scenery', title: '산신각 삼존불상과 탱화' },
  { type: 'image', src: '20260719_141523.jpg', category: 'scenery', title: '법당 정면 기둥의 주련 문구' },
  { type: 'image', src: '20260719_141626.jpg', category: 'scenery', title: '불단 위의 정갈한 황동 촛대와 공양물' },
  { type: 'image', src: '20260719_141630.jpg', category: 'scenery', title: '불법을 상징하는 황동 향로' },
  { type: 'image', src: '20260719_141711.jpg', category: 'pavilion', title: '푸른 하늘 아래 전통 목조 부연정자' },
  { type: 'image', src: '20260719_141713.jpg', category: 'pavilion', title: '부연정자 현판과 전통 기와' },
  { type: 'image', src: '20260719_141825.jpg', category: 'pavilion', title: '연못 물에 잔잔히 비친 부연정자의 반영' },
  { type: 'image', src: '20260719_141720.jpg', category: 'scenery', title: '도량 한편에 서 있는 삼층 석탑' },
  { type: 'image', src: '20260719_141724.jpg', category: 'scenery', title: '석탑 주변에 곱게 핀 분홍빛 수국' },
  { type: 'image', src: '20260719_141727.jpg', category: 'scenery', title: '자비로운 미소의 야외 석조 관세음보살상' },
  { type: 'image', src: '20260719_141741.jpg', category: 'scenery', title: '오랜 세월을 간직한 이끼 낀 기와돌담' },
  { type: 'image', src: '20260719_141747.jpg', category: 'scenery', title: '돌담 위에 얹은 기와 불사 명단' },
  { type: 'image', src: '20260719_141800.jpg', category: 'scenery', title: '돌담 너머로 평화롭게 펼쳐진 제주 초원' },
  { type: 'image', src: '20260719_141822.jpg', category: 'scenery', title: '수련이 가득 피어난 예쁜 연못' },
  { type: 'image', src: '20260719_141908.jpg', category: 'scenery', title: '사찰 옆 골짜기에 흐르는 맑은 계곡물' },
  { type: 'image', src: '20260719_141912.jpg', category: 'scenery', title: '계곡의 현무암 바위와 물결' },
  { type: 'image', src: '20260719_142018.jpg', category: 'scenery', title: '처마 끝에 매달려 바람에 흔들리는 물고기 풍경' },
  { type: 'image', src: '20260719_142021.jpg', category: 'scenery', title: '화려한 색감의 단청 문양 세부' },
  { type: 'image', src: '20260719_142023.jpg', category: 'scenery', title: '처마 단청과 바람을 노래하는 풍경종' },
  { type: 'image', src: '20260719_142032.jpg', category: 'scenery', title: '웅장한 범종각 목조 공포 구조' },
  { type: 'image', src: '20260719_142035.jpg', category: 'scenery', title: '방문객들이 쉬어갈 수 있는 그늘 아래 벤치' },
  { type: 'image', src: '20260719_142050.jpg', category: 'scenery', title: '사찰 주변의 청정한 자연 산책로' },
  { type: 'image', src: '20260719_142057.jpg', category: 'scenery', title: '불자들이 소원을 담아 쌓은 소원 돌탑들' },
  { type: 'image', src: '20260719_142102.jpg', category: 'scenery', title: '자연석에 양각으로 새긴 자비로운 보살 조각' },
  { type: 'image', src: '20260719_142112.jpg', category: 'scenery', title: '돌담 틈새에서 피어난 노란 들꽃' },
  { type: 'image', src: '20260719_142117.jpg', category: 'scenery', title: '전통 한옥 구조의 요사채 입구' },
  { type: 'image', src: '20260719_142141.jpg', category: 'scenery', title: '넓은 잔디광장과 조경 소나무들' },
  { type: 'image', src: '20260719_142144.jpg', category: 'scenery', title: '한라산을 병풍 삼아 앉은 고요한 도량' },
  { type: 'image', src: '20260719_142228.jpg', category: 'scenery', title: '정겨운 전통 장독대와 사찰 민가 풍경' },
  { type: 'image', src: '20260719_142231.jpg', category: 'scenery', title: '야간 참배객을 위한 정원 잔디등' },
  { type: 'image', src: '20260719_142305.jpg', category: 'scenery', title: '추모관 건물 정면 외경' },
  { type: 'image', src: '20260719_142308.jpg', category: 'scenery', title: '현대식 추모관의 정갈하고 깨끗한 입구' },
  { type: 'image', src: '20260719_142318.jpg', category: 'scenery', title: '추모관 내부 지장보살 헌화대' },
  { type: 'image', src: '20260719_142334.jpg', category: 'scenery', title: '소원사 종무소 건물 외경' },
  { type: 'image', src: '20260719_142337.jpg', category: 'scenery', title: '도량을 수호하는 거대한 느티나무' },
  { type: 'image', src: '20260719_142344.jpg', category: 'scenery', title: '주차장에서 사찰로 이어지는 조용한 길' }
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
      ${mediaHtml}
      <div class="gallery-item-overlay">
        <span class="gallery-item-icon"><i class="fas ${iconClass}"></i></span>
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
    iframe.style.width = '100%';
    iframe.style.height = '100%';
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
