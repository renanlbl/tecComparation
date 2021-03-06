import React, { Component } from 'react';
import { Container, Separator } from './styles';
import Input from '../../components/Input';
// import { connect } from 'react-redux';

//components
import Button from '../../components/Button'



//import './styles.scss';

class Home extends Component {
  state = {
    inputs: [
      {
        id: 1,
        value: '',
        text: '',
        open: false,
      },
      {
        id: 2,
        value: '',
        text: '',
        open: false,
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

  // handleAddMore = () => {
  //   let id1 = Math.random()
  //   let id2 = Math.random()

  //   this.setState({
  //     inputs: [
  //       ...this.state.inputs,
  //       {
  //         id: id1 === id2 ? Math.random() : id1,
  //         value: '',
  //         text: ''
  //       },
  //       {
  //         id: id2 === id1 ? Math.random() : id2,
  //         value: '',
  //         text: ''
  //       }
  //     ],
  //   })
  // }

  // handleShowTextarea = (e, id) => {
  //   let input = this.state.inputs.filter(input => input.id === id)
  //   input[0].open = true
  //   this.setState({
  //     input
  //   })
  // }

  handleTextarea = (e, id) => {
    let input = this.state.inputs.filter(input => input.id === id)
    input[0].text = e.target.value
    this.setState({
      input
    })
  }


  render() {
    const { inputs } = this.state
    const { addMore, showTextarea } = this.props

    return (
      <div className="content">
        <Container>
          <Separator>
            <Input
              handleInputChange={this.handleInputChange}
              handleAddMore={addMore}
              handleShowTextarea={showTextarea}
              handleTextarea={this.handleTextarea}
              value={inputs.value}
            />
          </Separator>
        </Container>
        <Button />
      </div>
    )
  }
}

// const mapStateToProps = store => ({
//   teste: store.comparation
// })



export default Home