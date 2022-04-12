import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MenuA from './layout/MenuA';
import LuxusRoutes from './LuxusRoutes';

function App() {
  return (
    <BrowserRouter>
      <MenuA/>
      <LuxusRoutes/>
    </BrowserRouter>
  );
}

export default App;
