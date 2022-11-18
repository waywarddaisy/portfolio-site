let allThreeButtons = document.querySelectorAll('button');
let allThreeTitles = document.querySelectorAll('h1');
let allThreeParagraphs = document.querySelectorAll('p');

const twoEvents = (domElement) => {

  domElement.addEventListener('mouseover', () => {domElement.style.color = "#f8b7cd"});
  domElement.addEventListener('mouseout', () => {domElement.style.color = "#0671b7"});
};

allThreeTitles.forEach(twoEvents);
allThreeParagraphs.forEach(twoEvents);

function showAlert() {
  alert ("This project has not yet been completed");
};

const alertEvent=(domElement) => {
  domElement.addEventListener('click', showAlert)
};

allThreeButtons.forEach(alertEvent);