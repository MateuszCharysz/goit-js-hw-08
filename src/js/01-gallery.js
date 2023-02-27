import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
//help
const log = console.log;
// log(galleryItems);
log('ggggggg');
log('ggggggg');
log('ggggggg');
log('ggggggg');
//DOM elements
const gallery = document.querySelector('.gallery');
// log(gallery);

//callback/functions
const createItem = item => {
  let itemMarkup = `
    <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
`;
  return itemMarkup;
};

const drawGallery = galleryItems.map(item => createItem(item)).join('');
gallery.innerHTML = drawGallery;

const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionSelector: event => event.firstElementChild,
  captionsData: 'alt',
  captionDelay: 250,
});

//Events
gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  // log(event.target);
  event.target.lightbox;
});

console.log(galleryItems);
