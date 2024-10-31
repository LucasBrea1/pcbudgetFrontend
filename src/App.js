import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carrito from './pages/Carrito';
import Home from './pages/Home'; 
import Header from './components/header'; 
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
