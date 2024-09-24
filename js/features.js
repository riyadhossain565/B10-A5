document
  .getElementById("btn-show-donation")
  .addEventListener("click", function () {
    showSectionById("donation-section");
  });

document
  .getElementById("btn-show-history")
  .addEventListener("click", function () {
    showSectionById("history-section");
  });

document
  .getElementById("btn-show-donation")
  .addEventListener("click", function () {
    showColorById("btn-show-donation");
  });

document
  .getElementById("btn-show-history")
  .addEventListener("click", function () {
    showColorById("btn-show-history");
  });

document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "/B10-A5/blog.html";
});
