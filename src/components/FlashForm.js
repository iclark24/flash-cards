import React from "react"
import {Form, Grid} from "semantic-ui-react"

class FlashForm extends React.Component {

  state = { question:"", answer:""}

  componentDidMount() {
    if (this.props.id)
      this.setState({ question: this.props.question, answer: this.props.answer, revealed: this.props.revealed})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.props.id){
      this.props.edit({id: this.props.id, ...this.state})
      this.props.toggleEdit()}
    else {
      this.props.add(this.state)
    }
      this.setState({question:"", answer:""})
  } 

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value,})
  }

  rendersubmit() {
    if(this.props.id){
      return(
        <Form.Button color="green">Edit</Form.Button>
      )
    }
    else {
      return(
        <Form.Button color="green">Create</Form.Button>
      )
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          fluid
          label="Question"
          placeholder="Question"
          name="question"
          value={this.state.question}
          onChange={this.handleChange}
          />
        <Form.Input
          fluid
          label="Answer"
          placeholder="Answer"
          name="answer"
          value={this.state.answer}
          onChange={this.handleChange}
          />
        {this.rendersubmit()}
      </Form>
    )
  }
}



export default FlashForm