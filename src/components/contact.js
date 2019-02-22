import React, {Component} from 'react';
import {Grid, Cell, List,ListItem, ListItemContent} from 'react-mdl';
import cont from './cont.jpg';
class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                <Cell col={6}>
                <h2>ELizaveta Bondareva</h2>
                <img src={cont} alt="avatar" style={{height:'500px'}}
                ></img>
                <p style={{width:'75%',margin:'auto', paddingTop:'1em'}}>I am popular, open-minded and always in fashion. And of course, I am - true coder. Аre you surprised?</p>
                </Cell>

                <Cell col={6}>
                
                <h2>Contact me</h2>
                <hr/>

            <div className="contact-list">
            <List>
                    <ListItem>
                        <ListItemContent style={{fontSize:'50px',fontFamily:'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        7 (123) 456-78-90
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize:'50px',fontFamily:'Anton'}}>
                        <i className="fa fa-whatsapp" aria-hidden="true"/>
                        7 (123) 456-78-90
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize:'50px',fontFamily:'Anton'}}>
                        <i className="fa fa-telegram" aria-hidden="true"/>
                        @java_girl
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize:'50px',fontFamily:'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        java_girl@example.com
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize:'50px',fontFamily:'Anton'}}>
                        <i className="fa fa-skype" aria-hidden="true"/>
                        java_girl
                        </ListItemContent>
                    </ListItem>
                    </List>            
            </div>

                
                    
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;