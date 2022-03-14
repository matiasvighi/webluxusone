import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './layout/Menu';
import LuxusRoutes from './LuxusRoutes';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <LuxusRoutes/>
    </BrowserRouter>
  );
}

export default App;
