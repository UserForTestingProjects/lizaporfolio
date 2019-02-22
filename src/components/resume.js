import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import resum from './resum.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                <Cell col={4}>
                <div style={{textAlign:"center"}}>
                <img src={resum} alt="avatar" style={{height:'500px'}}/>
                </div>
                
                <h2 style={{paddingTOP:'2em'}}>Elizaveta Bondareva</h2>
                <h4 style={{color:'grey'}}  >Java Developer</h4>
                <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                <p>Darling but not yours... I am fond of adventures, photo, fashion and coding.
                    I dont respect people who dont respect me and my lifestyle. I am student of Kazan Federal University. 
                    Parties is my passion and I do what ever I want every time. I dont care what your think about me.
                </p>
                <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                <h5>Adress</h5>
                <p>My Adress is not of your business</p>
                <h5>Phone</h5>
                <p>(123) 456-78-90</p>
                <h5>Email</h5>
                <p>java_girl@example.com</p>
                <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                 </Cell>
                <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>
                <Education
                startYear={2007}
                endYear={2018}
                schoolName="Local School"
                schoolDescription="My school is new and modern.  There are classrooms for different subjects, 
                such as English, History, Physics, Mathematics, Chemistry, Geography, Biology Literature etc.
                There is a computer class in our school. We study computer science here. 
                The computer class has the most modern equipment and the Internet access.              
                "
                />
                <Education
                startYear={2018}
                endYear={2022}
                schoolName="Kazan Federal University"
                schoolDescription="KFU is one of the oldest Russian universities, founded more than 200 
                years ago. The main educational center of Tatarstan. Since 2009, the university has the status of a federal university.
                KFU is a national research center, it has more than 30 scientific laboratories. Soon it is planned to open new laboratories,
                 where they will carry out developments in biomedicine, physics, chemistry, biology, ecology and geology.           
                "
                />
                <hr style={{borderTp:'3px solid #e22947'}}/>
                <h2>Experience</h2>

                <Experience 
                startYear={2017}
                endYear={2018}
                jobName="Junior Java Developer"
                jobDescription="Development of a high-loaded, high-performance system;
                Correction of errors found;
                Development of new functionality;
                Commenting code;
                Work in the version control system, task management and knowledge base;
                Implementation of business logic;
                Participation in the development of the system architecture or its components;
                Code Review;"
                />
                <hr style={{borderTp:'3px solid #e22947'}}/>
                 <h2>Skills</h2>
                 <Skills
                skill="Piano"
                progress={100}
                />
                <Skills
                skill="Java"
                progress={57}
                />
                <Skills
                skill="Pascal"
                progress={40}
                />
                <Skills
                skill="Git"
                progress={70}
                />
                <Skills
                skill="J2EE"
                progress={50}
                />
                 <Skills
                skill="C++"
                progress={30}
                />
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;