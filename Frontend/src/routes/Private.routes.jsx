import { Navigate, Route, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ children, user }) => {

  let location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies();
  
  console.log(cookies);
  return cookies.role == user ? (
      children
    ) : (
      <Navigate to={`/${user}Login`} state={{ from: location }} />
    );
  };

export default PrivateRoute;