import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/order'>Order Review</Route>
        <Route path='/about'>About</Route>
        <Route path='/*' element={<Error></Error>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
