import reducers from './reducers';
import middleware from './middleware';
import Topbar from './layout/global/Topbar';
import Sidebar from './layout/global/Sidebar';
import './App.css';


function App() {
  return (
     <div className="app">
     <Sidebar/>
      
      <Topbar/>
    </div>
  );
}

export default App;
