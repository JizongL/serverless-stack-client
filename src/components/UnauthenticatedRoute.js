import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import ConditionalWrap from "./ConditionalWrap";

function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }
  console.log(decodeURIComponent(results[2].replace(/\+/g, " ")), "18 test");
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function UnauthenticatedRoute({ children, ...rest }) {
  const { isAuthenticated } = useAppContext();
  const redirect = querystring("redirect");
  return (
    <Route {...rest}>
      <ConditionalWrap shouldWrap={!isAuthenticated} wrap={() => children}>
        <Redirect to={redirect === "" || redirect === null ? "/" : redirect} />
      </ConditionalWrap>
    </Route>
  );
}
