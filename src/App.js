import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MenuA from './layout/MenuA';
import LuxusRoutes from './LuxusRoutes';
import UserInfoContext from './context/UserInfoContext';


function App() {
  return (

    <UserInfoContext>
    <BrowserRouter>
      <MenuA/>
      <LuxusRoutes/>
    </BrowserRouter>

    </UserInfoContext>
  );
}

export default App;
