const displayProjects = (project) => {
  const {name, description, thumbnail, id}= project;
  let container = document.getElementById("gallery");
  let galleryItem = document.createElement("div");
  galleryItem.className = `gallery-item ${name}`;
  container.appendChild(galleryItem);
  let image = document.createElement("div");
  image.className = `image ${name}`;
  galleryItem.appendChild(image);
  let projImg = document.createElement("img");
  projImg.className = `${name}`;
  projImg.src = `${thumbnail}`;
  projImg.setAttribute("loading", "lazy");
  image.appendChild(projImg);
  let textContainer = document.createElement("div");
  textContainer.className = `text ${name}`;
  let h4 = document.createElement("h4");
  h4.innerHTML = `${name}`;
  textContainer.appendChild(h4);
  let descriptionPara = document.createElement("p");
  descriptionPara.className = `${name}`;
  descriptionPara.innerHTML = `${description}`;
  textContainer.appendChild(descriptionPara);
  galleryItem.appendChild(textContainer);

  let buttonLink = document.createElement("a");
  buttonLink.href = "./project-page";
  buttonLink.className ="more-info-a";
  galleryItem.appendChild(buttonLink);
  let button = document.createElement("button");
  button.innerHTML = "More Info";
  button.id= id;
  buttonLink.appendChild(button);

  const clickHandler =()=> {
    let productID = getProject();
    productID= event.target.id;
    productID = Number(productID);
    saveProject(productID);
    console.log(productID);
  };

  button.addEventListener("click", clickHandler);

};

projectsArray.forEach(project => displayProjects(project));



//changes colors on hover
let allThreeTitles = document.querySelectorAll('h4');
let allThreeParagraphs = document.querySelectorAll('p');

const twoEvents = (domElement) => {

  domElement.addEventListener('mouseover', () => {domElement.style.color = "#f8b7cd"});
  domElement.addEventListener('mouseout', () => {domElement.style.color = "#0671b7"});
};

allThreeTitles.forEach(twoEvents);
allThreeParagraphs.forEach(twoEvents);
