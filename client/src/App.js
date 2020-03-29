import React from "react";
import employees from "./employees.json";
import Main from "./components/Main"

class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };
  
render(){
    return(
      <Main employees={this.state.employees}/>
      
  
    )
    console.log("not crazy",this.state.employees)
}
}

export default App;
