import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import React, { lazy, Suspense } from "react";
import GameLayout from "./layouts/GameLayout";
import NotFoundPage from "./pages/NotFoundPage"
import App from "./App";
import Loader from "./components/atoms/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const LockerPage = lazy(() => import("./pages/LockerPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const PassesPage = lazy(() => import("./pages/PassesPage"));
const QuestsPage = lazy(() => import("./pages/QuestsPage"));
const CompetePage = lazy(() => import("./pages/CompetePage"));
const CareerPage = lazy(() => import("./pages/CareerPage"));

const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: NotFoundPage,
});

const gameLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "game-layout",
  component: GameLayout,
});

const createLazyRoute = (path: string, component: React.ComponentType) =>
  createRoute({
    getParentRoute: () => gameLayoutRoute,
    path,
    component: () => (
      <Suspense fallback={<Loader />}>
        {React.createElement(component)}
      </Suspense>
    ),
  });

const routes = {
  home: createLazyRoute("/", HomePage),
  locker: createLazyRoute("/locker", LockerPage),
  shop: createLazyRoute("/shop", ShopPage),
  passes: createLazyRoute("/passes", PassesPage),
  quests: createLazyRoute("/quests", QuestsPage),
  compete: createLazyRoute("/compete", CompetePage),
  career: createLazyRoute("/career", CareerPage),
};

const routeTree = rootRoute.addChildren([
  gameLayoutRoute.addChildren(Object.values(routes)),
]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
