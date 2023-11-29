import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import Styles from './RegistrationForm.module.css'

const API = "http://localhost:3001/users"

export default function RegistrationForm() {
  const [nameInput, setNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [timeAndDateInput, setTimeAndDateInput] = useState("")

  const Navigate = useNavigate()
function handleSubmit(e) {
  e.preventDefault()
  const button = document.getElementById('button')
  button.disabled = true
  if (nameInput === '' || emailInput === '' || timeAndDateInput === '') {
    alert("Please fill in all fields")
    button.disabled = false
    return
  }
  if (nameInput.length < 4) {
    alert("Name must be at least 4 characters long")
    button.disabled = false
    return
    
  }
  if (!document.querySelector('input[name="radio"]:checked')) {
    alert("Please select a gender")
    button.disabled = false
    return
    
  }
  
  try {
    axios.post(API, ({
      fullName: nameInput,
      email: emailInput,
      dateAndTime: timeAndDateInput,
      gender: document.querySelector('input[name="radio"]:checked').value
    })).then(()=> Navigate('/')).catch(error => console.log(error))
  } catch (error) {
    console.log(error)
  }

  

}
function cancelButtonHandler() {
    Navigate('/')
  }

  return (
    <div className={Styles.container}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <div className= {Styles.radioContainer}>
          <div className= {Styles.radio}>
            <input  type="radio" name="radio" id="radio1" value="https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"/>
            <label htmlFor="radio1"><img className={Styles.img} src="https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg" alt="" /></label>
          </div>
         <div className= {Styles.radio}>
           <input  type="radio" name="radio" id="radio2" value="https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg"/>
           <label htmlFor="radio2"><img className={Styles.img} src="https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg" alt="" /></label>
         </div>
       </div>
        <label htmlFor="name">Full Name</label> <br />
        <input type="text" id="name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} /> <br />
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/> <br />
        <label htmlFor="timeAndDate">Time&Date</label> <br />
        <input type="datetime-local" id="timeAndDate" value={timeAndDateInput} onChange={(e) => setTimeAndDateInput(e.target.value)}/> <br />
        <button id='button' type="submit">Register Client</button>
      </form>
      <button onClick={cancelButtonHandler}>X</button>
    </div>
  )
}
