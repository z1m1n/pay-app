import { FC, Suspense } from 'react';
import { Redirect, Switch } from 'react-router';
import routes, { AppRoute } from 'routes';
import RouteWrapper from 'routes/RouteWrapper';
import { Route } from 'react-router-dom';

const App: FC = () => (
  <Suspense fallback={<>Loading...</>}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/checkout" />} 
      />
      {routes.map((route: AppRoute, index: number) => {
        const { path, component, title, layout } = route;

        return (
          <RouteWrapper 
            key={`app-route-${index}`}
            path={path}
            component={component}
            title={title}
            layout={layout}
          />
        );
      })}
    </Switch>
  </Suspense>
);

export default App;
