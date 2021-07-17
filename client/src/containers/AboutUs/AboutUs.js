import React from 'react'
import './AboutUs.css'

function AboutUs() {
    return (
        <div className = "container">
            <div className="heading"> {/*<!--Heading area-->*/}
                <h2>About Us</h2>
            </div>
            <div className="aboutus">
                <div className="content"> {/*<!--Add the content here-->*/}
                    <p> <span className="content-heading"> A-La-Car </span> <br/><br/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias impedit enim neque natus debitis aspernatur a architecto sequi beatae cum exercitationem unde, pariatur numquam? At doloremque ea, hic reiciendis voluptatum illo cupiditate, magni, corporis dolore maiores exercitationem soluta nihil repellendus quae illum quam eaque minus est blanditiis ipsa. <br/>
                    Expedita dolorum maiores enim, dolorem nisi minus esse temporibus sed ipsam modi facilis nam possimus, repellat pariatur totam fugiat corporis? Minima error optio, illo aspernatur, ea maiores consequatur omnis molestiae vel fuga ut? Rem hic ab, laudantium eius ea adipisci soluta dolorem deserunt consectetur. Rem magni voluptatum reprehenderit? Quidem, officiis minus.    
                    </p>
                </div>
                <div className="logo"></div> {/*<!--Logo overlapping with the content area-->*/}
            </div>
        </div>
    )
}

export default AboutUs
