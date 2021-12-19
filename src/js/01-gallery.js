import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),

};

const galleryItemsString = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item"><a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
      </a></li>`
  )
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", galleryItemsString);


new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });