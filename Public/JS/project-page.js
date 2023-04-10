



const showProject = (prod) => {
    let main = document.getElementById("main");
    let projectDiv = document.createElement("div");
    projectDiv.className = "project-div";
    main.appendChild(projectDiv);
    let title = document.createElement("h1");
    title.id = "title";
    title.innerHTML = prod.name;
    projectDiv.appendChild(title);
    let photoDiv = document.createElement("div");
    photoDiv.className = "photo-div";
    projectDiv.appendChild(photoDiv);
    let productPhotoLink = document.createElement("a");
    productPhotoLink.className = "photo-link";
    productPhotoLink.href = prod.linkUrl;
    let photoContainer=document.createElement("div");
    photoContainer.id="photo-container";
    photoDiv.appendChild(photoContainer);

    let productPhoto = document.createElement("img");
    productPhoto.src = prod.photoUrl;
    productPhoto.className = "photo";
    photoDiv.appendChild(productPhotoLink);
    productPhotoLink.appendChild(photoContainer);
    photoContainer.appendChild(productPhoto);

    let visitSiteLink = document.createElement("a");
    visitSiteLink.href = prod.linkUrl;
    visitSiteLink.className = "link-button";

    let visitSiteButton = document.createElement("button");
    visitSiteButton.innerHTML = "VISIT SITE";
    visitSiteButton.className = "site-button";
    

    visitSiteLink.appendChild(visitSiteButton);
    photoDiv.appendChild(visitSiteLink);
    let blurb = document.createElement("div");
    blurb.id = "blurb";
    const iteratePara = (para) => {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = para;
        blurb.appendChild(paragraph)
    };
    prod.blurb.forEach((para) => iteratePara(para));
    photoDiv.appendChild(blurb);

    let visitGitRepoLink = document.createElement("a");
    visitGitRepoLink.href = prod.gitHubLink;
    visitGitRepoLink.className = "link-button";
    let visitGitRepoButton = document.createElement("button");
    visitGitRepoButton.innerHTML = "VISIT GIT REPOSITORY";
    visitGitRepoButton.className = "git-button";
   
    visitGitRepoLink.appendChild(visitGitRepoButton);
    photoDiv.appendChild(visitGitRepoLink);

};



const pickProject = () => {
    if (getProject() === 0) {
        console.log("product0");
        showProject(projectsArray[0])
    }
    else if (getProject() === 1) {
        console.log("product1");
        showProject(projectsArray[1])
    }
    else if (getProject() === 2) {
        console.log("product2");
        showProject(projectsArray[2])
    }
};

pickProject();