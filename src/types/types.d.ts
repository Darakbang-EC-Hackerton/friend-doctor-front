function createBrowserRouter(
  routes: RouteObject[],
  opts?: {
    basename?: string;
    future?: FutureConfig;
    hydrationData?: HydrationState;
    dataStrategy?: DataStrategyFunction;
    patchRoutesOnNavigation?: PatchRoutesOnNavigationFunction;
    window?: Window;
  }
): RemixRouter;
