import React from 'react';

//import './styles.scss';

export default function Textarea(props) {
  const { value, handleTextarea } = props
  return (
    <>
      <textarea placeholder="Prós e contras" value={value} onChange={handleTextarea} />
    </>
  )

}