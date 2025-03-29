document.addEventListener("DOMContentLoaded", function () {
  // Obtener el modal
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Obtener todas las imágenes con la clase clickable-image
  const images = document.querySelectorAll(".clickable-image");

  // Asignar evento click a cada imagen
  images.forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });

  // Cerrar modal al hacer click en la X
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Cerrar modal al hacer click fuera de la imagen
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Cerrar con tecla ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });
});
