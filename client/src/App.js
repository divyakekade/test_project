import Navbar from './Components/Navbar'
import UsersList from './Components/UsersList';
import Signup from './Components/Signup';
import Homepage from './Components/Homepage';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='app'>
    <Navbar />
    <div style={{marginTop:'60px'}}>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/usersList' element={<UsersList/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;
