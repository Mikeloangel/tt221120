import './index.scss';

const callToActionBtn = document.querySelector('.main__aside-button');

function handleCallToAction(){
  alert('Call me to action!')
}

// easy FUOC fix (see index.html style tag)
function handleFuoc(){
  let body = document.querySelector('body');
  body.style.visibility = 'visible';
}

callToActionBtn.addEventListener('click', handleCallToAction);
window.addEventListener('load', handleFuoc)