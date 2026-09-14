import axios from "axios";
import { useEffect, useState } from "react";

export default function LoginForm(){
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [userDateJoined, setUserDateJoined] = useState("");

  function handleSubmit(event : any){
    event.preventDefault();
    console.log("Submitting login form");

    axios.post("http://localhost:8080/account/generate-token",
      {
        username: event.target.username.value,
        password: event.target.password.value
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    ).then((response) => {
      console.log(response);
      if(response.data.code == 200){
        localStorage.setItem('token', response.data.token);
        setToken(response.data.token);
        localStorage.setItem('username', response.data.name);
        setUsername(response.data.name);
        localStorage.setItem('date_joined', response.data.date_joined);
        setUserDateJoined(response.data.date_joined);
        localStorage.setItem('logged_in', "true");
      } else {
        setMessage("Email or password do not match an existing account. Did you mean to sign up?");
      }
    }).catch((err) => {setMessage(err.message)});
  }

  function logout(){
    localStorage.setItem('token', '');
    setToken('');
    localStorage.setItem('username', '');
    setUsername('');
    localStorage.setItem('date_joined', '');
    setUserDateJoined('');
    localStorage.setItem('logged_in', 'false');
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    const storedDateJoined = localStorage.getItem('date_joined');

    if (localStorage.getItem('logged_in') === 'true' && storedToken && storedUsername && storedDateJoined) {
      setToken(storedToken);
      setUsername(storedUsername);
      setUserDateJoined(storedDateJoined);
    }
  }, []);

  return (<div>
    <p>{message}</p>
    { token ?
        (<div>
          <p>Welcome, {username}!</p>
          <p>You've been caring for your plants since {userDateJoined}.</p>
          <button onClick={logout}>Log out</button>
        </div>)
      :
      (<div>
        <form onSubmit={handleSubmit}>
          <label> Email: <input type="text" name="username" /> </label> <br/>
          <label> Password: <input type="password" name="password" /> </label> <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
      )
    }
  </div>)
}
