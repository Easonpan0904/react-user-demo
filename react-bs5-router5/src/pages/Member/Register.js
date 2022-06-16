import React, { useState } from 'react'

// 欄位有變動時觸發

function Register() {
  const [fields, setFields] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
  })
  const handleFieldsChange = (e) => {
    const newFields = {
      ...fields,
      [e.target.name]: e.target.value,
    }

    setFields(newFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/user', {
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    const data = await res.json()
    console.log(data)
  }
  return (
    <>
      <h1>會員註冊</h1>
      <form action="">
        <div class="mb-3">
          <label>姓名</label>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleFieldsChange}
            required
          />
        </div>
        <div class="mb-3">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={fields.email}
            onChange={handleFieldsChange}
            required
          />
        </div>
        <div class="mb-3">
          <label>帳號</label>
          <input
            type="text"
            name="username"
            value={fields.username}
            onChange={handleFieldsChange}
            required
          />
        </div>
        <div class="mb-3">
          <label>密碼</label>
          <input
            type="text"
            name="password"
            value={fields.password}
            onChange={handleFieldsChange}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          送出
        </button>
      </form>
    </>
  )
}

export default Register
