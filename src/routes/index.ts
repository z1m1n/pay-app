import { FC, lazy, LazyExoticComponent } from "react";

export interface AppRoute {
  path: string;
  component: LazyExoticComponent<FC<any>>;
  exact?: boolean;
  title: string;
  layout: FC<any>;
};

const BlockLayout = lazy(() => import('layouts/Block'));
const MainLayout = lazy(() => import('layouts/Main'));

const routes: AppRoute[] = [
  {
    path: '/checkout',
    component: lazy(() => import('pages/Checkout')),
    title: 'Checkout',
    layout: BlockLayout
  },
  {
    path: '/timeline',
    component: lazy(() => import('pages/Timeline')),
    title: 'Timeline',
    layout: MainLayout
  },
  {
    path: '/cards',
    component: lazy(() => import('pages/Cards')),
    title: 'Saved Cards',
    layout: MainLayout
  }
];

export default routes;