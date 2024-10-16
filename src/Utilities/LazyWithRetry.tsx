import { lazy, LazyExoticComponent } from "react";

type TypeComponentImport = () => Promise<{ default: React.ComponentType<any> }>;

export const lazyWithRetry = (
  componentImport: TypeComponentImport
): LazyExoticComponent<any> =>
  lazy(async () => {
    // Get presistence page refresh state.
    const pageHasAlreadyBeenForceRefreshed: boolean = JSON.parse(
      window.localStorage.getItem("FORCE_REFRESHED") || "false"
    );

    try {
      const component = await componentImport();

      // Update presistence page refresh state.
      if (pageHasAlreadyBeenForceRefreshed) {
        window.localStorage.setItem("FORCE_REFRESHED", "false");
      }

      // Client on the latest version of the app.
      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        // Client not on the latest version of the app, force refresh.
        window.localStorage.setItem("FORCE_REFRESHED", "true");
        window.location.reload();
      }

      // Throw error
      throw error;
    }
  });
