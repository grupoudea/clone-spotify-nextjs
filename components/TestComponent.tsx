

import React from 'react'

const TestComponent = ({contenido}) => {
  console.log(contenido);
  

  return (
    <div className='juan'>El contenido es {contenido}</div>
  )
}

export {TestComponent}