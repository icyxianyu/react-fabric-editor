import { RouteObject ,Navigate} from "react-router-dom";
import Layout from "@/Layout"

const router:RouteObject[] = [{
    path: '*',
    element: <Navigate to="/"/>,
},{
    path: '/',
    element:<Layout />,
}]

export default router;