import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton} from 'react-mdl';


class Projects extends Component{
        constructor(props){
            super(props);
            this.state={  activeTab: 0 };
        }

        toggleCategories(){
            if(this.state.activeTab === 0){
                return(
                    <div >
                 {/*First*/}   
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px',background:'url(https://pp.userapi.com/c852216/v852216666/2b12f/Zytw-fEXC-g.jpg) center/cover'}}>Photo</CardTitle>
               <CardText>
                   Mood
               </CardText>
               <CardActions border>
                    <Button colored>Me</Button>
                    <Button colored>Me</Button>
                    <Button colored>And me</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
               </CardMenu>
                </Card>    
                 {/*Second*/}   
                 <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px',background:'url(https://pp.userapi.com/c639325/v639325675/299dd/HggJGHSMbI8.jpg) center/cover'}}>Style</CardTitle>
               <CardText>
                   Mood
               </CardText>
               <CardActions border>
                    <Button colored>Me</Button>
                    <Button colored>Me</Button>
                    <Button colored>And me</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
               </CardMenu>
                </Card>    
                 {/*Second*/}   
                 <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px',background:'url(https://scontent-dfw5-1.cdninstagram.com/vp/04ecc96af9214b65c7c184baa444f827/5CBB699C/t51.2885-19/s320x320/37878284_219182535435042_3944878095021899776_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com) center/cover'}}>Adventures</CardTitle>
               <CardText>
                   Mood
               </CardText>
               <CardActions border>
                    <Button colored>Me</Button>
                    <Button colored>Me</Button>
                    <Button colored>And me</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
               </CardMenu>
                </Card>    
                </div>            
                )
            } else if(this.state.activeTab === 1){
                return(
                    <div><h1>Angular</h1></div>  
                    )
            }else if(this.state.activeTab === 2){
                return(
                    <div><h1>VueJs</h1></div>  
                    )
            }
        }


   

    render(){
        return( 
           <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>Life</Tab>
                <Tab>Stories</Tab>
                <Tab>Future</Tab>
        </Tabs>        

        <section className="projects-grid">
        <Grid >
            <Cell ceol={12}>
           <div className="content">{this.toggleCategories()}  </div>
            </Cell>
        </Grid>
             
        </section>

         </div>

        )
    }
}

export default Projects;