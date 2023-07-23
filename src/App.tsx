
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';


export default function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? <> <NavBar /> <HomePage /> </>: (
        <>
          <NavBar />
            <Outlet />
        </>
      )}
    </>
  );
}
