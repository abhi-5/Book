import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';
import Movie from './components/movie';
import LibrarySystem from './components/librarySystem';
import MobileShop from './components/mobileShop';
// import Increment from './components/increment';
// import CountArray from './components/countArray';
// import ScoreBoard2 from './components/scoreBoard2';
// import Codes from './components/codes';
import Football from './components/football';
import Product from './components/product';
import QuizGame from './components/quizGame';
import Store from './components/store';
import LibraryApp from './components/libraryApp';
import MobileApp from './components/mobileApp';
import LoginForm from './components/loginForm';
import LoginApp from './components/loginApp';
import Views from './components/views';
import EmpViews from './components/empViews';
import StudentsApp from './components/studentsApp';
import RctSet1 from './components/rctSet1';
import RctSet2 from './components/rctSet2';
import RctSet3 from './components/rctSet3';
import RctSet4 from './components/rctSet4';
import RctSet5 from './components/rctSet5';
import RctSet6 from './components/rctSet6';
import RctSet7 from './components/rctSet7';
import LoginApp1 from './components/loginApp1';
import LoginCustomer from './components/loginCustomer';
import LoginInput from './components/loginInput';
import LoginEmp from './components/loginEmp';
import ProductForm from './components/productForm';

import NavBar1 from './components/navbar1';
import LoginCountry from './components/loginCountry';
import ProductStore from './React/productStore';
import Game from './components/Game';
import RctSet9A from './components/rctSet9A';
import RctSet9B from './components/rctSet9B';
import RctSet10A from './components/rctSet10A';
import RctSet10C from './components/rctSet10C';
import RctSet11A from './components/rctSet11A';
import RctSet12A from './components/rctSet12A';
import RctSet12A1 from './components/rctSet12A1';

import CbTask1 from './checkbox/cbTask1';
import CBProduct from './checkbox/cbProduct';
import RadioTask from './radio/radioTask';
import RadioProd from './radio/radioProd';
import MatchTeam from './checkbox/match';
import StoreProd from './checkbox/storeProd';
import RctSet11D from './components/rctSet11D';
import RctSet11D2 from './components/rctSet11D2';
import RctSet11D3 from './components/rctSet11D3';

ReactDOM.render(
    <BrowserRouter>
       <RctSet12A />
    </BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
