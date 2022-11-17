let firstButton = document.getElementById("firstbutton");
let secondButton = document.getElementById("secondbutton");
let thirdButton = document.getElementById("thirdbutton");

let firstTitle = document.getElementById("firsttitle");
let secondTitle = document.getElementById("secondtitle");
let thirdTitle = document.getElementById("thirdtitle");

let firstPara = document.getElementById("firstpara");
let secondPara = document.getElementById("secondpara");
let thirdPara = document.getElementById("thirdpara");

const changeColor = (domElement)=> {

    domElement.style.color = "#f8b7cd"
};

const reset = (domElement)=> {

    domElement.style.color = "#0671b7"
};


const twoEvents = (domElement) => {

    domElement.addEventListener('mouseover', () => {changeColor(domElement);})
    domElement.addEventListener('mouseout', () => {reset(domElement);})
};

twoEvents(firstTitle);
twoEvents(secondTitle);
twoEvents(thirdTitle);

twoEvents(firstPara);
twoEvents(secondPara);
twoEvents(thirdPara);


function showAlert() {
    alert ("This project has not yet been completed");
  }
firstButton.onclick = showAlert;
secondButton.onclick = showAlert;
thirdButton.onclick = showAlert;