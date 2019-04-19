import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react'

const style = {
    divSize: {
        backgroundColor: "orange",
        height: "800px",
        width: "100%",
        position: "relative"
    },
    buttonMargin: {
        marginTop: "5rem"
    },
    align: {
        margin: "0",
        position: "absolute",
        top: "50%",
        msTransform: "translateY(-50%)",
        transform: "translateY(-50%)",
    },
    textArea: {
        width: "600px",
    }
}

const MainContent = () => {
    return (
        <div style={style.divSize}>
            <Container text>
                <section style={style.align}>

                    <Grid style={style.textArea} columns={1} relaxed='very'>
                        <Grid.Column>
                            <Header as="h2">Jon Lascaze</Header>
                            <p style={style.p}>I like to write code for fun and build projects. I'm currently a freelance developer working out of the Greater Boston area. I specialize in building clean, and notable websites and applications. Recently completed an internship with <a href="#">Financial Aid Services</a> as a Front-End Developer. </p>
                            <button style={style.buttonMargin} class="ui large button">Contact </button>
                        </Grid.Column>
                    </Grid>
                </section>

            </Container>
        </div>
    )
}


export default MainContent;