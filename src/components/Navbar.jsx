import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex items-center justify-center md:justify-between md:px-16 py-5 md:py-3 border-b-2 border-red-100 fixed w-full bg-white z-50">
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src={logo} alt="food" className="w-8 md:w-12" />
          <span className="text-xl md:text-2xl mt-2 md:mt-3 ml-2 text-orange-500">
            QuickBite
          </span>
        </div>
        <div className="flex items-center justify-around">
          <div className="px-4 relative">
            <PersonIcon />
            <span className="px-0 md:px-1 text-md text-gray-500">Lamia</span>
            <KeyboardArrowDownIcon className="text-orange-500" onClick={toggleModal}/>
            {openModal && (
              <div className="w-full text-center p-2 text-sm absolute left-0 top-6  flex flex-col bg-white shadow-lg shadow-gray-400 rounded">
                <a href="#" className="text-sm text-gray-500 py-1">
                  Edit Profile
                </a>
                <a href="#" className="text-sm text-gray-500 py-1">Your Offers</a>
                <a href="#" className="text-sm text-gray-500 py-1">Your Orders</a>
                <button className='w-auto mt-2 bg-orange-500 text-white px-1 md:px-2 py-1 md:py-1 text-xs md:text-sm rounded-md
                    hover:bg-orange-700 transition delay-150'>Logout</button>
              </div>
            )}
            
          </div>
          <div className="px-4 relative">
            <LanguageIcon />
            <span className="px-0 md:px-1">EN</span>
            <KeyboardArrowDownIcon
              className="text-orange-500 hover:cursor-pointer"
              onClick={toggleMenu}
            />
            {isOpen && (
              <div className="px-6 py-2 text-sm absolute left-5 top-6  flex flex-col bg-white shadow-lg shadow-gray-400 rounded">
                <a href="#" className="border-b border-gray-400">
                  EN
                </a>
                <a href="#">BN</a>
              </div>
            )}
          </div>
          <div className="px-0 md:px-1 text-orange-500">
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
