import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Page } from "components";
import { routes } from "./routes";
import { Layout } from "./layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route}>
              <Page route={route} />
            </Route>
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
