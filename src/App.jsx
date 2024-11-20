import {data} from './data/module-data';
import RootLayout from './layouts/RootLayout';
import { Routes, Route, Outlet} from 'react-router-dom';
import  Lab1Page  from './pages/Lab1Page';
import Lab2Page from './pages/Lab2Page';
import Lab3Page from './pages/Lab3Page';
import Lab4Page from './pages/Lab4Page';
import EditForm from './components/EditForm';
import Home from './pages/Home';
import CreateForm from './components/CreateForm';
import  {NotFound}  from './pages/NotFound';
function App() {
  
  return (
    <>
      <RootLayout >
          <Routes>
          <Route path="/lab1" element={<Lab1Page names= {data}/>}/>
          <Route path="/lab2/:id" element={<Lab2Page names={data} />}/>
          <Route path="/Home" element={<Home/>}></Route> 
          <Route path="/lab3" element={<Lab3Page />}/>
          <Route path="/lab4" element={<Lab4Page />}/>
          <Route path="/lab4/edit" element={<EditForm />}/>
          <Route path="/lab4/add" element={<CreateForm />}/>
          <Route path='/*' element={<NotFound/>}/>
          </Routes>
      
      </RootLayout>
    </>
  )
}

export default App
