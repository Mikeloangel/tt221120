import './index.scss';

const callToActionBtn = document.querySelector('.main__aside-button');

function handleCallToAction(){
  alert('Call me to action!')
}

callToActionBtn.addEventListener('click', handleCallToAction);