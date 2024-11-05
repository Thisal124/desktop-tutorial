document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("imageOverlay");

  function showOverlayImage(imgSrc) {
    overlay.style.display = "flex";
    overlay.querySelector(".overlay-image").src = imgSrc;
  }

  document.querySelectorAll(".magnification").forEach((button) => {
    button.addEventListener("click", function (event) {
      const imgSrc = this.closest(".showcase-banner").querySelector(
        ".product-img.default"
      ).src;
      showOverlayImage(imgSrc);
      event.stopPropagation();
    });
  });

  document
    .querySelector(".image-overlay .close-btn")
    .addEventListener("click", function () {
      overlay.style.display = "none";
    });

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      overlay.style.display = "none";
    }
  });
});
