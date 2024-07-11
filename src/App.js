import './App.css';
import NavBar from './components/navbar';
import NavBarMobile from './components/navbarMobile';
import ReviewPage from './components/reviewPage';
import ThanksPage from './components/thanksPage';
import Homepage from './pages/homePage';
import ListProperty from './pages/listProperty';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

function App() {
  return (<Router>
    <div className="App">
      {/* <NavBar/> */}
      <NavBarMobile />
      {/* <Homepage/> */}
      {/* <ListProperty/> */}
      {/* <ThanksPage/> */}
      {/* <ReviewPage /> */}
    </div>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/listProperty' element={<ListProperty />}/>
      <Route path='/thanksPage' element={<ThanksPage />}/>
      <Route path='/reviewPage' element={<ReviewPage />}/>
    </Routes>
  </Router>
  );
}

export default App;
