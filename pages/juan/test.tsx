

import { TestComponent } from '@/components/TestComponent'
import React from 'react'

const TestPage = () => {
  return (
    <div className="juan">
        <span>pagina de test</span>
        <TestComponent contenido="JUan G"/>
        <TestComponent contenido="XXX"/>
        <TestComponent contenido="YYY"/>
    </div>
  )
}

export default TestPage