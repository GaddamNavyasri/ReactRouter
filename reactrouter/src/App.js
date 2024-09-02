import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigate from './components/Navigate';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import Default from './components/Default';
import { Featured } from './components/Featured';
import { New } from './components/New';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Users1 } from './components/Users1';
import { Member } from './components/Member';
import { Profile } from './components/Profile';


function App() {
  return (
    <div className="App">
      <Navigate/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='/order-summary' element={<OrderSummary/>}/>
        <Route path="*" element={<Default/>}/>
        <Route path='products' element={<Products/>}>
        <Route index element={<Featured/>}/>
          <Route path='featured' element={<Featured/>}/>
            <Route path='new' element={<New/>}/>
        </Route>
        <Route path='Users' element={<Users/>}>
          <Route path=':userid' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
          </Route>
          <Route path='Member' element={<Member/>}></Route>
          <Route path='Profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
