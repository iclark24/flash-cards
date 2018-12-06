import React from "react"
import {Card, Button, ButtonGroup} from "semantic-ui-react"

const Flash = ({id, question, answer, revealed, revealcard, remove}) => (
  <Card attached="top" style={{width: "300px", height: "200px", margin:"20px", padding:"auto"} }>
    {revealed ? 
      <Card.Content textAlign="center" onClick={() => revealcard(id)}>
        {answer}
      </Card.Content>
        :
      <Card.Content textAlign="center" onClick={() => revealcard(id)}>
        {question}
      </Card.Content>} 
    <ButtonGroup>
    <Button attached="left" color="orange">Edit</Button>
    <Button attached="right" color="red" onClick={() => remove(id)}>
    Delete
    </Button>
    </ButtonGroup>
  </Card>
)
export default Flash