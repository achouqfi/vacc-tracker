import { Navigate, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, user }) => {

  let location = useLocation();
  const role = JSON.parse(JSON.stringify(localStorage.getItem("user")));
  
  return role == user ? (
    children
  ) : (
    <Navigate to={`/${user}Login`} state={{ from: location }} />
  );
};

export default PrivateRoute;