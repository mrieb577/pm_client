import { MemoryRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../app/components/header';
import MyPlantsPage from '../app/components/view_plants/myplants_page';
import SearchPage from '../app/components/add_plants/search_page';
import LoginPage from '../app/components/account/login_page';

function Landing() {
  return (
    <div>
      <h1>Plant Management</h1>
      <p>This is a software meant to manage the plants you have around your house and all their different needs.</p>
      <p>Copyright and license stuff here.</p>
    </div>
  )
}

function Login(){
  return (
    <div>
      <h1>Log In</h1>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/myplants" element={<MyPlantsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
