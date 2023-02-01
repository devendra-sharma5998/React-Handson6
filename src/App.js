import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Edit from './Component/Edit';
import Table from './Component/Table';
import DataContext from './Component/DataContext';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Addstudent from './Component/Addstudent';

function App() {
  const [data, setData] = useState([{ name: 'Jhony', id: 1,age:'21',course:'MERN',batch:'October' },{ name: 'shub', id: 1,age:'22',course:'Java',batch:'November' }]);
  return (
    <>
<Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/editStudent' element={
       <DataContext.Provider value={{entries : data, updateFunction : setData}}>
    <Edit/>
    </DataContext.Provider>
    }>
    </Route>
      <Route path='/table' element={
         <DataContext.Provider value={{entries : data, updateFunction : setData}}>
            <Table />
         </DataContext.Provider>
      }/>
     
    <Route path='/addStudent' element={
        <DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <Addstudent/>
        </DataContext.Provider>
      }/>
    </Routes>
    </>
  );
}

export default App;