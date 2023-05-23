// Popup Start

let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');
let closePopupButtonCPM = document.querySelector('.close-popup-mobile');


openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButtonCPM.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});


document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

// Popup End

// Accordion Start

document.querySelector('.accordion').addEventListener('click', (e) => {
    let elHeader = e.target.closest('.accordion__header');
    if (!elHeader) {
      return;
    }
    elHeader.parentElement.classList.toggle('accordion__item_show');
  })
  

  
  // Accordion End


  