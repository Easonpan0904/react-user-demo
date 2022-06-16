import { useState } from 'react'

function Login(props) {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const newUserData = {
      ...userData,
      [e.target.name]: e.target.value,
    }

    setUserData(newUserData)
  }
  return (
    <>
      <h1>登入</h1>
      <form>
        <div>
          <label>帳號</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>密碼</label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default Login
