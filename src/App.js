import logo from './logo.svg';
import './App.css';
import AddFeedback from './components/AddFeedback';
import ViewFeedback from './components/ViewFeedback';
import AddQuery from './components/AddQuery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardUser from './components/DashboardUser';
import ViewQuery from './components/ViewQuery';
import DashboardOrg from './components/DashboardOrg';
import UserSignUp from './components/UserSignUp';
import MainDashboard from './components/MainDashboard';
import UserLogin from './components/UserLogin';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<MainDashboard/>}/>
      <Route path='/DashboardOrg' element={<DashboardOrg/>}/>
      <Route path='/AddFeedback' element={<AddFeedback/>}/>
      <Route path='/ViewFeedback' element={<ViewFeedback/>}/>
      <Route path='/AddQuery' element={<AddQuery/>}/>
      <Route path='/ViewQuery' element={<ViewQuery/>}/>
      <Route path='/UserLogin' element={<UserLogin/>}/>
      <Route path='/UserSignUp' element={<UserSignUp/>}/>
      <Route path='/DashboardUser' element={<DashboardUser/>}/>
     </Routes>
     </BrowserRouter> 
     <UserSignUp/>
    </div>
  );
}

export default App;
