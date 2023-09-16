import { FaPlus, FaSearch, FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div>
        <h1 className="bg-[#c2c2ae] text-center p-3">
          Trained Aesop consultations are available to provide bespoke skin care
          advise.
          <span className="hover:underline cursor-pointer ml-2">
            Book a video consultation
          </span>
        </h1>
      </div>
      <div className="">
        <h1 className="bg-black text-center p-3 text-white hover:underline cursor-pointer ">
          Click and Collect is now available at Hong Kong stores. Enjoy
          complimentary shipping on orders over HK$400
          <span className="mx-2 inline-block">
            <FaPlus></FaPlus>
          </span>
        </h1>
      </div>
      <div className="flex justify-between m-6">
        <div>
          <ul className="flex gap-12">
            <li>Skin Care</li>
            <li>Body & Hand</li>
            <li>Hair</li>
            <li>Fragrance</li>
            <li>Home</li>
            <li>Kits & Travel</li>
            <li>Gifts</li>
            <li>Read</li>
            <li>Stores</li>
            <li>Facial Appointments</li>
            <li>
              <FaSearch></FaSearch>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-12">
            <li>Log in</li>
            <li>Cabinet</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div
        className="w-full h-screen bg-cover bg-center mb-48"
        style={{
          backgroundImage:
            "url(https://www.aesop.com/u1nb1km7t5q7/51ATQtZl3wy8KBBgt4MACM/1588c8b4d7e2291b47796d3d42884f1f/Aesop_Othertopias_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg)",
        }}
      >
        <div className="flex text-white gap-7 p-14">
          <div>
            <h2 className="text-5xl mt-16">Aésop</h2>
          </div>
          <div className="mt-20 ">
            <p className="text-xl mb-8">Doorways to the undiscovered</p>
            <h2 className="text-5xl mb-8">
              Othertopias: a collection <br /> of unorthodox fragrances
            </h2>
            <p className="mb-8 text-xl">
              Step inside six fragrant worlds that transcend our <br />{" "}
              immediate perception—vivid and distinctive.
            </p>
            <button className="border p-5 flex justify-between w-2/3 ">
              <p> Discover the fragrances</p>
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
