import type { Router } from "@remix-run/router";
import type { unstable_PatchRoutesOnNavigationFunction } from "react-router";
import type { AssetsManifest, FutureConfig } from "./entry";
import type { RouteModules } from "./routeModules";
declare global {
    interface Navigator {
        connection?: {
            saveData: boolean;
        };
    }
}
export declare function isFogOfWarEnabled(future: FutureConfig, isSpaMode: boolean): boolean;
export declare function getPartialManifest(manifest: AssetsManifest, router: Router): {
    routes: {};
    entry: {
        imports: string[];
        module: string;
    };
    url: string;
    version: string;
    hmr?: {
        timestamp?: number | undefined;
        runtime: string;
    } | undefined;
};
export declare function getPatchRoutesOnNavigationFunction(manifest: AssetsManifest, routeModules: RouteModules, future: FutureConfig, isSpaMode: boolean, basename: string | undefined): unstable_PatchRoutesOnNavigationFunction | undefined;
export declare function useFogOFWarDiscovery(router: Router, manifest: AssetsManifest, routeModules: RouteModules, future: FutureConfig, isSpaMode: boolean): void;
export declare function fetchAndApplyManifestPatches(paths: string[], manifest: AssetsManifest, routeModules: RouteModules, future: FutureConfig, isSpaMode: boolean, basename: string | undefined, patchRoutes: Router["patchRoutes"]): Promise<void>;
