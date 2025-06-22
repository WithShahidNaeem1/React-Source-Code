import './App.css'
import ArrayWithProps from './ArrayWithProps'

function App() {
  let university=['UET', 'UCP', 'MUL','UMT','PU'];

return (
  <>
    <h1 style={{ color: "chocolate" }}>Learn React (by) Shahid Naeem</h1>
    <ArrayWithProps uni={university[0]} />
    <ArrayWithProps uni={university[1]} />
    <ArrayWithProps uni={university[2]} />
    <ArrayWithProps uni={university[3]} />
    <ArrayWithProps uni={university[4]} />
  </>
)
}

export default App
