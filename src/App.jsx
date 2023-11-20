import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import './App.css'
import Login from "./Components/Login/Login";
import Forgotpass from "./Components/Forgotpassword/ForgotPass"
import Createaccount from "./Components/createaccount";
import Landingpage from "./Pages/landingpage";
import Dashboard from "./Components/Dashboard/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    // basic route
    <>
      <Route path="/" element={<Login />}> </Route>
      <Route path="/Forgotpass" element={<Forgotpass />}>  </Route>
      <Route path="/Createaccount" element={<Createaccount />}>  </Route>
      <Route path="/Landingpage" element={<Landingpage />}>  </Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
    </>
  )
  );

function App() {
  return <RouterProvider router={router} />;
}
export default App
