const btn = document.querySelector("#btn-mode");
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const darkModeOn = darkModeMediaQuery.matches;

let isDark = darkModeOn;
document.body.classList.add(isDark ? "dark-theme" : "light-theme");
updateLabel();
// 表示を更新
function updateLabel() {
  btn.textContent = isDark ? "🌗":"🌗";
  }
// ボタンクリックでモード切り替え

btn.addEventListener("click", () => {
  isDark = !isDark;
    // モード切り替え
    document.body.classList.toggle("dark-theme", isDark);
    document.body.classList.toggle("light-theme", !isDark);
    updateLabel();
});
