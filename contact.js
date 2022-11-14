let button = document.getElementById('submit');

const changeColor = ()=> {

    button.style.color = "white"
};

const changeBack = ()=> {

    button.style.color = "#0671b7"
};

button.onmouseover = changeColor;

button.onmouseout = changeBack;

const finish = ()=> {
    document.getElementById('letter').style.display = "none";
    document.getElementById('sending').style.display = "block";

};

button.onclick = finish;

let sendButton = document.getElementById('send');

const reset = ()=> {
    document.getElementById('letter').style.display = "block";
    document.getElementById('sending').style.display = "none";
};

sendButton.onclick = reset;

const changeColorSend = ()=> {

    sendButton.style.color = "white"
};

const changeBackSend = ()=> {

    sendButton.style.color = "#0671b7"
};

sendButton.onmouseover = changeColorSend;

sendButton.onmouseout = changeBackSend;
