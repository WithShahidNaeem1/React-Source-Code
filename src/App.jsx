import './App.css'
import PropsInReact from './PropsInReact'

function App() {
  let name="Saad Naeem";
  
    return (
    <>
      <h1 style={{ color: "chocolate" }}>Learn React (by) Shahid Naeem</h1>
      <PropsInReact fullName={name} age={21} adrs={'Johar Town, Lahore.'} />
    </>

  )
}

export default App
