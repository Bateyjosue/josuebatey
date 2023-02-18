import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './Components/navigation/Navigation';
import Profile from './Components/profile/Profile';
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Profile />
        <Navigation/>
      </div>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
