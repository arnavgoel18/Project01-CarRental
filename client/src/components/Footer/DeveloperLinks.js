import React from 'react'
import { AiOutlineLinkedin, AiOutlineMail, AiFillGithub} from 'react-icons/ai'
import './Footer.css'

//developer information
const developers = [
    {
        name: 'Arnav Goel',
        linkedin: 'https://www.linkedin.com/in/arnav-goel-ba94a21ab/',
        mail: 'mailto:arnav18.goel@gmail.com',
        github: 'https://github.com/arnavgoel18'
    },
    {
        name: 'Saloni Vij',
        linkedin: 'https://www.linkedin.com/in/saloni-vij-8210211b2/',
        mail: 'mailto:arnav18.goel@gmail.com',
        github: 'https://github.com/arnavgoel18'
    }
];

function DeveloperLinks(){
    return ( 
        <ul className="developers"> 
            {developers.map((developer) => {
                return(
                    <li>{developer.name}
                        <ul class="devLinks">
                            <li><AiOutlineLinkedin/>
                                <a href={developer.linkedin}> LinkedIn</a></li>   
                            <li><AiOutlineMail/>
                                <a href={developer.mail}> Email </a></li>   
                            <li><AiFillGithub/>
                                <a href={developer.github}> GitHub</a></li>  
                        </ul>
                    </li>
                );
            })
        }
        </ul>   /*<!--End Names-->*/
    );
}

export default DeveloperLinks