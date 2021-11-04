import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import chickenLogo from '../assets/Rooster1.png'

class ChickenNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: ""
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
    this.props.createNewChicken(this.state.form)
    this.setState({submitted: true})
  }

  render() {
    console.log(this.state.form)
    return (
      <>
        <h3>Plenty of space for new chickens</h3>
        <img style={{display:"block", marginLeft:"auto", marginRight:"auto"}}src={chickenLogo} alt="logo for Chicken Tinder" className="chicken-logo"/>
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
              Chicken's Hobbies and Enjoyment
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
            Add a New Chicken
          </Button>
        {this.state.submitted && <Redirect to="/chickenindex" />}
      </>
    )
  }
}
export default ChickenNew