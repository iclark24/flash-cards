import React, { Component } from 'react';
import './App.css'
import {Container, Header, Button, Icon, Segment} from "semantic-ui-react"
import FCards from "./Flashes"
import FlashForm from "./FlashForm"

class App extends Component {
  state = {
    fcards: [],
    showForm: true,
  }

  toggleForm = () =>this.setState({ showForm: !this.state.showForm })

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  revealcard = (id) => {
    const { fcards } = this.state;
    this.setState({
      fcards: fcards.map(card => {
        if (card.id === id) {
          return {
            ...card,
            revealed: !card.revealed
          }
        }
        return card
      })
    })
  }

  removecard = (id) => {
    const fcards = this.state.fcards.filter( flash => {
      if (flash.id !== id)
      return flash
    })
    this.setState({ fcards: [...fcards], })
  }

  addFlash = (flashdata) => {
    let flash = { id: this.getId(), revealed: false, ...flashdata, };
    this.setState({ fcards: [flash, ...this.state.fcards], });
  };

  render() {
    const {showForm,} = this.state;
    return (
      <Container style={{ paddingTop:"25px"}} textAlign="center">
        <Header style={{ margin:"20px"}} as="h2">Flash Cards</Header>
        <Segment style={{ width: "1000px", margin:"auto"}}>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={showForm ? 'times' : 'plus'} />
          </Button>
          {showForm ? <FlashForm add={this.addFlash}/> : null}
        </Segment>
        <FCards fcards={this.state.fcards} remove={this.removecard} revealcard={this.revealcard}/>
      </Container>
    );
  }
}

export default App;