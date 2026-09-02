// 현재는 작은 동작만 담당합니다. 화면의 내용은 index.html, 디자인은 style.css에서 수정하세요.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    // 브라우저가 해당 섹션으로 부드럽게 이동합니다. (CSS의 scroll-behavior와 함께 작동)
  });
});
