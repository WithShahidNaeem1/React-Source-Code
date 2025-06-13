function EventFunctions(){

    function myfunction(){
        alert("This is my Function");
    }

    const city=(cityName)=>{
        alert(cityName);
    }

    return(
        <>
        <h1>Events Call in React</h1>
        <button onClick={()=> city("Islamabad")}>Islamabad</button>
        <button onClick={()=> city("Lahore")}>Lahore</button>
        </>
        
    )
}

export default EventFunctions;