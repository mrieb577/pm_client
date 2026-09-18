import axios from "axios";
import { useState } from "react";

type cafState = {
  username: string,
  email: string,
  password: string
}

export default function CreateAccountForm(){
  const [message, setMessage] = useState("");
  const [state, setState] = useState<cafState>({
    username: "",
    email: "",
    password: ""
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  function checkPassword(event: any){
    setConfirmPassword(event.target.value);
  }

  function handleChange(event: any){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({ ...state, [name]: value });
  }

  function handleSubmit(event: any){
    event.preventDefault();
    console.log(state);

    var populated = true;
    for(const[key, value] of Object.entries(state)){
      if(!value) populated = false;
    }

    if(confirmPassword === state.password && populated){
      console.log("Can register new user");

      var pad = function(num: number) { return ('00' + num).slice(-2) };
      var date;
      date = new Date();
      date = date.getUTCFullYear()         + '-' +
              pad(date.getUTCMonth() + 1)  + '-' +
              pad(date.getUTCDate());

      axios.post("http://localhost:8080/account/add-user",
        {
          name: state.username,
          email: state.email,
          password: state.password,
          date_joined: date
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      ).then((response) => {
        console.log(response);
        if(response.data.code === 200){
          setMessage("Successfully created new user");
        } else {
          setMessage("Failed to create new user: " + response.data.message);
        }
      }).catch((err) => {
        setMessage("Failed to create new user: " + err.message);
      });
    } else {
      setMessage("Passwords do not match or one or more fields is empty");
    }
  }

  return (
    <div>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <label> Username: <input type="text" name="username" onChange={handleChange} /> </label> <br/>
        <label> Email: <input type="text" name="email" onChange={handleChange} /> </label> <br/>
        <label> Password: <input type="password" name="password" onChange={handleChange} /> </label> <br/>
        <label> Confirm password: <input type="password" name="confirm_password" onChange={checkPassword} /> </label> <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
