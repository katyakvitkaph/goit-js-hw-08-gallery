'use script';

import galleryL from "./gallery-items.js";

const createListItem = ({preview , original , description}) => {
  const listItem = document.createElement('li');

listItem.classList.add('gallery__item');
galleryUl.appendChild(listItem);

const pic = document.createElement('a');
pic.classList.add("gallery__link");

pic.setAttribute("href", preview);
listItem.appendChild(pic);

const imgPrew = document.createElement('img');
imgPrew.classList.add("gallery__image");


imgPrew.setAttribute("src", original);
imgPrew.setAttribute("alt", description);
imgPrew.dataset.source = original;

const icon = document.createElement('span');
icon.classList.add("gallery__icon");
pic.appendChild(imgPrew, icon);

const iIcon = document.createElement('i');
iIcon.classList.add("material-icons");
iIcon.textContent = 'zoom_out_map';
icon.appendChild(iIcon);

return listItem;
}

const renderListItems = (listRef, gallery) => {
  const listItems = galleryL.map(item => createListItem(item));
  listRef.append(...listItems  );
}

// const but = document.createElement('button');
// but.classList.add('lightbox__button');
// but.dataset.action = 'close-lightbox';
// but.setAttribute('type', 'button');
// but.appendChild()




const galleryUl = document.querySelector('.gallery');



renderListItems(galleryUl, galleryL);

// MODAL WINDOW =========


const openModal = document.querySelector('.gallery');
const closeModal = document.querySelector('.lightbox__overlay');


openModal.addEventListener('click', openM);
closeModal.addEventListener('click', closeM);

function openM() {
  document.body.classList.add('show-model');
}


function closeM() {
  document.body.classList.remove('show-model');
}








// ================================copy 
// const listItem = document.createElement('li');

// listItem.classList.add('gallery__item');
// galleryUl.appendChild(listItem);

// const pic = document.createElement('a');
// pic.classList.add("gallery__link");

// pic.setAttribute("href", "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg");
// listItem.appendChild(pic);

// const imgPrew = document.createElement('img');
// imgPrew.classList.add("gallery__image");
// pic.appendChild(imgPrew);

// imgPrew.setAttribute("src", "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg");
// imgPrew.setAttribute("alt", "Hokkaido Flower");
// imgPrew.dataset.source = ('https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg')

// const icon = document.createElement('span');
// icon.classList.add("gallery__icon");
// pic.appendChild(icon);

// const iIcon = document.createElement('i');
// iIcon.classList.add("material-icons");
// iIcon.textContent = 'zoom_out_map';
// icon.appendChild(iIcon);

// ===============end of copy

// function createHtnml(galleryShow) {
//   const { preview, original, description } = galleryShow; // деструктуризация объекта
//   const prew = preview
//     .map((pic, i) => {
//       const mainHtml =`<li class="gallery__item">
//       <a
//         class="gallery__link"
//         href="${pic.preview}"
//       >
//         <img
//           class="gallery__image"
//           src="${pic.preview}"
//           data-source="${original}"
//           alt="Tulips"
//         />
    
//         <span class="gallery__icon">
//           <i class="material-icons">zoom_out_map</i>
//         </span>
//       </a>
//     </li>
// `; 
//       return mainHtml;
//     })
//     .join(""); // это обьедение всех элементов массива в строку
//   const mainTitle = `<h1>${description}</h1>`; // создание разметки тайтла

//   return mainTitle + prew; // возвращаем результат ф-и , конкатенация элементов
// }
// createHtnml(gallery);

