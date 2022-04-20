import Nav from "./navbar"
import Foto from "../media/foto2.svg"
import HtmlLogo from "../media/html-5.png"  
import CssLogo from "../media/css-3.png"  
import ReactLogo from "../media/react.png"  
import BootstrapLogo from "../media/bootstrap.png"  
import NodeLogo from "../media/nodejs.png"
import IconGithub from "../media/github-logo.png"
import AppScreenshot from "../media/screenshot sportaiment.png"
import AppScreenshot2 from "../media/screenshot wow.png"
import AppScreenshot3 from "../media/Screenshot 3.png"

import Button from '@mui/material/Button'


const PageHome = ()=>{
    return(
        <div>
            <div className="pb-5" style={{background:"#1597BB"}}>
                <Nav/>
                <div className="d-flex justify-content-between p-5 align-self-center">
                    <div>
                        <h1 className="text-light pe-5" style={{fontSize:"90px"}}>
                            Hello I'm Sandriansyah, <br/>
                            A Web Developer
                        </h1>
                    </div>
                    <div>
                        <img className="mt-3" src={Foto} style={{width:"600px"}} />
                    </div>
                </div>
                <div className="px-5">
                    <div>
                        <p className="text-light mt-5 mx-5 col" style={{fontSize:"30px",textAlign:"justify"}}>
                        I have created some simple web applications, as I have listed below.

                        I made several of these projects, aiming to hone my skills in building an application.

                        I got an understanding in making a web application when I studied at PT. DUMBWAYS INDONESIA TEKNOLOGI and looked for information from the internet.
                        </p>
                    </div>
                </div>
            </div>

            <h1 style={{fontSize:"60px",color:"#1597BB",textAlign:"center",fontWeight:"bold"}}>My Project</h1>
            
            {/* <div className="row justify-content-end px-5 mt-5 pt-5" style={{borderTop:"solid 3px #1597BB"}}>
                <div className="col-6">
                    <img style={{width:"600px"}} src={AppScreenshot}/>     
                </div>
                <div className=" rounded-3 col-4" style={{background:"#1597BB"}}>
                    <h3 className="text-light fw-bold text-center">SPORTAIMENT</h3>
                </div>
            </div> */}

            <div className="row justify-content-start px-5 mt-5 pb-5 pt-5" style={{borderTop:"solid 3px #1597BB"}}>
                <div className="d-flex py-3 flex-column justify-content-between rounded-3 col-4" style={{background:"#1597BB"}}>
                    <div>
                        <h3 className="text-light fw-bold text-center">WOW-APP</h3>
                        <p className="text-light">Wow-App is a website application when users have registered they can subscribe to be able to read every book available.</p>
                        <a target="blank" href="https://github.com/sandriansyah/wowApp" 
                        style={{cursor:"pointer",textDecoration:"none",color:"black"}}><img style={{width:"30px"}} src={IconGithub} alt="logo-github"/> https://github.com/sandriansyah/wowApp</a>
                        <p className="mb-1 mt-2 text-light">login with admin account :</p>
                        <p style={{color:"#cecece"}}>email : erma@gmail.com password:123456</p>
                    </div>
                    <div>
                    <Button style={{backgroundColor:"white",color:"black",fontWeight:"bold",width:"100%"}} variant="contained"><a target="blank" href="https://windowofworld-app.netlify.app"
                    style={{textDecoration:"none"}}>Visit Page</a> </Button>
                    </div>
                </div>               
                <div className="col-6">
                    <img style={{width:"600px"}} src={AppScreenshot2}/>     
                </div>
            </div>

            <div className="row justify-content-start px-5 mt-5 pb-5" style={{borderBottom:"solid 3px #1597BB"}}>
                <div className="d-flex py-3 flex-column justify-content-between rounded-3 col-4" style={{background:"#1597BB"}}>
                    <div>
                        <h3 className="text-light fw-bold text-center">WAYSLINK-APP</h3>
                        <p className="text-light">wayslink is a web application where users can group their URL links.
                            can make it easier for users to promote businesses, works, etc.</p>
                        <a target="blank" href="https://github.com/sandriansyah/waysLink" 
                        style={{cursor:"pointer",textDecoration:"none",color:"black"}}><img style={{width:"30px"}} src={IconGithub} alt="logo-github"/> https://github.com/sandriansyah/waysLink</a>
                        {/* <p className="mb-1 mt-2 text-light">login with admin account :</p>
                        <p style={{color:"#cecece"}}>email : erma@gmail.com password:123456</p> */}
                    </div>
                    <div>
                    <Button style={{backgroundColor:"white",color:"black",fontWeight:"bold",width:"100%"}} variant="contained"><a target="blank" href="https://wayslink-app.netlify.app"
                    style={{textDecoration:"none"}}>Visit Page</a> </Button>
                    </div>
                </div>               
                <div className="col-6">
                    <img style={{width:"600px"}} src={AppScreenshot3}/>     
                </div>
            </div>
            
            <div className="py-5 d-flex justify-content-center mt-5" style={{background:"#1597BB"}}>
                <div className="mx-5">
                    <img style={{width:"80px"}} src={HtmlLogo} />
                </div>
                <div className="mx-5">
                    <img style={{width:"80px"}} src={CssLogo} />
                </div>
                <br/>
                <div className="mx-5">
                    <img style={{width:"80px"}} src={BootstrapLogo} />
                </div>
                <div className="mx-5">
                    <img style={{width:"80px"}} src={ReactLogo} />
                </div>
                <div className="mx-5">
                    <img style={{width:"80px"}} src={NodeLogo} />
                </div>
            </div>
        </div>
    )
}

export default PageHome