import './Projects.css'
import Picture from '../images/recipe2.png'
import RecipeApi from '../images/RecipeApi.png'


let projects = [
    {
        name : 'My Recipe Book',
        languages : 'Javascript',
        description : 'This project was built to store your favorite recipes. This front end site was built using the framework react in conjunction with some elements from material ui. This site gathers information from my deployed JSON API via heroku. It gather information from the database to populate a user friendly interface to read, update, delete, and create recipes. The user has CRUD functionality to change the informatin on the seeded heroku database.',
        pictures : Picture,
        githubUrl: 'https://github.com/cpassafaro/front_end_of_json_api_project',
        deployedSite: 'https://5fb302f7aeb9ba00073d79d4--hungry-colden-771163.netlify.app/'
    },
    {
        name: 'Backend of Recipe Book Project',
        description: 'This API was created using the frameworks Node.js and express, and the database Mongodb in conjuction with the library mongoose. Testing was done with the application postman. This api provides information for recipes including title, summary, time to cook, servings, images, cuisine genre, ingredients, instructions, and whether or not the dish if vegetarian, vegan, or dairy free.',
        pictures: RecipeApi,
        githubUrl: '',
        deployedSite:'https://bombrecipeapi.herokuapp.com/',
    },
    {
        name:'Group Futurama Project',
        description:'This project is an application that displays the character information from the show futurama using the javascript language with the framework React. Some elements were created with material ui and were uploaded to storybook. The site has full CRUD functionality to update the deployed heroku database from the backend portion of the project.',
        pictures:
    }
]


export default function Projects(){
    return(<div>
        {projects.map((project) => (
            <div className='project-whole'>
                <div className='title'>{project.name}</div>
                <div className='project-container'>
                    <p className='description'>{project.description}</p>
                    <img src={project.pictures} className='project-image'/>
                </div>
                <div className='button'>
                <button className ='b'><a href={project.githubUrl} target="_blank" className ='bb'>See Repo</a></button>
                <button className ='b'><a href={project.deployedSite} target="_blank" className ='bb'>Deployed Site</a></button>
                </div>
            </div> 
        ))}
    </div>)
}