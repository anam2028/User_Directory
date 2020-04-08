import React, {useState} from 'react';
// import Link from "react-router-dom";

function Main(props) {
let styles = {
    width: '100px',
    height: '100px'
}

    const [queryValue, setValue] = useState('')
    return(
        <div class="md-form active-pink active-pink-2 mb-3 mt-0">
        <h1>Employee Directory</h1>
        <input onChange={event => setValue(event.target.value)} class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Image</th>
              {/* <Link to="/Orderalpha">
                <th scope="col">Name</th>
              </Link> */}
              <th scope="col">name</th>
              <th scope="col">occupation</th>
              <th scope="col">location</th>
            </tr>
          </thead>
          <tbody>
            {props.employees.filter(name => name.name.toLowerCase().includes(queryValue)).map(filteredName => (
              <tr>
                <th scope="row"></th>
                <td>{filteredName.id}</td>
                <td><img src={filteredName.image} alt="profilepic" style={styles}></img></td>
                <td>{filteredName.name}</td>
                <td>{filteredName.occupation}</td>
                <td>{filteredName.location}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div >
    )
}
export default Main;