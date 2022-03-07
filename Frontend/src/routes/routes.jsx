import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Private.routes";
import UserVaccine from "../Pages/UserVaccine";
import AdminLogin from "../Pages/AdminLogin";
import AdminDash from "../Pages/AdminDash";
import ManagerLogin from "../Pages/ManagerLogin";
import UrbanCenter from "../Pages/UrbanCenter/UrbanCenter";
import Navigation from './Navigation'
// dark:bg-slate-900 bg-white min-h-screen dark:text-white'
const Routers = () => {
  const role = JSON.stringify(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      {role == "admin" || role == "manager" ? <Navigation /> : null}
        <div className={role === "admin" || role === "manager"  ? 'pl-[18em]  pr-[1.5em]' : ''} >
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/managerLogin" element={<ManagerLogin />} />
          <Route path="/" element={<UserVaccine />} />
          <Route
            path="/AdminDash"
            element={
              <PrivateRoute user="admin">
                <AdminDash />
              </PrivateRoute>
            }
          />
          <Route
            path="/urbanCenter"
            element={
              <PrivateRoute user="manager">
                <UrbanCenter />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routers;
