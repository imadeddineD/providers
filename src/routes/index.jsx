import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import LoadingScreen from "../components/loading";
import Layout from "../layout";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",  // This will wrap all routes with Navbar and Footer
      element: <Layout />,  // Use Layout as the wrapper for these routes
      children: [
        { path: "/", element: <App /> },
        // { path: "contact", element: <Contact /> },
        // { path: "about", element: <About /> },
        // { path: "faq", element: <Question /> },
        // { path: "courses", element: <Students /> },
        { path: ":id", element: <SubCat /> },
      ]
    },
    {
      path: "/auth/register",  
      element: <Register />,  
    },
    {
      path: "/auth/login",  
      element: <Login />,  
    },
    {
      path: "/dashboard/admin",  
      element: <Admin />,  
    },
    {
      path: "/dashboard/admin/categories",  
      element: <HomeAdmin />,  
    },
    {
      path: "/dashboard/admin/categories/:id",  
      element: <CatAdd />,  
    },
    {
      path: "/dashboard/admin/subCategories",  
      element: <SubCatAdmin />,  
    },
    {
      path: "/dashboard/admin/subCategories/:id",  
      element: <SubCatAdd />,  
    },
    {
      path: "/dashboard/provider",  
      element: <Provider />,  
    },
    {
      path: "/dashboard/client",  
      element: <Client />,  
    },
    {
      path: "/pricing",  
      element: <Pricing />,  
    },
    // You can also add other routes outside the layout if needed
  ]);
}

const App = Loadable(lazy(() => import("../App.jsx")));
const Login = Loadable(lazy(() => import("../components/login/login")));
const Provider = Loadable(lazy(() => import("../components/Provider/Provider")));
const Client = Loadable(lazy(() => import("../components/Client/Client")));
const Admin = Loadable(lazy(() => import("../components/Admin/Admin")));
const HomeAdmin = Loadable(lazy(() => import("../components/Admin/HomeAdmin")));
const CatAdd = Loadable(lazy(() => import("../components/Admin/components/Categories/AddCat/AddCat")));
const SubCatAdd = Loadable(lazy(() => import("../components/Admin/components/SubCategories/AddCat/AddCat")));
const SubCatAdmin =Loadable(lazy(() => import("../components/Admin/SubCategories")));
const Register = Loadable(lazy(() => import("../components/login/register")));
const SubCat = Loadable(lazy(() => import("../components/SubCat.jsx")))
const Pricing = Loadable(lazy(() => import("../components/Price")))