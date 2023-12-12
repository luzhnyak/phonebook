import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../redux/selectors";
// import { ReactNode } from "react";

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

type Props = {
  component: any;
  redirectTo: string;
};

export const PrivateRoute: React.FC<Props> = ({
  component: Component,
  redirectTo = "/login",
}) => {
  const { isLoggedIn, isRefreshing } = useSelector(getUser);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
