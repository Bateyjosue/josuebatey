import './App.css';
import photo from './Assets/Profile.jpg'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="sidebar-profiles">
          <div className="sidebar-profiles__image">
            <img src={photo} alt="" />
          </div>
          <div className="sidebar-profiles__names">Josue Batey</div>
        </div>
      </div>
    </div>
  );
}

export default App;
