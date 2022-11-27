import { createBrowserRouter } from "react-router-dom";

import NotFound from "pages/Error/NotFound";

import LandingPage from "pages";
import StoreItems from "components/StoreItems/StoreItems";
import StoreItemsById from "components/StoreItemsById/StoreItemsById";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <StoreItems />,
            },
            {
                path: "/:productName/:productId",
                element: <StoreItemsById />,
            },
        ],
    },
]);

export default router;
