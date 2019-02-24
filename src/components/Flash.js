import React from "react"
import {Card, Button, ButtonGroup, Icon, Grid} from "semantic-ui-react"
import FlashForm from "./FlashForm"


class Flash extends React.Component {
  state= {editing:false,}

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  // ({id, question, answer, revealed, revealcard, remove, edit})
  render () {
    return (
      <Grid.Row>
      <Card attached="top" style={{ width: "auto", height: "222px", margin:"20px", userSelect:"none"}}>
      {this.state.editing ?
        <>
          <FlashForm { ...this.props } toggleEdit={this.toggleEdit} />
        </>
      :
      <>
        {this.props.revealed ? 
          <Card.Content style ={{ display:"flex", alignItems:"center", justifyContent:"center", overflow:"auto"}} textAlign="center" onClick={() => this.props.revealcard(this.props.id)}>
            {this.props.answer}
          </Card.Content>
            :
          <Card.Content style ={{ display:"flex", alignItems:"center", justifyContent:"center ", overflow:"auto"}} textAlign="center" onClick={() => this.props.revealcard(this.props.id)}>
            {this.props.question}
          </Card.Content>} 
        </>
          }
        <ButtonGroup>
        <Button icon color="orange" onClick={this.toggleEdit}>
        <Icon name="pencil"/>
        </Button>
        <Button icon color="red" onClick={() => this.props.remove(this.props.id)}>
        <Icon name="trash"/>
        </Button>
        </ButtonGroup>
      </Card>
      </Grid.Row>
    )
  }
}
export default Flash