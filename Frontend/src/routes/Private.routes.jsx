import { Navigate, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, user }) => {

  let location = useLocation();
  const role = localStorage.getItem("user");
  
  console.log(role);
  return role == user ? (
    children
  ) : (
    <Navigate to={`/${user}Login`} state={{ from: location }} />
  );
};

export default PrivateRoute;