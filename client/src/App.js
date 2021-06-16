import './App.css';
import Navbar from './componens/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import {useRoutes} from './routes';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import ModalWindow from './componens/modalWindow/ModalWindow';

function App() {
  const {login, logout, token, userId, isReady} = useAuth();
  const isLogin = !!token;
  const routes = useRoutes(isLogin);


  return (
    <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin}}>
      <div className="app">
        <BrowserRouter>
          <ModalWindow window={window} />
          <Navbar/>
          <div className="bgc">
            {routes}
          </div>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
