import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ChickenEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: this.props.chicken ? this.props.chicken.name : "",
        age: this.props.chicken ? this.props.chicken.age : "",
        enjoys: this.props.chicken ? this.props.chicken.enjoys : "",
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.updateChicken(this.state.form, this.props.id)
    this.setState({submitted: true})
  }

  render() {
    return (
      <>
      <div className="page-body">
        <h3>What's new with you?</h3>
        <Form>
          <FormGroup>
            <Label for="name">
              Chicken's Name
            </Label>
            <Input
              name="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">
              Chicken's Age
            </Label>
            <Input
              name="age"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">
              Chicken's Enjoyment
            </Label>
            <Input
              name="enjoys"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
        </Form>
          <Button name="submit" onClick={this.handleSubmit}>
            Submit updates
          </Button>
        {this.state.submitted && <Redirect to={`/chickenshow/${this.props.chicken.id}`}  />}
        </div>
      </>
    )
  }
}
export default ChickenEdit