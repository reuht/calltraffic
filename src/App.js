// import './App.css';
import Login from './components/Login';
import { Routes, Route} from "react-router-dom";
import Companies from "./components/Companies";
import Company from "./components/Company"; 
import Panel from './components/Panel';
import Form from './components/Form';
import Download from './components/Downloads';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/companies" element={<Companies/>} />
      <Route path="/panel" element={<Panel/>}/>

      {/* Anidacion de rutas en el panel */}
      <Route path="/panel" element={<Panel/>}>
        <Route path="/panel/records" element={<Form/>}/>
        <Route path="/panel/dashboard" element={<Dashboard/>}/>
        <Route path="/panel/companies" element={<Company/>}/>
        <Route path="/panel/download" element={<Download/>}/>
      </Route>
      {/* Anidacion de rutas en el panel */}

    </Routes>
  );
}

export default App;
