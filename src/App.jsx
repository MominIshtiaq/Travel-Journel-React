import React from 'react'
import Header from './components/header/Header'
import data from './data'
import CardContainer from './components/card-container/CardContainer'

const App = () => {
  return (
    <>
      <Header />
      <CardContainer data={data} />
    </>
  )
}

export default App