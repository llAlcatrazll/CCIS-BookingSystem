import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import BasicCalendar from './BasicCalendar';

// ControlCalendar,
// CustomizingCalendar,
// AdvancedCalendar,
import './App.css';
import Login from './Components/Login/Login';
import Forgotpass from './Components/Forgotpassword/ForgotPass';
import Landingpage from './Pages/landingpage';
import Dashboard from './Components/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import Navigation from './Components/Navigation/Navigation';
import Searchtab from './Components/Search/Seearchtab';

const router = createBrowserRouter(
    createRoutesFromElements(
        // basic route
        <>
            <Route path='/' element={<Login />}>
                {' '}
            </Route>
            <Route path='/Forgotpass' element={<Forgotpass />}>
                {' '}
            </Route>
            <Route path='/Landingpage' element={<Landingpage />}>
                {' '}
            </Route>
            <Route path='/Dashboard' element={<Dashboard />}></Route>
            <Route path='/Sidebar' element={<Sidebar />}></Route>
            <Route path='/Navigation' element={<Navigation />}></Route>
            <Route path='/Searchtab' element={<Searchtab />}></Route>
        </>
    )
);

function App() {
    return <RouterProvider router={router} />;
    <BasicCalendar></BasicCalendar>;
}
export default App;
