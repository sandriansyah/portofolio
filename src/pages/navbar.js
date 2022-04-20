import {Navbar} from "react-bootstrap"
import Button from '@mui/material/Button'
import IconGithub from "../media/github-logo.png"
import IconFb from "../media/facebook.png"
import IconIg from "../media/instagram.png"
import IconLinkedin from "../media/linkedin.png"
import IconWa from "../media/whatsapp.png"
import IconEmail from "../media/email.png"

function Nav() {
    return(
        <div>
            <Navbar className="d-flex justify-content-around py-4">   
                <div className="">
                    <a href="https://github.com/sandriansyah" target="blank"><img className="mx-3" src={IconGithub}  style={{width:"30px",height:"30px"}} /> </a> 
                    <a href="https://www.instagram.com/jasavectorart_bandung/" target="blank">
                        <img className="mx-3" src={IconIg}  style={{width:"30px",height:"30px"}} />                                
                    </a>
                    <a href="https://www.linkedin.com/in/sandriansyah-960b90222/" target="blank">
                        <img className="mx-3" src={IconLinkedin}  style={{width:"30px",height:"30px"}} />                
                    </a> 
                    <a href="https://api.whatsapp.com/send?phone=082218394410" target="blank">
                        <img className="mx-3" src={IconWa}  style={{width:"30px",height:"30px"}} />             
                    </a>
                    <a href="mailto:sandriansyah38@gmail.com">
                        <img className="mx-3" src={IconEmail}  style={{width:"30px",height:"30px"}} />
                    </a>                      
                </div>
                <div className="">
                    <a href="https://drive.google.com/uc?export=download&id=1CTvdPoZUPJXCGxsId5Qk72Ng1nMktKJk"
                    style={{
                        textDecoration:"none",color:"white",border:"2px solid white", padding:"2px 10px",borderRadius:"10px",fontWeight:"bold"
                    }}>
                        DOWNLOAD CV
                    </a>
                </div>            
            </Navbar>
        </div>
    )
}

export default Nav