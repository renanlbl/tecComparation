import React from 'react';
import { Input, InputWrapper } from './styles';
import { FaPen, FaPlus } from 'react-icons/fa'

import Textarea from '../Textarea';

export default function Inputs(props) {

  const {
    inputs,
    handleInputChange,
    handleAddMore,
    handleShowTextarea,
    handleTextarea
  } = props

  return (
    inputs && inputs.length % 2 === 0 && inputs.map(input => (
      <InputWrapper key={input.id}>
        <Input
          type="text"
          placeholder="Tecnologia"
          value={input.value}
          onChange={(e) => handleInputChange(e, input.id)}
        />
        <div className="icons">
          <FaPen onClick={(e) => handleShowTextarea(e, input.id)} />
          <FaPlus onClick={handleAddMore} />
        </div>
        {input.open && <Textarea
          handleTextarea={(e) => handleTextarea(e, input.id)}
          value={input.text}
        />
        }
      </InputWrapper>
    ))
  )

}
