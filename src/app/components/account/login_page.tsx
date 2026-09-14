import { useState } from "react";
import LoginForm from "./login_form";
import CreateAccountForm from "./create_account_form";


export default function LoginPage(){
  const [create, setCreate] = useState(false);

  return (
    <div>
      <h1>Log In</h1>
      { !create ?
        <div>
          <LoginForm />
          <button onClick={() => setCreate(true)}>Create Account</button>
        </div>
        : <div>
          <CreateAccountForm />
          <button onClick={() => setCreate(false)}>Go Back</button>
        </div>
      }
    </div>
  )
}
