// Add imports above this line
import{ galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import "../css/01-gallery.css"
// Change code below this line

const paretteContainer = document.querySelector('.gallery');

const createMarkup = createGalleryItems(galleryItems);

paretteContainer.insertAdjacentHTML('beforeend', createMarkup);



function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    }).join('');
}

const lightbox = new SimpleLightbox(".gallery a", {
  selector: "img",
  data: "alt",
  position: "bottom",
  delay: 250,
});