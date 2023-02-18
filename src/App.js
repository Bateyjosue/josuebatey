import { Outlet } from 'react-router-dom';
import './App.css';
import Profile from './Components/profile/Profile';
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Profile />
      </div>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
