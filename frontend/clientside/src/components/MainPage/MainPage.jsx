import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditButton from '../EditButton/EditButton'
import DeleteButton from '../DeleteButton/DeleteButton'
import Styles from './MainPage.module.css'

const API = "http://localhost:3001/users"

export default function MainPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(API)
      .then(( {data} ) => setUsers(data.users))
      .catch(error => {
        console.log("Error fetching data:", error);
      });
  }, []);

  
  return (
    <div className= {Styles.container}>
      <table className= {Styles.table}>
        <thead className= {Styles.thead}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date&Time</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className= {Styles.tbody}>
        {users.map((user) =>  { 
          return <tr key={user._id}>
           <td className= {Styles.tdName}><img className={Styles.img} src={user.gender} alt="" /> {user.fullName} </td>
           <td>{user.email}</td>
           
           <td>{user.dateAndTime.split("T")[0]} <br />
           {user.dateAndTime.split("T")[1].split(".")[0].substring(0, 5)}
           </td>
           <td className= {Styles.button}><EditButton id={user._id}/></td>
           <td className= {Styles.button}><DeleteButton id={user._id} setUsers={setUsers}/></td>
         </tr>
             })}

        </tbody>
      </table>
    </div>
  )
}
