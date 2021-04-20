import { FC, Suspense } from 'react';
import { Redirect, Switch } from 'react-router';
import routes, { AppRoute } from 'routes';
import RouteWrapper from 'routes/RouteWrapper';
import { Route } from 'react-router-dom';
import LoadingPage from 'pages/Loading';
import BlockLayout from 'layouts/Block';

const App: FC = () => (
  <Suspense 
    fallback={
      <BlockLayout>
        <LoadingPage />
      </BlockLayout>
    }
  >
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
