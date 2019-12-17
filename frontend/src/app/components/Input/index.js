import React from 'react';
import { Input, InputWrapper } from './styles';
import { FaPen, FaPlus } from 'react-icons/fa'
import { connect } from 'react-redux';

import Textarea from '../Textarea';

function Inputs(props) {

  const {
    inputs,
    handleInputChange,
    addMore,
    showTextarea,
  } = props

  return (
    inputs && inputs.length % 2 === 0 && inputs.map((input, index) => (
      <InputWrapper key={index}>
        <Input
          type="text"
          placeholder="Tecnologia"
          value={input.value}
          onChange={(e) => handleInputChange(e, input.id)}
        />
        <div className="icons">
          <FaPen onClick={() => showTextarea(index)} />
          <FaPlus onClick={() => addMore(index)} />
        </div>
        {input.open && <Textarea />}
      </InputWrapper>
    ))
  )
}

const mapStateToProps = store => ({
  inputs: store.comparation
})

const mapDispatchToProps = dispatch => ({
  addMore: (index) => dispatch({ type: 'ADD_MORE', index }),
  showTextarea: (index) => dispatch({ type: 'SHOW_TEXTAREA', index }),
})


export default connect(mapStateToProps, mapDispatchToProps)(Inputs)