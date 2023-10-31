const main = document.querySelector("main");
const numberOfStickers = 41;
const stickers = [];

class MouseTracker {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.quadrant = null;

    this.updateMousePosition = this.updateMousePosition.bind(this);
    window.addEventListener("mousemove", this.updateMousePosition);
  }

  updateMousePosition(event) {
    const { clientX, clientY } = event;
    this.x = clientX;
    this.y = clientY;
    this.updateQuadrant();
  }

  updateQuadrant() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const isLeftHalf = this.x < screenWidth / 2;
    const isTopHalf = this.y < screenHeight / 2;

    this.quadrant = isLeftHalf
      ? isTopHalf
        ? 1
        : 3
      : isTopHalf
      ? 2
      : 4;
  }

  getCurrentPosition() {
    return { x: this.x, y: this.y, quadrant: this.quadrant };
  }

  removeMouseTracker() {
    window.removeEventListener("mousemove", this.updateMousePosition);
  }
}

class Mover {
  constructor(num, posX, posY, initialVelocityX, initialVelocityY) {
    this.num = num;
    this.mouse = new MouseTracker();
    this.quadrant = null;
    this.location = { x: posX, y: posY };
    this.velocity = { x: initialVelocityX, y: initialVelocityY };

    this.stickerWrap = this.createDiv(this.num);
    this.isMouseOver = false;

    this.startMoving();
    this.setupMouseEvents();
  }

  createDiv(num) {
    const stickerWrap = document.createElement("div");
    stickerWrap.className = "sticker-wrap";

    const sticker = document.createElement("img");
    sticker.className = "sticker num-img hoverable";
    sticker.src = `./assets/img/SVG/number/1x/${num}.png`;
    sticker.alt = `${num}`;

    const hoverImg = document.createElement("img");
    hoverImg.className = "hover-img";
    hoverImg.src = `./assets/img/(${num}).jpg`;
    hoverImg.alt = `${num}`;

    stickerWrap.appendChild(sticker);
    stickerWrap.appendChild(hoverImg);
    main.appendChild(stickerWrap);

    return stickerWrap;
  }

  updatePosition() {
    this.stickerWrap.style.left = this.location.x + "px";
    this.stickerWrap.style.top = this.location.y + "px";
  }

  update() {
    if (!this.isMouseOver) {
      this.checkEdge();
      this.location.x += this.velocity.x;
      this.location.y += this.velocity.y;
      this.updatePosition();
      this.checkQuadrant()
    }
  }

  startMoving() {
    this.update();
  }

  checkQuadrant() {
    const stickerWidth = this.stickerWrap.offsetWidth;
    const stickerHeight = this.stickerWrap.offsetHeight;
  
    const isLeftHalf = this.location.x < window.innerWidth / 2;
    const isTopHalf = this.location.y < window.innerHeight / 2;
    const stickerSize = "40px"
  
    // 색상 변경
    this.stickerWrap.style.backgroundColor = [
      "red", "blue", "yellow", "green"
    ][this.quadrant - 1];
  
    // 이미지 위치 변경
    const hoverImg = this.stickerWrap.querySelector(".hover-img");

    if (isLeftHalf && isTopHalf) {
      hoverImg.style.top = stickerSize;
      hoverImg.style.bottom = "auto";
      hoverImg.style.left = stickerSize;
      hoverImg.style.right = "auto";
    } else if (!isLeftHalf && isTopHalf) {
      hoverImg.style.top = stickerSize;
      hoverImg.style.bottom = "auto";
      hoverImg.style.left = "auto";
      hoverImg.style.right = stickerSize;
    } else if (isLeftHalf && !isTopHalf) {
      hoverImg.style.top = "auto";
      hoverImg.style.bottom = "48px";
      hoverImg.style.left = stickerSize;
      hoverImg.style.right = "auto";
    } else {
      hoverImg.style.top = "auto";
      hoverImg.style.bottom = "48px";
      hoverImg.style.left = "auto";
      hoverImg.style.right = stickerSize;
    }
  }

  checkEdge() {
    const stickerWidth = this.stickerWrap.offsetWidth;
    const stickerHeight = this.stickerWrap.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (this.location.x <= 0 || this.location.x + stickerWidth >= screenWidth) {
      this.velocity.x *= -1;
    }

    if (this.location.y <= 0 || this.location.y + stickerHeight >= screenHeight) {
      this.velocity.y *= -1;
    }
  }

  setupMouseEvents() {
    this.stickerWrap.addEventListener("mouseenter", () => {
      this.isMouseOver = true;
    });

    this.stickerWrap.addEventListener("mouseleave", () => {
      this.isMouseOver = false;
    });
  }
}

function createRandomStickers() {
  for (let i = 1; i <= numberOfStickers; i++) {
    const posX = getRandomPosition(window.innerWidth - 400) + 200;
    const posY = getRandomPosition(window.innerHeight - 400) + 200;
    const velocityX = getRandomVelocity();
    const velocityY = getRandomVelocity();
    stickers.push(new Mover(i, posX, posY, velocityX, velocityY));
  }
}

function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function getRandomVelocity() {
  return (Math.random() * 2 - 1) / 4;
}

function animateStickers() {
  for (const sticker of stickers) {
    sticker.update();
  }

  requestAnimationFrame(animateStickers);
}

createRandomStickers();
animateStickers();

let cursor;
let bigBall;
let smallBall;

let body;
let widthMatches = false;

window.addEventListener("load", () => {
   cursor = document.querySelector(".cursor");
   body = document.body;

   bigBall = document.querySelector(".cursor__ball--big");
   smallBall = document.querySelector(".cursor__ball--small");

   // Listeners
   var x = window.matchMedia("(min-width: 768px)");
   togglePageCursor(x);
   x.addListener(togglePageCursor);

   body.addEventListener("mousemove", onMouseMove);
   document.querySelectorAll(".hoverable").forEach((e) => {
      e.addEventListener("mouseenter", onMouseHover);
      e.addEventListener("mouseleave", onMouseHoverOut);
   });
});

function togglePageCursor(e) {
   if (e.matches) {
      widthMatches = true;
      body.style.cursor = "none";
   } else {
      widthMatches = false;
      body.style.cursor = "";
      cursor.style.display = "none";
   }
}

// Move the cursor
function onMouseMove(e) {
   if (widthMatches) {
      cursor.style.display = "block";
   }

   gsap.to(bigBall, {
      x: e.pageX - 20,
      y: e.pageY - 15,
      duration: 0.4,
      ease: "ease-in-out"
   });
}

// Hover an element
function onMouseHover() {
   gsap.to(bigBall, {
      scale: 2,
      duration: 0.3
   });
}

function onMouseHoverOut() {
   gsap.to(bigBall, {
      scale: 1,
      duration: 0.3
   });
}


function floatingObject(selector, time, delay,size,rotation){
  gsap.to(selector, time, {
    y: size,
    rotation : rotation,
    repeat: -1, // -1 무한반복
    yoyo: true, // 애니메이션 되돌아오기(설정안할 시 끈킴)
    ease: Power1.easeInOut, // 타이밍함수
    delay: delay// 지연시간
  })
}
floatingObject('.axis-lump.img', 5, 0, 10, 5)
// floatingObject('.axis-lump.text', 5, 0.5, -20, 5)

floatingObject('.axis-incarnate.img', 5, 0.2, 10, -6)
// floatingObject('.axis-incarnate.text', 5, 0.3, -20, 4)