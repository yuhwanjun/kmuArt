const main = document.querySelector("main");
const stickerCount = 41;
const stickerSize = 30; // 스티커의 가로 높이 크기
const margin = 20; // 스티커 간의 여백
const exclusionZone = 100; // 200px의 제외 영역

const exclusionRectangles = []; // 제외 영역을 저장할 배열

// 상단, 하단, 좌측, 우측의 200px 범위에 대한 제외 영역을 계산
exclusionRectangles.push({
  left: 0,
  top: 0,
  width: main.clientWidth,
  height: exclusionZone,
}); // 상단
exclusionRectangles.push({
  left: 0,
  top: main.clientHeight - exclusionZone,
  width: main.clientWidth,
  height: exclusionZone,
}); // 하단
exclusionRectangles.push({
  left: 0,
  top: exclusionZone,
  width: exclusionZone,
  height: main.clientHeight - exclusionZone * 2,
}); // 좌측
exclusionRectangles.push({
  left: main.clientWidth - exclusionZone,
  top: exclusionZone,
  width: exclusionZone,
  height: main.clientHeight - exclusionZone * 2,
}); // 우측

for (let i = 0; i < stickerCount; i++) {
  const stickerWrap = document.createElement("div");
  stickerWrap.classList.add("sticker-wrap");

  const sticker = document.createElement("div");
  sticker.classList.add("sticker");
  sticker.textContent = (i + 1).toString();

  const hoverImg = document.createElement("img");
  hoverImg.classList.add("hover-img");
  hoverImg.src = "./assets/img/(1).jpg";
  hoverImg.alt = "";

  let left, top, isOverlap;
  const maxTries = 100; // 최대 시도 횟수
  let tries = 0;

  do {
    left = getRandomPosition(main.clientWidth - stickerSize);
    top = getRandomPosition(main.clientHeight - stickerSize);
    isOverlap = false;

    // 제외 영역과 스티커의 충돌 확인
    for (const exclusion of exclusionRectangles) {
      if (
        left + stickerSize + margin > exclusion.left &&
        left - margin < exclusion.left + exclusion.width &&
        top + stickerSize + margin > exclusion.top &&
        top - margin < exclusion.top + exclusion.height
      ) {
        isOverlap = true;
        break;
      }
    }

    isOverlap =
      isOverlap || checkOverlap(stickerWrap, left, top, stickerSize, margin);
    tries++;
  } while (isOverlap && tries < maxTries);

  stickerWrap.style.left = left + "px";
  stickerWrap.style.top = top + "px";

  stickerWrap.appendChild(sticker);
  stickerWrap.appendChild(hoverImg);
  main.appendChild(stickerWrap);
}

function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function checkOverlap(element, left, top, size, margin) {
  const elementRect = {
    left: left,
    top: top,
    right: left + size,
    bottom: top + size,
  };

  const elements = document.querySelectorAll(".sticker-wrap");
  for (const other of elements) {
    if (other === element) continue;

    const otherRect = other.getBoundingClientRect();

    // 스티커 간의 충돌을 확인
    if (
      elementRect.right + margin > otherRect.left &&
      elementRect.left - margin < otherRect.right &&
      elementRect.bottom + margin > otherRect.top &&
      elementRect.top - margin < otherRect.bottom
    ) {
      return true;
    }
  }

  return false;
}

const stickerWraps = document.querySelectorAll(".sticker-wrap");
const isMoving = [];

function getRandomDirection() {
  const directions = ["up", "down", "left", "right"];
  const randomDirection =
    directions[Math.floor(Math.random() * directions.length)];
  return randomDirection;
}

const vel = 2;

function moveStickerWrap(stickerWrap, index) {
  const direction = getRandomDirection();
  const currentPosition = getComputedStyle(stickerWrap);
  let left = parseFloat(currentPosition.left);
  let top = parseFloat(currentPosition.top);

  switch (direction) {
    case "up":
      top -= vel; // 이동 속도 조절
      break;
    case "down":
      top += vel; // 이동 속도 조절
      break;
    case "left":
      left -= vel; // 이동 속도 조절
      break;
    case "right":
      left += vel; // 이동 속도 조절
      break;
  }

  // stickerWrap.style.transition = 'top 1s, left 1s'; // 부드럽게 이동하도록 transition 설정
  stickerWrap.style.left = left + "px";
  stickerWrap.style.top = top + "px";

  // transition이 끝날 때 transition 속성 초기화
  stickerWrap.addEventListener("transitionend", () => {
    stickerWrap.style.transition = "";
  });

  if (isMoving[index]) {
    setTimeout(() => moveStickerWrap(stickerWrap, index), 200); // 이동 간격을 100밀리초로 설정
  }
}

stickerWraps.forEach((stickerWrap, index) => {
  isMoving[index] = true;

  // 초기 위치를 랜덤하게 설정 (200px의 공간 내에서)
  const initialPosition = getRandomPosition(stickerWrap);
  stickerWrap.style.left = initialPosition.x + "px";
  stickerWrap.style.top = initialPosition.y + "px";

  moveStickerWrap(stickerWrap, index);

  stickerWrap.addEventListener("mouseenter", () => {
    isMoving[index] = false;
  });

  stickerWrap.addEventListener("mouseleave", () => {
    isMoving[index] = true;
    moveStickerWrap(stickerWrap, index);
  });
});


$(document).ready(function () {
    // .sticker-wrap 요소에 Draggable를 적용
    $('.sticker-wrap').draggable({
        scroll: false, // 스크롤 방지
    });

    // .sticker-wrap 요소에 마우스 호버 이벤트를 추가
    $('.sticker-wrap').on('mouseenter', function () {
        const stickerWrap = $(this);
        const hoverImg = stickerWrap.find('.hover-img');

        // Hover 이미지의 우측 하단 좌표
        const hoverImgRight = stickerWrap.width() - hoverImg.width();
        const hoverImgBottom = stickerWrap.height() - hoverImg.height();

        // 조건에 따라 Sticker와 Hover 이미지의 위치를 변경
        if (hoverImgRight < 0 && hoverImgBottom < 0) {
            // Hover 이미지가 우측 하단에 호버될 때
            hoverImg.css({
                top: -hoverImg.height() + 'px',
                left: 0,
            });
        }
    });
});


class MouseTracker {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.quadrant = null;

    this.updateMousePosition = this.updateMousePosition.bind(this);
    window.addEventListener("mousemove", this.updateMousePosition);
  }

  updateMousePosition(event) {
    this.x = event.clientX;
    this.y = event.clientY;
    this.updateQuadrant();
    console.log(this.quadrant)
  }

  updateQuadrant() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (this.x < screenWidth / 2 && this.y < screenHeight / 2) {
      this.quadrant = 1;
    } else if (this.x >= screenWidth / 2 && this.y < screenHeight / 2) {
      this.quadrant = 2;
    } else if (this.x < screenWidth / 2 && this.y >= screenHeight / 2) {
      this.quadrant = 3;
    } else {
      this.quadrant = 4;
    }
  }

  getCurrentPosition() {
    return { x: this.x, y: this.y, quadrant: this.quadrant };
  }

  removeMouseTracker() {
    window.removeEventListener("mousemove", this.updateMousePosition);
  }
}

const mouseTracker = new MouseTracker();

class Mover {
  constructor(){
    this.location;
    this.velocity;
  }
  update(){
    
  }
  createDiv(num){
    const stickerWrap = document.createElement("div");
    stickerWrap.classList.add("sticker-wrap");

    const sticker = document.createElement("div");
    sticker.classList.add("sticker");
    sticker.textContent = (num + 1).toString();

    const hoverImg = document.createElement("img");
    hoverImg.classList.add("hover-img");
    hoverImg.src = "./assets/img/(1).jpg";
    hoverImg.alt = `${num}`;

    stickerWrap.appendChild(sticker);
    stickerWrap.appendChild(hoverImg);
    main.appendChild(stickerWrap);
  }
}