// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightBox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryElem = document.querySelector(".gallery");
const newGalleryMarkup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
        </a>
</li>`);

galleryElem.insertAdjacentHTML('afterbegin', newGalleryMarkup.join(''));
// galleryElem.addEventListener('click', onPictureClick);

// function onPictureClick(event) {
//     event.preventDefault();
//     if (event.target.nodeName !== "IMG") {
//         return;
//     }
// }

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionsDelay: 250,
});

console.log(SimpleLightBox);
//console.log(galleryItems);
