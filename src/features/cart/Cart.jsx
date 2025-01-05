import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";

function Cart() {
  const cartReducer = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cart = cartReducer.cart;
  const username = useSelector((state) => state.user.username);

  function onHandleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      {!cart.length ? (
        <p className="mt-7 text-xl font-semibold">Your cart is still empty. Start adding some pizzas :)</p>
      ) : (
        <>
          <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

          <ul className="mt-3 divide-y divide-stone-200 border-b">
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>

          <div className="mt-6 space-x-2">
            <Button to="/order/new" type="primary">
              Order pizzas
            </Button>

            <Button type="secondary" onClick={onHandleClearCart}>
              Clear cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
