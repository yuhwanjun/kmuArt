
// plath event
const svg = document.getElementById("my-svg");
const paths = svg.querySelectorAll(".cls-1 path");
console.log(paths)

function getRandomNumber() {
  return Math.random() < 0.5 ? -10 : 10;
}

svg.addEventListener("click", function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const clickAreaRadius = 200;

  paths.forEach((path) => {
    const bbox = path.getBBox();

    const centerX = bbox.x + bbox.width / 2;
    const centerY = bbox.y + bbox.height / 2;
    const distance = Math.sqrt(
      Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
    );

    // 클릭한 위치와 path 요소의 중심 간의 거리가 clickAreaRadius 이내인 경우에만 이동합니다.
    if (distance <= clickAreaRadius) {
      const transformValue = window
        .getComputedStyle(path)
        .getPropertyValue("transform");
      const matrix = new DOMMatrix(transformValue);

      const randomNumberX = getRandomNumber();
      const randomNumberY = getRandomNumber();
      // 현재 X, Y 좌표 값 가져오기
      const currentX = matrix.m41;
      const currentY = matrix.m42;

      // X, Y 좌표 값에 10을 더하여 새로운 위치로 이동
      const newX = currentX + randomNumberX;
      const newY = currentY + randomNumberY;

      // 새로운 위치로 요소 이동
      path.style.transform = `translate(${newX}px, ${newY}px)`;
    }
  });
});



// mouse event
const circle = document.querySelector('.mouse-circle');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX - circle.clientWidth / 2;
    const y = e.clientY - circle.clientHeight / 2;
    
    circle.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener('mousedown', () => {
    circle.style.backgroundColor = '#ffffff84'; // 클릭 시 색상 변경
});

document.addEventListener('mouseup', () => {
    circle.style.backgroundColor = '#25252584'; // 클릭 해제 시 원래 색상으로 복원
});