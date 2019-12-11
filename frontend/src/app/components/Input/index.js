import React from 'react';
import { Input, InputWrapper } from './styles';
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa'

export default function Inputs(props) {

  const {
    inputs,
    handleInputChange,
    handleAddMore
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
        <FaPen />
        <FaPlus onClick={handleAddMore} />
      </InputWrapper>
    ))
  )

}
