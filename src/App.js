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
import OrganizationLogin from './components/OrganizationLogin';
import DashboardAdmin from './components/DashboardAdmin';
import AdminLogin from './components/AdminLogin';
import AddOrg from './components/AddOrg';
import ViewUsers from './components/ViewUsers';
import ViewEmployees from './components/ViewEmployees';
import ReplyQuery from './components/ReplyQuery';
import ViewReply from './components/ViewReply';
import ViewUsersOrg from './components/ViewUsersOrg';

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
      <Route path='/OrganizationLogin' element={<OrganizationLogin/>}/>
      <Route path='/DashboardAdmin' element={<DashboardAdmin/>}/>
      <Route path='/AdminLogin' element={<AdminLogin/>}/>
      <Route path='/AddOrg' element={<AddOrg/>}/>
      <Route path='/ViewUsers' element={<ViewUsers/>}/>
      <Route path='/ViewEmployees' element={<ViewEmployees/>}/>
      <Route path='ReplyQuery' element={<ReplyQuery/>}/>
      <Route path='ViewReply' element={<ViewReply/>}/>
      <Route path='ViewUsersOrg' element={<ViewUsersOrg/>}/>
     </Routes>
     </BrowserRouter> 
     <UserSignUp/>
    </div>
  );
}

export default App;
