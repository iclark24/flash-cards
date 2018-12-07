import React, { Component } from 'react';
import {Header, Button, Icon, Segment, Grid} from "semantic-ui-react"
import Flash from "./Flash"
import FlashForm from "./FlashForm"



class Flashes extends Component {
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

  editcard= (carddata) => {
    const fcards = this.state.fcards.map( card => {
      if (card.id === carddata.id)
        return carddata
      return card
    })
    this.setState({fcards})
  }

  addFlash = (flashdata) => {
    let flash = { id: this.getId(), revealed: false, ...flashdata, };
    this.setState({ fcards: [flash, ...this.state.fcards], });
  };
  
  render() {
    const {showForm,} = this.state;
    return (
      <div>

        <Header style={{ margin:"20px"}} as="h2" content="Flash Cards"/>
          <Segment style={{ width: "1000px", margin:"auto"}}>
            <Button icon color="blue" onClick={this.toggleForm}>
              <Icon name={this.state.showForm ? 'times' : 'plus'} />
            </Button>
            {showForm ? <FlashForm add={this.addFlash}/> : null}
          </Segment>

        <Grid columns="three" centered>
          <Grid.Row>
              {this.state.fcards.map(fcard => (
                <Grid.Column>
                  <Flash key={fcard.id} {...fcard} revealcard={this.revealcard} remove= {this.removecard} edit={this.editcard}/>
                </Grid.Column>
                ))
              }
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Flashes;