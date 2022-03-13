import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Private.routes";
import UserVaccine from "../Pages/UserVaccine";
import AdminLogin from "../Pages/AdminLogin";
import AdminDash from "../Pages/AdminDash";
import ManagerLogin from "../Pages/ManagerLogin";
import Manager from '../Pages/AdminDash/manager'
import UrbanCenter from "../Pages/UrbanCenter/UrbanCenter";
import Vaccination from '../Pages/AdminDash/vaccination'
import VaccinationList from '../Pages/AdminDash/vaccinationList'
import SideEffect from '../Pages/SideEffect'
import Navigation from './Navigation'
import { useCookies } from 'react-cookie';

const Routers = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const role = cookies.role
  
  return (
    <BrowserRouter>
      {role === "admin" || role === "manager" ? <Navigation /> : null}
        <div className={role === "admin" || role === "manager"  ? 'pl-[18em]  pr-[1.5em]' : ''} >
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/managerLogin" element={<ManagerLogin />} />
          <Route path="/" element={<UserVaccine />} />
          {/* {
            role === "admin" ? (
              <> */}
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
                  path="/vaccinationList"
                  element={
                    <PrivateRoute user="admin">
                      <VaccinationList />
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
              {/* </>
            ): role === "manager" ? (
              <> */}
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
                <Route
                  path="/sideEffect"
                  element={
                    <PrivateRoute user="manager">
                      <SideEffect />
                    </PrivateRoute>
                  }
                />
              {/* </>
            ): null
          }
           */}

        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routers;