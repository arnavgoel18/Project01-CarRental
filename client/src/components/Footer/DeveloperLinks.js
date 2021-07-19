import React from 'react'
import { AiOutlineLinkedin, AiOutlineMail, AiFillGithub} from 'react-icons/ai'
import './Footer.css'

//developer information
const developers = [
    {
        id: 1,
        name: 'Arnav Goel',
        linkedin: 'https://www.linkedin.com/in/arnav-goel-ba94a21ab/',
        mail: 'mailto:arnav18.goel@gmail.com',
        github: 'https://github.com/arnavgoel18'
    },
    {
        id: 2,
        name: 'Saloni Vij',
        linkedin: 'https://www.linkedin.com/in/saloni-vij-8210211b2/',
        mail: 'mailto:salonivij14@gmail.com',
        github: 'https://github.com/salonivij14'
    }
];

function DeveloperLinks(){
    return ( 
        <ul className="developers"> 
            {developers.map((developer) => {
                return(
                    <li key={developer.id}>{developer.name}
                        <ul className="devLinks">
                            <li><AiOutlineLinkedin/>
                                <a href={developer.linkedin} target="_blank" rel="noreferrer"> LinkedIn</a></li>   
                            <li><AiOutlineMail/>
                                <a href={developer.mail} target="_blank" rel="noreferrer"> Email </a></li>   
                            <li><AiFillGithub/>
                                <a href={developer.github} target="_blank" rel="noreferrer"> GitHub</a></li>  
                        </ul>
                    </li>
                );
            })
        }
        </ul>   /*<!--End Names-->*/
    );
}

export default DeveloperLinks