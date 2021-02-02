import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../Components/HomePage";
import ListingPage from "../Components/ListingPage";
import Header from "../Components/Header";
import NotFoundPage from "../Components/NotFoundPage";

const AppRouter = (props) => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/listing" component={ListingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
