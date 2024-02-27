import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-black tracking-tight">
          Bite<span className="text-orange-500">Buddy</span>
        </Link>
        <Link
          to="/login"
          className="text-xl font-bold text-black tracking-tight hidden md:block"
        >
          Login
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
