//  взяти посилання на кнопки 
// взяти посилання на список фотографій 
// створити функцію для роботи слайдера 
//  рефакторинг 

// взяти посилання на кнопки
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const listOfImages = document.querySelector(".slides");
let currentSlide = 0;
const slideWidth = 800; // Ширина одного слайду (важливо для руху)

function moveSlides(position) {
  const totalSlides = listOfImages.children.length;

  if (position >= totalSlides) {
    position = 0;
  } else if (position < 0) {
    position = totalSlides - 1;
  }

  currentSlide = position;

  // Додаємо CSS-клас для увімкнення анімації
  listOfImages.classList.add('sliding');
  listOfImages.style.transform = `translateX(-${position * slideWidth}px)`;

  // Видаляємо клас після завершення переходу (необов'язково, залежить від CSS)
  // listOfImages.addEventListener('transitionend', () => {
  //   listOfImages.classList.remove('sliding');
  // });
}

prevBtn.addEventListener('click', function () {
  moveSlides(currentSlide - 1);
});

nextBtn.addEventListener('click', function () {
  moveSlides(currentSlide + 1);
});










