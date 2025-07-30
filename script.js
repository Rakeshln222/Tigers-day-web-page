// No major JS logic for now, but here's a smooth scroll starter:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const cards = document.querySelectorAll('.card');
const previewImg = document.getElementById('previewImg');
const previewContainer = document.getElementById('tigerImagePreview');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const imageUrl = card.getAttribute('data-image');
    const name = card.getAttribute('data-name');

    previewImg.src = imageUrl;
    previewImg.alt = name;
    previewImg.style.display = 'block';
    previewContainer.querySelector('h3').textContent = name;
  });
});

