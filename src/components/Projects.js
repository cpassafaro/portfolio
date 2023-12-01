import "./Projects.css";
import RecipeApi from "../images/RecipeApi.png";
import Hangman from "../images/hangman.png";
import Flashcards from "../images/flashcards.png";
import Library from "../images/library.png";
import Book from "../images/book.png";
import BoaterBeta from '../images/BoaterBeta.png';
import RecipesFull from '../images/RecipesFull.png'
import kayakWebscrape from '../images/kayakWebscrape.png'
import pythonapiscreenshot from '../images/pythonapiscreenshot.png'

let projects = [
  {
    name: 'Vue FrontEnd built off Python Webscrape API',
    languages: 'Javascript',
    description: 'The front end application was built out to allow users to see the best deals gathered from the Python webscrape. Users are able to search through information and view product details. THey are also able to redirect to the sales website.',
    frameworks: 'Vue',
    libraries: 'Vue-API-Query, Vuetify',
    pictures: kayakWebscrape,
    githubUrl: 'https://github.com/cpassafaro/kayak_webscrape_frontend',
    deployedSite: 'https://storied-piroshki-4c2db4.netlify.app/'
  },
  {
    name: 'Python Webscrape API',
    languages: 'Python',
    description: 'This is a webscrape application that was built to function as an API. Three of the top websites for kayak retail are scraped for product information. They are eiher sorted by company or all gathered together. This project was built out to communicate with the front end with fast-api, and cors middleware.',
    frameworks: 'fast-api',
    libraries: 'beautifulsoup, uvicorn, gunicorn',
    pictures: pythonapiscreenshot,
    githubUrl: 'https://github.com/cpassafaro/fastapi-heroku-test',
    deployedSite: 'https://heroku-fastapi-kayak-72f2824d7d9a.herokuapp.com/all-kayaks'
  },
  {
    name: 'In Repair due to USGS API Changes: Boater Beta | FullStack App',
    languages: 'Javascript',
    description: 'This project was built using the Javascript framework React with some material ui elements. This app is still partially under construction. This application was built for whitewater kayakers. It gathers water levels from all creeks and rivers in the United States through the USGS API. It then sends latitude and longitude information to the details page so that I can perform a get request from the National Weather API to see upcoming weather patterns. Users are able to create accounts so they can save their favorite rivers, and can leave public notes on the rivers to give updated river reports. These features are possible through my own deployed API and RESTFUL routes.',
    pictures: BoaterBeta,
    githubUrl: "https://github.com/cpassafaro/capstone_frontend",
    deployedSite: "https://hardcore-jackson-68ff7b.netlify.app/"
  },
  // {
  //   name: "My Recipe Book | Fullstack App",
  //   languages: "Javascript",
  //   description:"This project was built to store your favorite recipes. This front end site was built using the framework react in conjunction with some elements from material ui. This site gathers information from my deployed JSON API via heroku. It gather information from the database to populate a user friendly interface to read, update, delete, and create recipes. The user has CRUD functionality to change the informatin on the seeded heroku database.",
  //   pictures: RecipesFull,
  //   githubUrl: "https://github.com/cpassafaro/front_end_of_json_api_project",
  //   deployedSite:
  //     "https://5fb302f7aeb9ba00073d79d4--hungry-colden-771163.netlify.app/",
  // },
  // {
  //   name: "Backend of Recipe Book Project",
  //   description:"This API was created using the frameworks Node.js and express, and the database Mongodb in conjuction with the library mongoose. Testing was done with the application postman. This api provides information for recipes including title, summary, time to cook, servings, images, cuisine genre, ingredients, instructions, and whether or not the dish if vegetarian, vegan, or dairy free.",
  //   pictures: RecipeApi,
  //   githubUrl: "https://github.com/cpassafaro/JSON-API-Project",
  //   deployedSite: "https://bombrecipeapi.herokuapp.com/",
  // },
  {
    name: "Hangman Project",
    description:"This project was built with Javascript, HTML, and CSS. Functionality was added to guide the player through the game. Sounds and modals were added for extra engagement with players. This is deployed via github pages.",
    pictures: Hangman,
    githubUrl: "https://github.com/cpassafaro/Hangman_Game",
    deployedSite: "https://cpassafaro.github.io/Hangman_Game/",
  },
  // not working
  // {
  //   name: "Python Flashcards",
  //   description:"This project was built with Python using a PostgreSQL database. It is played through the command line. After forking and cloning this repo you can run pipenv install to install dependencies. The player then runs main.py file to populate the database, and then runs flashcards.py to start the game. The player can choose difficulty level easy, medium, or hard. The player can also create flashcards as well to add them to the deck.",
  //   pictures: Flashcards,
  //   githubUrl: "https://github.com/cpassafaro/python_cli_flashcards",
  //   deployedSite: "",
  // },
  {
    name: "Storybook Component Library",
    description:"This storybook library was created via storybook in conjucation with the javascript framework React. CSS was done without any libraries such as bootstrap. All components used within larger components were built out in the beginning and are highly adaptable to fit customer needs.",
    pictures: Library,
    githubUrl: "https://github.com/cpassafaro/Component-Library",
    deployedSite:"https://cpassafaro.github.io/Component-Library/storybook-build/?path=/story/button--primary",
  },
  {
    name: "Google Books API Modal Project",
    description:"This project uses the api google books to preload certain topics into the gird elements. When the images are clicked on a modal pops up giving the user the title of the book, author, and a description of the book. All information is populated via the api. Different genres are searched to provide a unique tile. When modal is open users are unable to click on background because of z-index usage.",
    pictures: Book,
    githubUrl: "https://github.com/cpassafaro/UI-Element-Project",
    deployedSite: "https://cpassafaro.github.io/UI-Element-Project/",
  },
];

export default function Projects() {
  function flip() {
    let elementHolder = [];
    for (let i = 0; i < projects.length; i++) {
      if ([i] % 2 == 0) {
        console.log("even", projects[i]);
        let even = 
          <div className="project-whole">
            <div className="title">{projects[i].name}</div>
            <div className="project-container">
              <p className="project-description">{projects[i].description}</p>
              <img src={projects[i].pictures} className="project-image" alt='Project'/>
            </div>
            <div className="container-button">
              <button className="button">
                <a href={projects[i].githubUrl} target="_blank" className="a-href-tag">
                  See Repo
                </a>
              </button>
              <button className="button">
                <a
                  href={projects[i].deployedSite}
                  target="_blank"
                  className="a-href-tag"
                >
                  Deployed Site
                </a>
              </button>
            </div>
          </div>
            elementHolder.push(even)
            console.log(elementHolder)
       
      } else {
        let odd = <div className="project-whole">
            <div className="title">{projects[i].name}</div>
            <div className="project-container active">
              <p className="project-description">{projects[i].description}</p>
              <img src={projects[i].pictures} className="project-image" alt='Project'/>
            </div>
            <div className="container-button">
              <button className="button">
                <a href={projects[i].githubUrl} target="_blank" className="a-href-tag">
                  See Repo
                </a>
              </button>
              <button className="button">
                <a
                  href={projects[i].deployedSite}
                  target="_blank"
                  className="a-href-tag"
                >
                  Deployed Site
                </a>
              </button>
            </div>
          </div>
            elementHolder.push(odd)
            console.log(elementHolder)
      }
    }
    return elementHolder
  }


  return (
    <div>
      {flip()}
    </div>
  );
}
