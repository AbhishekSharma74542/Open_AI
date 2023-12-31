// pages
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Products from "./pages/Products";

// other
import { FC } from "react";

// interface
interface Route {
  key: string,
  title: string,
  path: string,
  enabled: boolean,
  component: FC<{}>
}

export const routes: Array<Route> = [
  {
    key: 'home-route',
    title: 'Home',
    path: '/dashboard',
    enabled: true,
    component: Dashboard
  },
  {
    key: 'about-route',
    title: 'About',
    path: '/about',
    enabled: true,
    component: About
  },
  {
    key: 'products-route',
    title: 'Products',
    path: '/products',
    enabled: true,
    component: Products
  }
]
