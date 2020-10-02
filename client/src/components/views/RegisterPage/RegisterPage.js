import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { registerUser } from '../../../_actions/user_actions'

function RegisterPage(props) {

  const dispatch = useDispatch();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [CheckPassword, setCheckPassword] = useState("")
  const [Name, setName] = useState("")
  
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }
  const onCheckPasswordHandler = (event) => {
    setCheckPassword(event.currentTarget. value)
  }

  const onSubmitControl = (event) => {
    // 페이지 refresh  방지
    event.preventDefault();

    if (Password !== CheckPassword) {
      return alert("패스워드가 일치하지 않습니다.");
    }

    let body = {
      email : Email,
      name : Name,
      password : Password
    }
    
    dispatch(registerUser(body))
    .then(response => {
      if (response.payload.success) {
        props.history.push('/');
      }
      else {
        alert("Failed");
      }
    })
  }

  return (
    <div style={{display:'flex', justifyContent : "center", alignItems: "center", width : "100%", height: "100vh"}}>
      <form style={{display:'flex', flexDirection:'colum'}} onSubmit={onSubmitControl}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />
        <label>Password</label>
        <input type="password" value={Name} onChange={onPasswordHandler} />
        <label>Check Password</label>
        <input type="password" value={Name} onChange={onCheckPasswordHandler} />

        <br/>
        <button type="submit">Sign up</button>
      </form>
    </div>
)


}

export default withRouter(RegisterPage)
