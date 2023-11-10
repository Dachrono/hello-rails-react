// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greetings from './components/Greetings'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greetings />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App/>,
  </Provider>,  
  document.getElementById('root'),
);