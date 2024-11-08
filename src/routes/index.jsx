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
    // You can also add other routes outside the layout if needed
  ]);
}

const App = Loadable(lazy(() => import("../App.jsx")));
const Login = Loadable(lazy(() => import("../components/login/login")));
const Register = Loadable(lazy(() => import("../components/login/register")));
const SubCat = Loadable(lazy(() => import("../components/SubCat.jsx")))