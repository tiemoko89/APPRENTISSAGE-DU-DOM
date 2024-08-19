document.addEventListener('DOMContentLoaded', () => {

  let box = document.getElementById('color-box');
  let btn = document.getElementById('change-color-btn');

  function getRandomColor(number) {

    return Math.floor(Math.random() * (number + 1));
    
  }

  btn.addEventListener("click", () => {

    const rndCol = `rgb(${getRandomColor(255)} ${getRandomColor(255)} ${getRandomColor(255)})`;
    
    box.style.backgroundColor = rndCol;
  });

});


