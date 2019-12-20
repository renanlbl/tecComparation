import React from 'react';
import { Input, InputWrapper } from './styles';
import { FaPen, FaPlus } from 'react-icons/fa'
import { connect } from 'react-redux';

import Textarea from '../Textarea';

function Inputs(props) {

  const {
    inputs,
    handleInput,
    addMore,
    showTextarea,
    handleTextarea
  } = props

  return (
    inputs && inputs.length % 2 === 0 && inputs.map((input, index) => (
      <InputWrapper key={index}>
        <Input
          type="text"
          placeholder="Tecnologia"
          value={inputs.value}
          onChange={(event) => handleInput(event, index)}
        />
        {/* <input type="text" onChange={handleInput} /> */}
        <div className="icons">
          <FaPen onClick={() => showTextarea(index)} />
          <FaPlus onClick={() => addMore(index)} />
        </div>
        {input.open && <Textarea handleTextarea={(event) => handleTextarea(event, index)} value={inputs.text} />}
      </InputWrapper>
    ))
  )
}

const mapStateToProps = store => ({
  inputs: store.comparation,
})

const mapDispatchToProps = dispatch => ({
  addMore: (index) => dispatch({ type: 'ADD_MORE', index }),
  showTextarea: (index) => dispatch({ type: 'SHOW_TEXTAREA', index }),
  handleTextarea: (event, index) => dispatch({ type: 'HANDLE_TEXTAREA', payload: { event, index } }),
  handleInput: (event, index) => dispatch({ type: 'HANDLE_INPUT', payload: { event, index } }),
})


export default connect(mapStateToProps, mapDispatchToProps)(Inputs)