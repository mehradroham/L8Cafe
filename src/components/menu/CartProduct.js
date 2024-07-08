import { cartProductPrice } from "./../AppContext";
import Trash from "./../Icons/trash";
import Image from "next/image";

export default function CartProduct({ product, onRemove }) {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      <div className="w-24">
        <Image width={240} height={240} src={product.image} alt={""} />
      </div>
      <div className="grow">
        <h3 className="font-semibold">{product.name}</h3>
        
      </div>
      <div className="text-lg font-semibold">${cartProductPrice(product)}</div>
      {!!onRemove && (
        <div className="ml-2">
          <button type="button" onClick={() => onRemove(index)} className="p-2">
            <Trash />
          </button>
        </div>
      )}
    </div>
  );
}
