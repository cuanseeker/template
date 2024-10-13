import { lazy } from "react";

const lazyWithRetry = (componentImport: any): any =>
  lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.localStorage.getItem("FORCE_REFRESHED") || "false"
    );

    try {
      const component = await componentImport();

      window.localStorage.setItem("FORCE_REFRESHED", "false");

      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        // Client not on the latest version of the application

        // clear cache to update app version
        caches.keys().then((names) => {
          names.forEach((name) => {
            caches.delete(name);
          });
        });

        window.localStorage.setItem("FORCE_REFRESHED", "true");

        // Forcing to refresh
        return window.location.reload();
      }

      // Client already using the latest version of the application and file does not exist
      throw error;
    }
  });

export default lazyWithRetry;
