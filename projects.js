let firstButton = document.getElementById("firstbutton");
let secondButton = document.getElementById("secondbutton");
let thirdButton = document.getElementById("thirdbutton");

let firstTitle = document.getElementById("firsttitle");
let secondTitle = document.getElementById("secondtitle");
let thirdTitle = document.getElementById("thirdtitle");

let firstPara = document.getElementById("firstpara");
let secondPara = document.getElementById("secondpara");
let thirdPara = document.getElementById("thirdpara");

const changeColor = ()=> {

    firstTitle.style.color = "#f8b7cd"
};

const reset = ()=> {

    firstTitle.style.color = "#0671b7"
};

firstTitle.onmouseover = changeColor;
firstTitle.onmouseout = reset;

const changeColorSecondTitle = ()=> {

    secondTitle.style.color = "#f8b7cd"
};

const resetSecondTitle = ()=> {

    secondTitle.style.color = "#0671b7"
};

secondTitle.onmouseover = changeColorSecondTitle;
secondTitle.onmouseout = resetSecondTitle;

const changeColorThirdTitle = ()=> {

    thirdTitle.style.color = "#f8b7cd"
};

const resetThirdTitle = ()=> {

    thirdTitle.style.color = "#0671b7"
};

thirdTitle.onmouseover = changeColorThirdTitle;
thirdTitle.onmouseout = resetThirdTitle;

///

const changeColorFirstPara = ()=> {

    firstPara.style.color = "#f8b7cd"
};

const resetFirstPara = ()=> {

    firstPara.style.color = "#0671b7"
};

firstPara.onmouseover = changeColorFirstPara;
firstPara.onmouseout = resetFirstPara;

const changeColorSecondPara = ()=> {

    secondPara.style.color = "#f8b7cd"
};

const resetSecondPara = ()=> {

    secondPara.style.color = "#0671b7"
};

secondPara.onmouseover = changeColorSecondPara;
secondPara.onmouseout = resetSecondPara;

const changeColorThirdPara = ()=> {

    thirdPara.style.color = "#f8b7cd"
};

const resetThirdPara = ()=> {

    thirdPara.style.color = "#0671b7"
};

thirdPara.onmouseover = changeColorThirdPara;
thirdPara.onmouseout = resetThirdPara;


function showAlert() {
    alert ("This project has not yet been completed");
  }
firstButton.onclick = showAlert;
secondButton.onclick = showAlert;
thirdButton.onclick = showAlert;