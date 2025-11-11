import { Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import {Toaster} from "sonner"
import Home from './pages/Home.jsx';

function App() {

  return (
    <div>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
