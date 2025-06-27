import './App.css'
import PassJsxToProps from './PassJsxToProps'

function App() {
   
return (
  <>
    <h1 style={{ color: "chocolate" }}>Learn React (by) Shahid Naeem</h1>
   <PassJsxToProps textcol="blue">
    <h1 style={{color:"red"}}>Student Card</h1>
    <h2>Student Name : Tahir Bashir</h2>
    <h2>Father's Name : Yasir Ahmad</h2>
    <h2>Class : Nursery</h2>
    <h2>Roll No. : 25</h2>
   </PassJsxToProps>
   <PassJsxToProps textcol="orange">
    <h1 style={{color:"red"}}>Student Card</h1>
    <h2>Student Name : Zahid Bilal</h2>
    <h2>Father's Name : Tanveer Ahmad</h2>
    <h2>Class : Play Group</h2>
    <h2>Roll No. : 15</h2>
   </PassJsxToProps>
   <PassJsxToProps>
    <h1 style={{color:"red"}}>Student Card</h1>
    <h2>Student Name : Sobia Noor</h2>
    <h2>Father's Name : Muhammad Ali</h2>
    <h2>Class : Prep</h2>
    <h2>Roll No. : 05</h2>
   </PassJsxToProps>
  </>
)
}

export default App
