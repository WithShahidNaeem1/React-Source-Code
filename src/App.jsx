import FunctionAsProp from "./FunctionAsProp"

function App() {

   function showName(name){
        alert(name);
    }

    const passWord=()=>{
      alert('Password is : 12345');
    }

  return (
    <>
      <h1 style={{ color: "chocolate" }}>Learn React (with) Shahid Naeem</h1>
      <FunctionAsProp showName={showName} name='Shahid Naeem' passWord={passWord}/>
      <FunctionAsProp showName={showName} name='Ayesha Khan' passWord={passWord}/>
      <FunctionAsProp showName={showName} name='Muhammad Nadeem' passWord={passWord}/>
      <FunctionAsProp showName={showName} name='Sobia Tahir' passWord={passWord}/>
      <FunctionAsProp showName={showName} name='Rashid Mahmood' passWord={passWord}/>
      
    </>
  )
}

export default App