import "./Projects.css";
import Picture from "../images/recipe2.png";
import RecipeApi from "../images/RecipeApi.png";
import Futurama from "../images/futurama.png";
import Hangman from "../images/hangman.png";
import Flashcards from "../images/flashcards.png";
import Library from "../images/library.png";
import Book from "../images/book.png";
import War from "../images/war.png";
import Tab from "../images/tab.png";
import Zee from "../images/zeecraft.png";

let projects = [
  {
    name: "My Recipe Book",
    languages: "Javascript",
    description:"This project was built to store your favorite recipes. This front end site was built using the framework react in conjunction with some elements from material ui. This site gathers information from my deployed JSON API via heroku. It gather information from the database to populate a user friendly interface to read, update, delete, and create recipes. The user has CRUD functionality to change the informatin on the seeded heroku database.",
    pictures: Picture,
    githubUrl: "https://github.com/cpassafaro/front_end_of_json_api_project",
    deployedSite:
      "https://5fb302f7aeb9ba00073d79d4--hungry-colden-771163.netlify.app/",
  },
  {
    name: "Backend of Recipe Book Project",
    description:"This API was created using the frameworks Node.js and express, and the database Mongodb in conjuction with the library mongoose. Testing was done with the application postman. This api provides information for recipes including title, summary, time to cook, servings, images, cuisine genre, ingredients, instructions, and whether or not the dish if vegetarian, vegan, or dairy free.",
    pictures: RecipeApi,
    githubUrl: "https://github.com/cpassafaro/JSON-API-Project",
    deployedSite: "https://bombrecipeapi.herokuapp.com/",
  },
  {
    name: "Group Futurama Project",
    description:"This project is an application that displays the character information from the show futurama using the javascript language with the framework React. Some elements were created with material ui and were uploaded to storybook. The site has full CRUD functionality to update the deployed heroku database from the backend portion of the project.",
    pictures: Futurama,
    githubUrl: "https://github.com/cpassafaro/front_end_futurama",
    deployedSite: "https://futuramacharacters.netlify.app/",
  },
  {
    name: "Hangman Project",
    description:"This project was built with Javascript, HTML, and CSS. Functionality was added to guide the player through the game. Sounds and modals were added for extra engagement with players. This is deployed via github pages.",
    pictures: Hangman,
    githubUrl: "https://github.com/cpassafaro/Hangman_Game",
    deployedSite: "https://cpassafaro.github.io/Hangman_Game/",
  },
  {
    name: "Python Flashcards",
    description:"This project was built with Python using a PostgreSQL database. It is played through the command line. After forking and cloning this repo you can run pipenv install to install dependencies. The player then runs main.py file to populate the database, and then runs flashcards.py to start the game. The player can choose difficulty level easy, medium, or hard. The player can also create flashcards as well to add them to the deck.",
    pictures: Flashcards,
    githubUrl: "https://github.com/cpassafaro/python_cli_flashcards",
    deployedSite: "",
  },
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
  {
    name: "Game of War",
    description:"This project was built using Javascipt and played through the console. Players split a deck of cards and then compare one card each round to see who the winner is. To play start by typing in war.playCard() to draw a deck from each card, then type in war.compareCard() to compare. The winner gets both of the cards. In the event of a tie, the console runs through war conditions and declares winner.",
    pictures: War,
    githubUrl:"https://github.com/cpassafaro/game-of-war/blob/master/README.md",
    deployedSite: "https://cpassafaro.github.io/game-of-war/",
  },
  {
    name: "React Tab Project",
    description:
      "This front end application is built using the framework React. All css styling is done without the assistance of material ui or bootstap. The application pulls from the google books api to populate the tabs of information. Overall, this project displays a tab component. Each tab is populated by an individual book and the user is able to click on each tab to display that individual books information. The title, author, published date, description, and picture are all pulled from the api.",
    pictures: Tab,
    githubUrl: "https://github.com/cpassafaro/UI-API-React",
    deployedSite: "https://book-modal.netlify.app/",
  },
  {
    name: "Adobe Mockup Project",
    description:
      "This project is a mockup that imitates the adobe xd design called cake.xd. It is responsive to resizing for various technologies.",
    pictures: Zee,
    githubUrl: "https://github.com/cpassafaro/build_a_website_project1",
    deployedSite: "https://cpassafaro.github.io/build_a_website_project1/",
  },
];

export default function Projects() {
  function flip() {
    let elementHolder = [];
    for (let i = 0; i < projects.length; i++) {
      // console.log([i])
      if ([i] % 2 == 0) {
        console.log("even", projects[i]);
        let even = 
          <div className="project-whole">
            <div className="title">{projects[i].name}</div>
            <div className="project-container">
              <p className="description">{projects[i].description}</p>
              <img src={projects[i].pictures} className="project-image" />
            </div>
            <div className="button">
              <button className="b">
                <a href={projects[i].githubUrl} target="_blank" className="bb">
                  See Repo
                </a>
              </button>
              <button className="b">
                <a
                  href={projects[i].deployedSite}
                  target="_blank"
                  className="bb"
                >
                  Deployed Site
                </a>
              </button>
            </div>
          </div>
            elementHolder.push(even)
            console.log(elementHolder)
       
      } else {
        console.log("odd", projects[i]);
        let odd = <div className="project-whole">
            <div className="title">{projects[i].name}</div>
            <div className="active">
              <p className="description">{projects[i].description}</p>
              <img
                src={projects[i].pictures}
                className="project-image"
              />
            </div>
            <div className="button">
              <button className="b">
                <a href={projects[i].githubUrl} target="_blank" className="bb">
                  See Repo
                </a>
              </button>
              <button className="b">
                <a
                  href={projects[i].deployedSite}
                  target="_blank"
                  className="bb"
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
