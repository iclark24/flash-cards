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
          <Form.Button color="green">Submit</Form.Button>
      </Form>
    )
  }
}



export default FlashForm