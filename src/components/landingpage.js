import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import face from './face.svg';

class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
        <Grid className='landing-grid'>
        <Cell col={12}>
        <img
        src={face}
        alt="avatar"
        className="avatar-img"
        />
        <div className="banner-text">
        <h1>Java-girl</h1>            
        <hr/>
        <p>Java | Pascal | Git | J2EE | C | JavaScript | C++</p>                 
        <div className="social-links">
     
        
        {/* Twitter*/}           
        <a href="https://twitter.com/Bondareva56_" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-twitter"  aria-hidden="true"/>
        </a>
         {/* Instagram*/}           
         <a href="https://www.instagram.com/bondareva.olisavya/" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-instagram"  aria-hidden="true"/>
        </a>
        {/* VK*/}           
         <a href="https://vk.com/bondarevae" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-vk"  aria-hidden="true"/>
        </a>
      {/* VK*/}           
        <a href="https://github.com/Tchecmareva821" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-github"  aria-hidden="true"/>
        </a>

        </div></div>
        </Cell>
        </Grid>

            </div>
        )
    }
}

export default Landing;