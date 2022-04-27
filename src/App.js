import React from 'react';
import SideNav from './Component/Sidenav/SideNav';
import Customer from './Component/MainComp/Customer/Customer';
import Package from './Component/MainComp/Package.js/Package';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideNav/>
        <Routes>
          <Route path="/customer" exact element={<Customer/>} />
          <Route path="/package" exact element={<Package/>} />
        </Routes>
    </div>
  );
}

export default App;
