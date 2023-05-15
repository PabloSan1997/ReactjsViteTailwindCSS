import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { MyOrders } from "../MyOrders";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { Signin } from "../Signin";
import { NotFound } from "../NotFound";
import { Navbar } from "../../NavBar";

const Approutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/signin", element: <Signin /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes
}

function App() {

  return (
    <BrowserRouter>
      <Approutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
