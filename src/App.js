import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter , Link , Switch , Route} from 'react-router-dom';
import All from './pages/All';
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import Shakes from './pages/Shakes';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <h1>OUR MENU</h1>
<header className=' text-white p-5'>

  <ul className='list-inline d-flex justify-content-center new  gap-5'>
    
    <li><Link style={{textDecoration: 'none' , color:"#a62349"}} to="./all"> ALL </Link></li>
    <li><Link style={{textDecoration: 'none' , color:"#a62349"}} to="./breakfast"> BREAKFAST </Link></li>
    <li><Link style={{textDecoration: 'none' , color:"#a62349"}} to="./lunch"> LUNCH </Link></li>
    <li><Link style={{textDecoration: 'none' , color:"#a62349"}} to="./shakes"> SHAKES </Link></li>
  </ul>
  
  
  
  
  
</header>

<section className='container py-5'>
 <Switch>
  


  <Route path ='/all'>
    <All />
  </Route>

  <Route path ='/breakfast'>
    <Breakfast />
  </Route>

  <Route path ='/lunch'>
    <Lunch />
  </Route>

  <Route path ='/shakes'>
    <Shakes />
  </Route>
  
  </Switch>  
</section>
<div>
   <footer class=" bg-dark footer-basic ">
   <div class="social ">
    <a href="#"><i class="icon ion-social-instagram"></i></a>
    <a href="#"><i class="icon ion-social-snapchat"></i></a>
    <a href="#"><i class="icon ion-social-twitter"></i></a>
    <a href="#"><i class="icon ion-social-facebook"></i></a>
    </div>
            <ul class="list-inline d-flex justify-content-center gap-5 py-0 ">
            <li><Link style={{textDecoration: 'none' , color:"#FFFFFF"}} to="./all"> ALL </Link></li>
    <li><Link style={{textDecoration: 'none' , color:"#FFFFFF"}} to="./breakfast"> BREAKFAST </Link></li>
    <li><Link style={{textDecoration: 'none' , color:"#FFFFFF"}} to="./lunch"> LUNCH </Link></li>
    <li><Link style={{textDecoration: 'none' , color:"#FFFFFF"}} to="./shakes"> SHAKES </Link></li>
            </ul>
            <p class="copyright ">LAVISH RESTO  © 2022</p>

   </footer>
   </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
