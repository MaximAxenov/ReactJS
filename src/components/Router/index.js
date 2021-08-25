import React, { useEffect } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import firebase from "firebase";

import Profile from "../Profile";
import Home from "../Home";
import { News } from "../News";
import { PrivateRoute } from "../../hocs/PrivateRoute";
import { PublicRoute } from "../../hocs/PublicRoute";
import { Login } from "../Login";
import { connectProfileToFB } from "../../store/profile/actions";
import { Logout } from "../Logout";
import '../Router/Router.css';

export const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectProfileToFB());
  }, []);

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link className="header" to="/home">HOME</Link>
        </li>
        <li>
          <Link className="header" to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link className="header" to="/news">NEWS</Link>
        </li>
      </ul>

      <Logout />

      <Switch>
        <PrivateRoute
          path="/profile"
          render={(data) => (
            <Profile match={data.match} history={data.history} />
          )}
        />
        <PrivateRoute path="/home/:chatId?">
          <Home />
        </PrivateRoute>
        <PublicRoute path="/news">
          <News />
        </PublicRoute>
        <PrivateRoute path="/nochat">
          <div> No such chat</div>
          <Link to="/home">HOME</Link>
        </PrivateRoute>
        <Route path="/" exact>
          <h2>WELCOME</h2>
        </Route>
        <PublicRoute path="/login" exact>
          <Login />
        </PublicRoute>
        <PublicRoute path="/signup" exact>
          <Login isSignUp />
        </PublicRoute>
        <Route path="*">
          <h2>404</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
