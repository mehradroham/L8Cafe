import Image from "next/image";
import Styles from "./../layout/layout.module.css";
export default function MenuItemBox({ onAddToCart, onFocous, ...item }) {
  const { image, description, name, basePrice } = item;
  return (
    <>
      <div
        onClick={onFocous}
        className="block mx-auto min-h-[450px] m-[10px] max-h-[450px] max-w-[450px]"
      >
        <div className=" bg-gray-300 p-4 m-[10px] min-h-[450px] max-h-[450px] max-w-[450px] rounded-lg hover:bg-white  hover:shadow-2xl hover:shadow-black/50 transition-all hover:cursor-pointer text-center">
          <div className="text-center">
            <Image
              src={image}
              className=" text-center block mx-auto min-w-[250px] max-w-[250px] min-h-[200px] max-h-[200px] lg:min-w-[235px] lg:min-h-[200px] lg:max-h-[250px] lg:h-[250px] "
              alt="pizza"
              width={300}
              height={250}
            />
          </div>
          <h4 className=" font-semibold  text-xl my-3">{name}</h4>
          <p className="text-gray-500  text-sm">{description}</p>
          <button
            id={Styles.btnbuying2}
            onClick={onAddToCart}
            className="bg-primary mt-4 text-white  rounded-full  px-6 py-2"
          >
            {basePrice}
          </button>
        </div>
      </div>
    </>
  );
}
