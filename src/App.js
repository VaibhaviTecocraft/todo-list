import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddForm from './Components/AddForm';
import EditUserProfile from './Components/EditUserProfile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AddForm />} />
          <Route path="/EditUserProfile" element={<EditUserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
