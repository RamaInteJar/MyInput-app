import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([])

  const AddUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    })
    
  }
  
  return (
    <div className="App">
      <h1>Hello Project</h1>
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
