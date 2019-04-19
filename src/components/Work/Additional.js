import React from 'react'
import { Image, Card, Label, Container, Button } from 'semantic-ui-react'

const style = {
    cardStyle: {
        marginTop: "5rem",
    }

}



const Additional = props => {
    return (
        <div style={style.cardStyle}>
            <Container>
                <Card.Group centered>
                    {props.data.map(item => (
                        < Card centered>
                            <Image
                                src="https://via.placeholder.com/240"
                                label={{ as: 'a', corner: 'left', icon: 'external alternative' }}
                                fluid />
                            <Card.Content>
                                <Card.Header>{item.title}</Card.Header>
                                <Card.Meta>
                                    {item.meta}
                                </Card.Meta>
                                <Card.Description>{item.description}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Label basic>{item.label}</Label>
                                <Label basic>{item.label2}</Label>
                                <Label basic>{item.label3}</Label>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            </Container>
        </div >
    )
}


export default Additional