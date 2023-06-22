
header =document.getElementById("header");
let innerHeaderWrapper = document.createElement("div");
header.appendChild(innerHeaderWrapper);
innerHeaderWrapper.id="inner-wrapper";
let logoDiv= document.createElement("div");
logoDiv.id = "logo-div";
let logoLink = document.createElement("a");
logoLink.href= "/";
logoLink.innerHTML ="jh";
logoLink.id ="logo";
logoDiv.appendChild(logoLink);
innerHeaderWrapper.appendChild(logoDiv);
let nav = document.createElement("div");
nav.id = "nav";
innerHeaderWrapper.appendChild(nav);
let navUl = document.createElement("ul");
nav.appendChild(navUl);



//about nav
let aboutNavLi = document.createElement("li");
aboutNavLi.id = "about";
aboutNavLi.className = "nav-li";
let aboutNavLink = document.createElement("a");
aboutNavLink.href = "about";
aboutNavLink.innerHTML = `<img src ="Resources/blackflowertwo.jpg" width="30px" id="about-flower" class="flower"> ABOUT`;
aboutNavLi.appendChild(aboutNavLink);
navUl.appendChild(aboutNavLi);

//projects nav
let projectsNavLi = document.createElement("li");
projectsNavLi.id = "projects";
projectsNavLi.className = "nav-li";
let projectsNavLink = document.createElement("a");
projectsNavLink.href = "projects";
projectsNavLink.innerHTML = `<img src ="Resources/blackflowertwo.jpg" width="30px" id="projects-flower" class="flower"> PROJECTS`;
projectsNavLi.appendChild(projectsNavLink);
navUl.appendChild(projectsNavLi);

//contact nav
let contactNavLi = document.createElement("li");
contactNavLi.id = "contact";
contactNavLi.className = "nav-li";
let contactNavLink = document.createElement("a");
contactNavLink.href = "contact";
contactNavLink.innerHTML = `<img src ="Resources/blackflowertwo.jpg" width="30px" id="contact-flower" class="flower"> CONTACT`;
contactNavLi.appendChild(contactNavLink);
navUl.appendChild(contactNavLi);

//alt-nav------------------------------

let altNav =document.getElementById("alt-nav");
let altNavUl = document.createElement("ul");
altNavUl.id= "alt-ul";

//about
let altAboutLi = document.createElement("li");
altAboutLi.className ="alt-nav-li";
let altAboutLink =document.createElement("a");
altAboutLink.className= "alt-nav-link";
altAboutLink.href = "about";
altAboutLink.innerHTML= "ABOUT";
altAboutLi.appendChild(altAboutLink);
altNavUl.appendChild(altAboutLi);

//projects

let altPjtLi = document.createElement("li");
altPjtLi.className ="alt-nav-li";
let altPjtLink =document.createElement("a");
altPjtLink.className= "alt-nav-link";
altPjtLink.href = "projects";
altPjtLink.innerHTML= "PROJECTS";
altPjtLi.appendChild(altPjtLink);
altNavUl.appendChild(altPjtLi);

//contact

let altContactLi = document.createElement("li");
altContactLi.className ="alt-nav-li";
let altContactLink =document.createElement("a");
altContactLink.className= "alt-nav-link";
altContactLink.href = "contact";
altContactLink.innerHTML= "CONTACT";
altContactLi.appendChild(altContactLink);
altNavUl.appendChild(altContactLi);

altNav.appendChild(altNavUl);




