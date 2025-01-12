import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./ui/Home";
import Menu, { menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, { newOrderAction } from "./features/order/CreateOrder";
import Order, { orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { updateOrderAction } from "./features/order/UpdateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      // Using render as you fetch stretagy
      { path: "/menu", element: <Menu />, loader: menuLoader, errorElement: <Error /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder />, action: newOrderAction },
      { path: "/order/:orderId", element: <Order />, loader: orderLoader, errorElement: <Error />, action: updateOrderAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
