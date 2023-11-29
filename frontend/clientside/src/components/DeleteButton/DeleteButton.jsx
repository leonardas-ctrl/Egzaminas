import React from 'react'
import axios from 'axios'
import Styles from './DeleteButton.module.css'

const API = "http://localhost:3001/users/"


export default function DeleteButton({id, setUsers}) {

  async function handleButton() {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.delete((API + id)).then(() => {
        setUsers((prev) => prev.filter((user) => user._id  !== id))
        
      }).catch((error) => {
        console.log(error)
      })
      
    } else {
      return
    }
  } 

  return (
    <button className={Styles.button} onClick={handleButton}>Delete</button>
  )
}
