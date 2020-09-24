import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import ConditionalWrap from "./ConditionalWrap";

export default function AuthenticatedRoute({ children, ...rest }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();
  return (
    <Route {...rest}>
      <ConditionalWrap shouldWrap={isAuthenticated} wrap={() => children}>
        <Redirect to={`/login?redirect=${pathname}${search}`} />
      </ConditionalWrap>
    </Route>
  );
}
