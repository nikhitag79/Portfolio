import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {/* More routes can be added here */}
      {/* <Route index element={<Home />} /> */}
  </Routes>
  );
}

export default App;
