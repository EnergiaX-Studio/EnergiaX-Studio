const images = document.querySelectorAll('img[data-full-img]');
const modal = document.querySelector('.modal__imgContainer');
const modalImg = modal.querySelector('img');

images.forEach(image => {
  image.addEventListener('click', () => {
    modalImg.src = image.dataset.fullImg;
    modal.style.display = 'flex';
  });
});

modal.addEventListener('click', event => {
 
    modal.style.display = 'none';
  
});