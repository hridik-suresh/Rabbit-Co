import { Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<UserLayout />} />
      </Routes>
    </div>
  );
}

export default App
