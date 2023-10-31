const main = document.querySelector("main");
const numberOfStickers = 41;
const stickers = [];
const svgGrp = [
    ``,
    `<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.54 56.7"><g id="_1"><path id="bg" class="cls-4" d="m55.48,7.75c-4.32-.85-8.66-1.6-12.95-2.55-6.32-1.4-12.74-2.54-18.86-4.57-2.84-.94-5.29-.61-7.95-.36-2.54.24-4.79,1.14-6.64,2.93C3.09,9,.26,16.17.01,24.39c-.49,16.44,11.1,29.94,27.65,32.06,18.45,2.37,34.68-12.41,34.88-33.81.08-3-1.47-8.17-4.38-12.97-.64-1.05-1.51-1.69-2.68-1.92ZM15.16,1.76c2.51-.19,5.06-.83,6.47,2.21.37.8,1.16,1.31,2.01,1.58,1.83.58,3.44,1.58,5.48,2.61-1.34.35-2.33.37-3.27.8-.97.44-1.94-.15-2.35-.98-.87-1.77-2.08-2.67-4.12-2.84-1.95-.16-3.68-1.04-4.23-3.38Zm41.24,10.92c-.77-.28-1.3-.32-1.76.63-1.06,2.21-3.38,3.37-5.26,4.33-1.38.71-3.4,1.45-5.29,1.37-.52-.02-.89.09-1.3.35-.27.17-.73.42-.9.31-1.61-1.02-3.99-.49-5.13-2.18-1.03-1.52.03-3.31.15-4.97.02-.3.47-.69.39-.87-1.28-2.54.81-1.82,1.91-1.98,2.07-.32,4.09-.15,6.07.62.59.23,1.42.34,1.97.11,2.56-1.09,5.04-.37,7.56.06,1.62.28,2.33,1.56,3.24,2.76-.55-.18-1.11-.34-1.65-.54Z"/><path id="num" class="cls-2" d="m34.87,35.02c-.13,0-.27-.03-.4,0-1.34.3-1.57-.37-1.45-1.52.45-4.32.85-8.65,1.27-12.97.05-2.64.43-5.26.62-7.89.11-1.56-.35-1.9-1.54-2.14h0c-1.38-1.13-2.85-1.11-4.43-.42-1.59.69-3.22,1.31-4.97,1.5-.61.06-.95.28-1.11.92-.8,3.29-.39,3.87,2.9,3.92.13,0,.27.04.4,0,1.7-.37,1.8.48,1.65,1.88-.49,4.53-.9,9.06-1.25,13.6-.2,2.59-.14,2.6-2.64,2.19q-3.36-.54-3.8,2.61c-.05.33-.16.65-.25.97-.3,1.11.18,1.65,1.27,1.74,5.26.44,10.52.88,15.78,1.33.67.06,1.1-.04,1.34-.81,1.18-3.78.44-4.89-3.38-4.93Z"/><path class="cls-3" d="m54.81,10.45c-2.52-.43-5-1.14-7.56-.06-.55.23-1.38.12-1.97-.11-1.98-.77-4-.93-6.07-.62-1.1.17-3.19-.55-1.91,1.98.09.18-.36.57-.39.87-.12,1.67-1.18,3.45-.15,4.97,1.15,1.69,3.52,1.15,5.13,2.18.17.11.63-.14.9-.31.41-.26.78-.38,1.3-.35,1.89.08,3.91-.65,5.29-1.37,1.87-.96,4.2-2.13,5.26-4.33.45-.94.99-.91,1.76-.63.54.2,1.1.36,1.65.54-.91-1.2-1.62-2.49-3.24-2.76Z"/><path class="cls-1" d="m23.51,7.98c.41.83,1.38,1.42,2.35.98.94-.43,1.93-.44,3.27-.8-2.04-1.03-3.66-2.04-5.48-2.61-.85-.27-1.64-.79-2.01-1.58-1.42-3.04-3.96-2.4-6.47-2.21.55,2.34,2.27,3.22,4.23,3.38,2.04.17,3.25,1.06,4.12,2.84Z"/><path class="cls-3" d="m35.13,12.65c-.23,2.63-.05,5.3-.84,7.88,1.85-3.66.79-7.61,1.26-11.48-.38,1.18-1.13,1.53-2.18,1.45h0c1.48,0,1.9.55,1.76,2.15Z"/><path class="cls-3" d="m34.91,12.64c-.18,2.63-.56,5.25-.62,7.89.78-2.58.6-5.25.84-7.88.14-1.6-.28-2.16-1.76-2.15,1.19.23,1.65.58,1.54,2.14Z"/></g></svg>`,
    `<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.51 61.23"><g id="_2"><path id="bg" class="cls-2" d="m.01,30.04c.05-1.69-.08-3.38.42-5.04.14-.45.3-.84.71-1.09,4.05-2.55,7.71-5.63,11.63-8.35,4.79-3.32,9.22-7.12,14.02-10.43,1.69-1.16,3.38-2.39,4.81-3.91,1.52-1.6,3.41-1.3,5.26-.89,6.86,1.51,12.73,4.82,17.37,10.1,3.43,3.91,5.79,8.46,6.78,13.59.68,3.54.62,7.09.11,10.7-.71,5.04-2.45,9.6-5.3,13.76-3.43,5.01-8.12,8.52-13.73,10.71-4.55,1.77-9.3,2.39-14.22,1.88-5.35-.55-10.1-2.44-14.55-5.44-4.63-3.12-8.02-7.25-10.39-12.18C.91,39.26-.13,34.75.01,30.04Z"/><path id="num" class="cls-1" d="m45.83,38.22c-.64-1.14-1.33-2.26-2.02-3.38-.3-.49-.73-.61-1.25-.31-1.21.68-2.44,1.32-3.63,2.03-1.09.65-2.15,1.37-3.22,2.06-.26.17-.51.37-.83.21-.33-.18-.05-.47-.09-.7-.18-.98.61-1.67.75-2.54.45-2.94,1.14-5.84.98-8.87-.23-4.31-2.06-7.55-5.82-9.69-.85-.86-1.81-1.09-2.92-.53-.61,0-1.21.01-1.82.02,0,0,0,0,0,0-.43.37-.82.73-.91,1.37-.16,1.05-1.42,1.16-1.84,2.01,0,.02-.02.04-.03.06.04.12.12.2.24.24.03-.01.05-.03.08-.04.23-.23.37-.57.81-.53.16.55-.03,1.03-.32,1.46-.77,1.16-1.81,2.07-2.91,2.9-.3.23-.68.38-1.05.22-.45-.2-.06-.59-.1-.89-.1-.62-.18-1.29.6-1.61.2-.04.38-.1.57-.17.11-.11.22-.22.31-.34-.07-.12-.06-.25.03-.4-.07-.51.27-1.08-.22-1.53-.09-.17-.09-.3-.04-.41-.15-.15-.33-.24-.62-.05-1.99,1.92-3.06,4.32-3.69,6.97-.15.63.09.9.61.91.98.02,1.81.41,2.69.76,1.08.43,1.29.23,1.66-.87.64-1.9,1.4-3.76,3.48-4.59,3.2-.55,5.11.78,5.6,3.9.21,1.35.22,2.68,0,4.06-.32,2.01-.81,3.93-1.26,5.97,0,0-.2.66-.29,1.02-.47,1.84-1,3.66-1.47,5.5-.24.93-.84,1.73-.77,2.78.17,2.36,1.76,3.29,3.69,2.07,1.72-1.08,3.48-2.08,5.3-2.98,3.03-1.49,6.04-3.03,9.07-4.54.65-.33,1.06-.78.65-1.51Z"/><path class="cls-3" d="m33.75,40.23c-.24.02-.37-.13-.32-.32.09-.33.12-.77.53-.87.23-.05.36.23.35.46-.02.36-.19.63-.56.73Z"/></g></svg>`,
    `<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.39 61.45"><g id="_3"><path id="bg" class="cls-2" d="m61.34,30.6c.07,7.57-2.28,13.79-6.47,19.2-4.19,5.41-9.77,8.99-16.47,10.73-5.32,1.38-10.56,1.13-15.84-.27-4.02-1.07-7.66-2.89-10.87-5.41-4.41-3.46-7.71-7.86-9.65-13.19C.81,38.3.02,34.84,0,31.26c-.03-6.58,1.73-12.72,5.57-18.06,3.09-4.29,6.85-7.95,11.83-10.21C21.63,1.08,26.03-.07,30.63,0c4.57.07,8.93,1.33,13.02,3.43,4.29,2.2,7.83,5.25,10.92,8.93,2.58,3.07,4.42,6.53,5.56,10.31.82,2.74,1.46,5.59,1.21,7.93Z"/><path id="num" class="cls-1" d="m30.17,45.92c-3.43.16-5.92-1.07-8.21-2.92-.51-.42-.48-.85-.27-1.27.57-1.14,1.18-2.27,1.84-3.36.35-.58,1.01-.44,1.21,0,.52,1.14,1.67,1.29,2.57,1.61,1.83.65,3.74.93,5.66-.02,1.34-.66,2.07-1.61,2.01-3.05-.06-1.53-.78-2.74-2.25-3.33-1.57-.63-3.24-.62-4.89-.58-1.68.04-1.66.07-1.7-1.6-.02-.75-.12-1.5-.22-2.24-.1-.73.09-.91.89-.97,1.97-.14,3.83-.74,5.19-2.28,1.01-1.14,1.01-2.67.18-3.94-.74-1.13-1.97-1.61-3.46-1.25-1.66.41-3.19,1.02-4.14,2.62-.49.82-1.19.8-1.82.02-.59-.73-1.13-1.53-1.9-2.07-.91-.64-.79-1.35-.15-1.97,1.94-1.87,4.08-3.37,6.86-3.82,1.32-.21,2.63-.4,3.92-.19,3.04.5,5.57,1.62,7.07,4.7,1.24,2.54.92,4.76-.35,6.99-.48.84-1.24,1.59-2.24,1.95-.34.12-.67.31-.65.68.02.51.48.35.79.38,2.83.35,4.99,2.5,5.27,5.46.13,1.41.21,2.85-.11,4.27-.36,1.6-1.32,2.88-2.62,3.69-1.75,1.09-3.66,1.93-5.77,2.23-1.04.14-2.06.37-2.71.26Z"/></g></svg>`

]
console.log(svgGrp[0])

class Mover {
    constructor(num, posX, posY, initialVelocityX, initialVelocityY, changeInter, pauseTime) {
        this.num = num;
        this.quadrant = null;
        this.location = { x: posX, y: posY };
        this.velocity = { x: initialVelocityX, y: initialVelocityY };

        this.stickerWrap = this.createDiv(this.num);
        this.sticker = this.stickerWrap.querySelector(".sticker"); // Select the .sticker element
        this.isMouseOver = false;

        this.rotation = 0; // 초기 회전 각도
        this.rotationSpeed = .4; // 회전 속도
        this.setupRotation();

        this.shouldPause = false; // sticker가 멈춰 있는지 여부를 나타내는 플래그
        this.pauseDuration = 1000; // 멈추는 시간 (1초)
        this.pauseTime = pauseTime;
        this.setupPause();

        this.update();
        this.setupMouseEvents();
        this.directionChangeInterval = changeInter; // 방향 변경 간격 (5초)
        this.setupDirectionChange();
    }

    createDiv(num) {
        const stickerWrap = document.createElement("div");
        stickerWrap.className = "sticker-wrap";

        const sticker = document.createElement("img");
        // sticker.innerHTML = svgGrp[num]
        sticker.className = "sticker num-img hoverable";
        sticker.src = `./assets/img/SVG/number/SVG/Asset ${num}.svg`;
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

    setupDirectionChange() {
        setInterval(() => {
            if (!this.isMouseOver) {
                // 랜덤한 방향으로 변경
                this.velocity.x = getRandomVelocity();
                this.velocity.y = getRandomVelocity();
            }
        }, this.directionChangeInterval);
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

    checkQuadrant() {
        const isLeftHalf = this.location.x < window.innerWidth / 2;
        const isTopHalf = this.location.y < window.innerHeight / 2;
        const stickerSize = "20px"

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
            hoverImg.style.bottom = "28px";
            hoverImg.style.left = stickerSize;
            hoverImg.style.right = "auto";
        } else {
            hoverImg.style.top = "auto";
            hoverImg.style.bottom = "28px";
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

    setupRotation() {
        setInterval(() => {
          if (!this.isMouseOver) {
            // 1도씩 회전
            this.rotation += this.rotationSpeed;
            if (this.rotation >= 360) {
              this.rotation = 0; // 360도 돌면 0도로 초기화
            }
            this.sticker.style.transform = `rotate(${this.rotation}deg)`;
          }
        }, 50); // 회전 속도를 조절할 수 있는 시간 간격
      }

    setupPause() {
        setInterval(() => {
            if (!this.isMouseOver) {
                this.shouldPause = !this.shouldPause;
                if (this.shouldPause) {
                    // sticker를 멈춤
                    this.velocity.x = 0;
                    this.velocity.y = 0;
                    setTimeout(() => {
                        // 멈춘 후 일정 시간이 지나면 다시 이동
                        this.velocity.x = getRandomVelocity();
                        this.velocity.y = getRandomVelocity();
                    }, this.pauseDuration);
                }
            }
        }, this.pauseDuration * this.pauseTime); // pauseDuration의 2배 간격으로 설정
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
function getRandomNumber(min, max) {
    // 0 이상 1 미만의 난수를 생성하고, 이를 0 이상 1 이하의 범위로 변환한 다음 원하는 범위로 확장합니다.
    var randomNumber = Math.random() * (min - max) + max;

    // 소수점 이하를 제거하여 정수로 변환합니다.
    return Math.floor(randomNumber);
}

function createRandomStickers() {
    for (let i = 1; i <= numberOfStickers; i++) {
        const posX = getRandomPosition(window.innerWidth - 300) + 100;
        const posY = getRandomPosition(window.innerHeight - 300) + 100;
        const velocityX = getRandomVelocity();
        const velocityY = getRandomVelocity();
        let chInter = getRandomNumber(8000, 12000);
        let pTime = getRandomNumber(2, 8);
        stickers.push(new Mover(i, posX, posY, velocityX, velocityY, chInter, pTime));
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

// let cursor;
// let bigBall;
// let smallBall;

// let body;
// let widthMatches = false;

// window.addEventListener("load", () => {
//    cursor = document.querySelector(".cursor");
//    body = document.body;

//    bigBall = document.querySelector(".cursor__ball--big");
//    smallBall = document.querySelector(".cursor__ball--small");

//    // Listeners
//    var x = window.matchMedia("(min-width: 768px)");
//    togglePageCursor(x);
//    x.addListener(togglePageCursor);

//    body.addEventListener("mousemove", onMouseMove);
//    document.querySelectorAll(".hoverable").forEach((e) => {
//       e.addEventListener("mouseenter", onMouseHover);
//       e.addEventListener("mouseleave", onMouseHoverOut);
//    });
// });

// function togglePageCursor(e) {
//    if (e.matches) {
//       widthMatches = true;
//       body.style.cursor = "none";
//    } else {
//       widthMatches = false;
//       body.style.cursor = "";
//       cursor.style.display = "none";
//    }
// }

// // Move the cursor
// function onMouseMove(e) {
//    if (widthMatches) {
//       cursor.style.display = "block";
//    }

//    gsap.to(bigBall, {
//       x: e.pageX - 20,
//       y: e.pageY - 15,
//       duration: 0.4,
//       ease: "ease-in-out"
//    });
// }

// // Hover an element
// function onMouseHover() {
//    gsap.to(bigBall, {
//       scale: 2,
//       duration: 0.3
//    });
// }

// function onMouseHoverOut() {
//    gsap.to(bigBall, {
//       scale: 1,
//       duration: 0.3
//    });
// }


function floatingObject(selector, time, delay, size, rotation) {
    gsap.to(selector, time, {
        y: size,
        rotation: rotation,
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