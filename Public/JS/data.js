const projectsArray = [{
    name: "Wayward Daisy",
    id: 0,
    photoUrl:"https://res.cloudinary.com/dw0mjyoeg/image/upload/v1677355557/Wayward%20Daisy%20Photos/Garden%20WWD/fortythree_p98z01.jpg",
    thumbnail: "https://res.cloudinary.com/dw0mjyoeg/image/upload/v1677355688/Wayward%20Daisy%20Photos/Garden%20WWD/two_vgpdy9.jpg",
    description: "A local flower farming business in San Diego County.",
    linkUrl: "http://waywarddaisy.com",
    gitHubLink: "https://github.com/waywarddaisy/wayward-daisy",
    blurb: ["I created this site for my own business, Wayward Daisy Flowers. I previously had a squarespace site which I built out, but was very limiting and so I decided to build it on my own as part of my developer training because it was a business I am familiar with. It was created with HTML, CSS and Javascript.",
"The header which includes the navigation and logo, was created dynamically so that I did not have to re-create it on each html page. This way it can be dynamically changed if need be.",
"I created most of the pages as dynamic javascript pages (specifically the products-page and shop pages so that as the products change, not every item on the page needs to be changed, just the products file itself",
"I used local storage to store the items as they are added to the cart. I added features so that if the item is already in the cart, the customer is notified. Also the customer is not able to add more items to the cart than are available in inventory",
"Within the shopping cart itself, I have created functions for the customer to increment and decrement quantities as well as remove items from the cart. The shopping cart displays the sales tax rate and the shipping rate and allows the customer to purchase through the Stripe API", 
"I have a small server set up so that the pages in the browser do not display as .html, but this is not my specialty as I am a front-end developer.",
"With the CSS I set out with everything being as responsive as possible to there is less of a need for media queries. I created a universal css file that applies to all files and then created individual ones for pages if needed to eliminate redundant code.",
"I used cloudinary to host the images to speed up the site loading time as well as lazy loading.", 
"As a side note, I took and edited all photographs for this site (using photoshop and lightroom) and wrote all of the copy."
]
},
{name: "What's For Dinner",
    id: 1,
    photoUrl:"Resources/stefan-vladimirov-Q_Moi2xjieU-unsplash.jpg",
    thumbnail: "Resources/stefan-vladimirov-Q_Moi2xjieU-unsplash.jpg",
    description: "A meal-planning site which helps to solve the much asked and less often solved question of 'What's for dinner?' without the torture and family drama!",
    linkUrl: "#",
    gitHubLink: "https://github.com/waywarddaisy/Whats-for-Dinner",
    blurb: ["This site was created in React and uses React-router.",
    "The purpose of the site is to have options for dinner immediately available to the customer to choose from and to generate a shopping list from their choices as well as to enable them to buy cookbooks for the recipes. ",
"Everything in the site is dynamic and uses State and Props to populate each page. The Find Meals page in particular is a great example of using React for the purpose it was intended. It re-renders each time the customer makes any selection. The site gives many options to edit previous selections, remove items from array and updates State while doing so. ",
"This project was designed, architected and then created by me using React. It is not part of a tutorial or a class project. Its me creatively coming up with a solution to a problem that needs to be solved and using my coding skills to build it from scratch.",
"I will continue to iterate on this project and am doing so as you are reading this, by creating user account and adding in the capability for customers to add their own recipes.",
]
},
{name: "Cielo Hills Flower Farm",
    id: 2,
    photoUrl:"Resources/IMG_6520.JPG",
    thumbnail: "Resources/IMG_6520.JPG",
    description: "Ciello Hills is a suburban flower farm located in Escondido California in the county of San Diego.",
    linkUrl: "#",
    gitHubLink: "#",
    blurb: ["This project has not been completed."
]
}
];

//saves product id to local storage in products.js so the correct product page is loaded
 const saveProject = (projectID) => {
     localStorage.setItem("projectID", JSON.stringify(projectID))
 };

 const getProject = () => {
     if (localStorage.getItem("projectID") === null) {
         return []
     }
     else {
         return JSON.parse(localStorage.getItem("projectID"));
    }
 };