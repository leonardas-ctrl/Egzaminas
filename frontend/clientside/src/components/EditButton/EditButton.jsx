import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Styles from './EditButton.module.css'

export default function EditButton({id}) {

  const navigate = useNavigate()

  function handleButton () {
    navigate(`/edit/${id}`)
  }

  return (
    <button className={Styles.button} onClick={handleButton}>Edit</button>
  )
}
