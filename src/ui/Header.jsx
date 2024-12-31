import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 px-4 py-3 uppercase border-b border-s-stone-200 sm:px-6">
      <Link to="/" className="tracking-widest">
        Pizaas Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
