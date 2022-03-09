import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Private.routes";
import UserVaccine from "../Pages/UserVaccine";
import AdminLogin from "../Pages/AdminLogin";
import AdminDash from "../Pages/AdminDash";
import ManagerLogin from "../Pages/ManagerLogin";
import Manager from '../Pages/AdminDash/manager'
import UrbanCenter from "../Pages/UrbanCenter/UrbanCenter";
import Vaccination from '../Pages/AdminDash/vaccination'
import Navigation from './Navigation'
const Routers = () => {
  const role = localStorage.getItem("user");

  return (
    <BrowserRouter>
      {role =="admin" || role == "manager" ? <Navigation /> : null}
        <div className={role === "admin" || role === "manager"  ? 'pl-[18em]  pr-[1.5em]' : ''} >
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/managerLogin" element={<ManagerLogin />} />
          <Route path="/" element={<UserVaccine />} />
          {
            role == "admin" ? (
              <>
                <Route
                  path="/AdminDash"
                  element={
                    <PrivateRoute user="admin">
                      <AdminDash />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/Manager"
                  element={
                    <PrivateRoute user="admin">
                      <Manager />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/Vaccination"
                  element={
                    <PrivateRoute user="admin">
                      <Vaccination />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/urbanCenter"
                  element={
                    <PrivateRoute user="admin">
                      <UrbanCenter />
                    </PrivateRoute>
                  }
                />
              </>
            ): role == "manager" ? (
              <>
                <Route
                  path="/VaccinationListe"
                  element={
                    <PrivateRoute user="manager">
                      <Vaccination />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/urbanCenterListe"
                  element={
                    <PrivateRoute user="manager">
                      <UrbanCenter />
                    </PrivateRoute>
                  }
                />
              </>
            ): null
          }
          

        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routers;
