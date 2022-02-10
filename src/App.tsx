import { Component, createSignal, For } from 'solid-js'
import { StateContextProvider, useStateContext } from './StateContext'

const StateForm: Component = () => {
  const [, op] = useStateContext()
  const [newState, setNewState] = createSignal('')

  return (
    <>
      <input type="text" onChange={(e) => setNewState(e.currentTarget.value)} />
      <button type="button" onClick={() => op.addState(newState())}>
        Add State
      </button>
    </>
  )
}

const States: Component = () => {
  const [state] = useStateContext()

  return (
    <ul>
      <For each={Object.keys(state.states)}>{(state, index) => <li>{state}</li>}</For>
    </ul>
  )
}

const App: Component = () => {
  return (
    <StateContextProvider>
      <States />
      <StateForm />
    </StateContextProvider>
  )
}

export default App
