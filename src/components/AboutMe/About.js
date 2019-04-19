import React from 'react';
import { Container, Header, Grid, Image, Segment } from 'semantic-ui-react';

const style = {
    margin: {
        height: "800px",
        width: "100%",
        backgroundColor: "purple",
        position: "relative"
    },
    textAlign: {
        margin: "0",
        position: "absolute",
        top: "50%",
        msTransform: "translateY(-50%)",
        transform: "translateY(-50%)",
        paddingRight: "5rem",
    },
    divSize: {
        width: "600px",
        fontAlign: "justify"
    }
}

const About = () => {
    return (
        <div style={style.margin}>
            <Container text>
                <section style={style.textAlign}>

                    <Grid style={style.divSize} columns={1} relax='very'>
                        <Grid.Column>
                            <Header as='h2'>About</Header>
                            <p>I'm an aspiring software engineer located in New Hampshire. I enjoy building web applications, responsive websites, terminal programs, and more.</p>
                            <p>I hold a Bachelors in Finance from Southern New Hampshire University. Within the last two years, I looked to make a  switch to the IT field, and completed a <a href="#">Full Stack Coding Bootcamp</a> offered through University of New Hampshire, focused on the MERN stack, in addition to my own self-learning. Shortly after completing the bootcamp, I began an internship as a Front End Develop with <a href="#">Financial Aid Services Inc.</a></p>
                        </Grid.Column>
                    </Grid>
                    <p>Below are a few things I'm experienced with:</p>
                    <Grid columns={2} relax='very'>
                        <Grid.Column>
                            <p><i class='small angle double right icon'></i> Test 1</p>
                            <p><i class='small angle double right icon'></i> Test 1</p>
                            <p><i class='small angle double right icon'></i> Test 1</p>
                            <p><i class='small angle double right icon'></i> Test 1</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p><i class='small angle double right icon'></i> Test 1</p>
                            <p><i class='small angle double right icon'></i> Test 1</p>
                            <p><i class='small angle double right icon'></i> Test 1</p>
                            <p><i class='small angle double right icon'></i> Test 1</p>
                        </Grid.Column>
                    </Grid>

                </section>
            </Container>
        </div>
    )
};


export default About;