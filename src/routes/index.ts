import { FC, lazy, LazyExoticComponent } from "react";

export interface AppRoute {
  path: string;
  component: LazyExoticComponent<FC<any>>;
  exact?: boolean;
  title: string;
  layout: FC<any>;
};

const BlockLayout = lazy(() => import("layouts/Block"));

const routes: AppRoute[] = [
  {
    path: '/checkout',
    component: lazy(() => import("pages/Checkout")),
    title: 'Checkout',
    layout: BlockLayout
  }
];

export default routes;