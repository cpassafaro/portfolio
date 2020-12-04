import './Projects.css'
import Picture from '../images/recipe2.png'


let projects = [
    {
        name : 'My Recipe Book',
        languages : 'Javascript',
        description : 'This project was built to store your favorite recipes. This front end site was built using the framework react in conjunction with some elements from material ui. This site gathers information from my deployed JSON API via heroku. It gather information from the database to populate a user friendly interface to read, update, delete, and create recipes. The user has CRUD functionality to change the informatin on the seeded heroku database.',
        pictures : Picture,
        githubUrl: ''
    },
    {
        name:
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
                <button className ='b'><a href="https://github.com/cpassafaro/front_end_of_json_api_project" className ='b'>See Repo</a></button>
                <button className ='b'><a href='' className ='b'>Deployed Site</a></button>
                </div>
            </div> 
        ))}
    </div>)
}