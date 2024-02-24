
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Create from './Create'
import UpdateUser from './UpdateUser';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<UpdateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
