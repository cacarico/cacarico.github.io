window.onload = function () {
  const movingText = document.querySelector(".moving-text");
  const home = document.querySelector(".home");
  const textWidth = movingText.offsetWidth;
  const containerWidth = home.offsetWidth;
  const maxLeft = containerWidth - textWidth;

  movingText.style.animation = `moveText 4s linear infinite alternate`;
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(
    `
    @keyframes moveText {
      from { left: 0; }
      to { left: ${maxLeft}px; }
    }
  `,
    styleSheet.cssRules.length,
  );
};
