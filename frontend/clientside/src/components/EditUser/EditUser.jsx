import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Styles from './EditUser.module.css'

const API = "http://localhost:3001/edit/"

export default function EditUser() {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [timeAndDateInput, setTimeAndDateInput] = useState('')


  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(API + id).then(({data}) => {
      console.log(data.user);
      setNameInput(data.user.fullName)
      setEmailInput(data.user.email)
      setTimeAndDateInput(data.user.dateAndTime)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  // axios.get(API + id).then((response) => {
  //   setNameInput(response.data.fullName)
  //   setEmailInput(response.data.email)
  //   console.log(response.data);
  // }).catch((error) => {
  //   console.log(error)
  // })

 function handleSubmit(e) {
    e.preventDefault()

    if (nameInput === '' || emailInput === '' || timeAndDateInput === '' || !document.querySelector('input[name="radio"]:checked') ) {
      
      document.querySelector('#alert').style.display = 'block'
      return
    } else if (nameInput.length < 4) {
      alert("Name must be at least 4 characters long")
      return
    }
    
    else {

      document.querySelector('#alert').style.display = 'none'
    }
    try {
     axios.put(API + id, ({
        fullName: nameInput,
        email: emailInput,
        dateAndTime: timeAndDateInput,
        gender: document.querySelector('input[name="radio"]:checked').value

      })).then(()=> navigate('/')).catch(error => console.log(error))

     

      

  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className={Styles.container}>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <div className={Styles.radioContainer}>
          <div className={Styles.radio}>
            <input type="radio" name="radio" id="radio1" value="https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"/>
            <label htmlFor="radio1"><img className={Styles.img} src="https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg" alt="" /></label>
          </div>
          <div className={Styles.radio}>
            <input type="radio" name="radio" id="radio2" value="https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg"/>
            <label htmlFor="radio2"><img className={Styles.img} src="https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg" alt="" /></label>
          </div>
        </div>
        <label htmlFor="name">Full Name</label> <br />
        <input type="text" id="name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} /> <br />
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} /> <br />
        <label htmlFor="timeAndDate">Time&Date</label> <br />
        <input type="datetime-local" id="timeAndDate" value={timeAndDateInput} onChange={(e) => setTimeAndDateInput(e.target.value)} /> <br />
        <p id='alert' className={Styles.alert}>All fields are required</p>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => navigate(-1)}>X</button>
    </div>
  )
}
