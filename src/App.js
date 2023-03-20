
// import './App.css';
import Login from './components/Login';
import { Routes, Route} from "react-router-dom";
import Companies from "./components/Companies"; 
import Panel from './components/Panel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/companies' element={<Companies/>} />
      <Route path='/panel' element={<Panel/>}/>
    </Routes>
  );
}

export default App;
