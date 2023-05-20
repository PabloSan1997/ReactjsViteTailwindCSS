import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { MyOrders } from "../MyOrders";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { Signin } from "../Signin";
import { NotFound } from "../NotFound";
import { Navbar } from "../../Components/NavBar";
import { Provedor } from "../../Context";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

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
    <Provedor>
      <BrowserRouter>
        <Approutes />
        <Navbar />
        <CheckoutSideMenu/>
      </BrowserRouter>
    </Provedor>
  )
}

export default App
