import React from 'react'
import { useNavigate} from 'react-router-dom'
import Styles from './Header.module.css'

export default function Header() {
    
   const navigate = useNavigate()
    async function handleClick() {
       navigate('/register-user')
    }
  return (
   <header className={Styles.header}> <div>
    <h1 className={Styles.h1}>Kaunas <span className={Styles.span}>BarberShop</span></h1>
    <img className={Styles.img} src="https://freepngimg.com/thumb/hair/59242-hairstyle-beauty-hairdresser-parlour-barber-barbershop.png" alt="" />

   </div>
    <button className={Styles.button} onClick={handleClick}>
    Register client
    </button>
    


   </header>
  )
}
