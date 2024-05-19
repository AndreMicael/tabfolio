import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TabContent from './components/Tabs/TabContent';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/> 
      <TabContent/>
        
     
    </div>
  );
}

export default App;
