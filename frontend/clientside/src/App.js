import './App.css';
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import EditUser from './components/EditUser/EditUser';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App" >
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
        <Route path='/register-user' element={<RegistrationForm/>}/>
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
