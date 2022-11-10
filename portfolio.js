
///for contact page
let button = document.getElementById('submit');

const finish = ()=> {
    document.getElementById('letter').style.display = "none";
    document.getElementById('sending').style.display = "block";

};

button.onclick = finish;


///rotating flowers on home page (index)

let about = document.getElementById("about");
let home = document.getElementById('home');
let projects = document.getElementById('projects');
let contact = document.getElementById('contact');



/*about.innerHTML = "BLOB";*/

/*const disappear = ()=> {
    about.style.display ="none"
};

const reappear = ()=> {
    about.style.display ="block"
};*/

let aboutFlower= document.getElementById("aboutflower");

const flowerSpin = () => {
    aboutFlower.style.transform = "rotate (1.3 turn)";
    aboutFlower.style.transition = "1.75s";
};



about.onmouseover = flowerSpin;

/*about.onmouseleave = reappear;*/


/*let aboutFlower = document.getElementById('aboutflower');*/
/*aboutFlower.style.display = "none";*/

/*let homeFlower = document.getElementById('homeflower');
let projectsFlower = document.getElementById('projectsflower');
let contactFlower = document.getElementById('contactflower');

const flowerSpin = (id) => {
    id.style.transform = "rotate (1.3 turn)";
    id.style.transition = "1.75s";
};

aboutFlower.onmouseover = flowerSpin(about);
homeFlower.onmouseover = flowerSpin(home);
projectsFlower.onmouseover = flowerSpin(projects);
contactFlower.onmouseover = flowerSpin(contact);*/



  
