
let aboutPara = document.getElementById('bio-div');

const changeColor = ()=> {
    console.log("mouseoverfired");
    console.log(aboutPara);

    aboutPara.style.color = "#f8b7cd"
};

const reset = ()=> {

    aboutPara.style.color = "#0671b7"
};

aboutPara.addEventListener("mouseover", changeColor);

aboutPara.onmouseout = reset;

console.log(aboutPara);


let hello = document.getElementById('hello');


const changeColorHello = ()=> {

    hello.style.color = "#f8b7cd"
};

const resetHello = ()=> {

    hello.style.color = "#0671b7"
};

hello.onmouseover = changeColorHello;

hello.onmouseout = resetHello;