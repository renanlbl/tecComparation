import React, { Component } from 'react';
import { Container, Separator } from './styles';
import Input from '../../components/Input';



//import './styles.scss';

export default class Home extends Component {
  state = {
    inputs: [
      {
        id: 1,
        value: '',
        text: null,
      },
      {
        id: 2,
        value: '',
        text: null,
      }
    ],
  }

  handleInputChange = (e, id) => {
    let input = this.state.inputs.filter(input => input.id === id)
    input[0].value = e.target.value
    this.setState({
      input
    })
  }

  handleAddMore = () => {
    let id1 = Math.random()
    let id2 = Math.random()

    this.setState({
      inputs: [
        ...this.state.inputs,
        {
          id: id1 === id2 ? Math.random() : id1,
          value: '',
          text: ''
        },
        {
          id: id2 === id1 ? Math.random() : id2,
          value: '',
          text: ''
        }
      ],
    })
  }

  handleShowTextarea = (e, id) => {
    let input = this.state.inputs.filter(input => input.id === id)
    input[0].text = true
    this.setState({
      input
    })
  }


  render() {
    const { inputs } = this.state

    return (
      <div className="content">
        <Container>
          <Separator>
            <Input
              inputs={inputs}
              handleInputChange={this.handleInputChange}
              handleAddMore={this.handleAddMore}
              handleShowTextarea={this.handleShowTextarea}
              value={inputs.value}
            />
          </Separator>
        </Container>
      </div>
    )
  }
}