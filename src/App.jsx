import './App.css'
import CompFun, { flower, Provinces } from './CompFun'


function App() {
  return (
    <>
      <h1 style={{ color: "chocolate" }}>Learn React (by) Shahid Naeem</h1>
      {flower}
      <Provinces />
      <CompFun />

    </>

  )
}

export default App
