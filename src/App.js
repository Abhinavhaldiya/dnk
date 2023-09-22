// import { Navigation } from '@mui/icons-material';
import './App.css';
import HomePage from './customers/Pages/HomePage/HomePage';
import Navigation from './customers/components/navigation/Navigation.jsx';
// import Footer from './customers/components/Footer/Footer';
// import LoginPage from './customers/components/Login/LoginPage';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LoginPage from './customers/components/Login/LoginPage';
import SignIn from "./customers/components/SignIn/SignIn"

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" Component={HomePage}/>
          <Route  path="/login" Component={LoginPage}/>
          <Route  path="/SignIn" Component={SignIn}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
