let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');

function openLightbox(src) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = src;
  currentIndex = Array.from(images).findIndex(img => img.src === src);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll('.gallery .image');
  allImages.forEach(div => {
    if (category === 'all' || div.classList.contains(category)) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
}
