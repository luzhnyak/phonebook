import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../redux/selectors";
// import { ReactNode } from "react";

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */
type Props = {
  component: any;
  redirectTo: string;
};

export const RestrictedRoute: React.FC<Props> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedIn } = useSelector(getUser);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
