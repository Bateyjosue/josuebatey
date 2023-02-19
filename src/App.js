import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './Components/navigation/Navigation';
import Profile from './Components/profile/Profile';
import SocialHandles from './Components/socialHandles/SocialHandles'
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Profile />
        <Navigation/>
        <SocialHandles />
        <footer>&copy;Josue-batey, &copy;2023. All right reserved </footer>
      </div>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
