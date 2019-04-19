import React from 'react';
import { Container, Button, Header } from 'semantic-ui-react'


const styles = {
    hr: {
        marginTop: "5rem",
        border: "1px solid white"
    },
    headerStyle: {
        marginTop: "5rem",
        textAlign: "center"
    },
    buttonStyle: {

    }
}

const Contact = () => {
    return (
        <div>
            <Container textAlign='center'>
                <hr style={styles.hr}></hr>
                <Header style={styles.headerStyle} as='h4'>Currently open to opportunities</Header>
                <Button size='massive' style={styles.buttonStyle} secondary>Contact</Button>
            </Container>
        </div>
    )
}

export default Contact