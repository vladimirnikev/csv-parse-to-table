import React, { useReducer } from 'react'
import { Context, initialState, appReducer } from './reducer'
import Button from './components/Button'
import Table from './components/Table'


function App() {

  const [state, dispatch] = useReducer(appReducer, initialState)

  // console.log(state)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <>
        <Button />
        <Table data={state.data} isRequiredParams={state.isRequiredParams} />
      </>
    </Context.Provider>
  );
}

export default App;
