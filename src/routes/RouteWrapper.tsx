import { FC } from "react";
import { Route, RouteProps } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AppRoute } from "routes";

const APP_TITLE: string | undefined = process.env.REACT_APP_TITLE;

const RouteWrapper: FC<AppRoute> = (props: AppRoute) => {
  const { component: Component, layout: Layout, title, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props: RouteProps) => (
        <Layout>
          {title && (
            <Helmet>
              <title>
                {APP_TITLE} - {title}
              </title>
            </Helmet>
          )}
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
