
let aboutPara = document.getElementById('bio');

const changeColor = ()=> {

    aboutPara.style.color = "#f8b7cd"
};

const reset = ()=> {

    aboutPara.style.color = "#0671b7"
};

aboutPara.onmouseover = changeColor;

aboutPara.onmouseout = reset;


let hello = document.getElementById('hello');


const changeColorHello = ()=> {

    hello.style.color = "#f8b7cd"
};

const resetHello = ()=> {

    hello.style.color = "#0671b7"
};

hello.onmouseover = changeColorHello;

hello.onmouseout = resetHello;