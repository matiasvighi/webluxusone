import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MenuA from './layout/MenuA';
import LuxusRoutes from './LuxusRoutes';
import UserInfoContext from './context/UserInfoContext';
import UserInfoProvider from './context/UserInfoProvider';


function App() {
  return (
    <UserInfoProvider>
      <BrowserRouter>
        <MenuA/>
        <LuxusRoutes/>
      </BrowserRouter>
    </UserInfoProvider>
  );
}

export default App;
