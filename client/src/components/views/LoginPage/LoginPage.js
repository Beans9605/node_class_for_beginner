import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {loginUser} from '../../../_actions/user_actions'


function LoginPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitControl = (event) => {
        event.preventDefault();

        let body = {
            email : Email,
            password : Password
        }

        dispatch(loginUser(body))
        .then(response => {
            console.log(response.payload);
            if (response.payload.loginSuccess) {
                props.history.push('/');
            }
            else {
                alert("Failed");
            }
        })
    }

    return (
        <div style={{display:'flex', justifyContent : "center", alignItems: "center", width : "100%", height: "100vh"}}>
        <form style={{display:'flex', flexDirection:'column'}} onSubmit={onSubmitControl}>
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler} />
          <label>Password</label>
          <input type="password" value={Password} onChange={onPasswordHandler} />
  
          <br/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
}

export default LoginPage
