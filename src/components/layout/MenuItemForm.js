import Plus from "../Icons/plus";
import Trash from "../Icons/trash";
import MenuItemPriceProps from "./MenuItemPriceProps";
import { useEffect, useState } from "react";
import EditableImage from "./EditableImage";
import Styles from "./layout.module.css";

export default function MenuItemForm({ onSubmit, menuItem }) {
  const [image, setImage] = useState(menuItem?.image || "");
  const [name, setName] = useState(menuItem?.name || "");
  const [description, setDescription] = useState(menuItem?.description || "");
  const [basePrice, setBasePrice] = useState(menuItem?.basePrice || "");
  const [sizes, setSizes] = useState(menuItem?.sizes || []);
  const [category, setCategory] = useState(menuItem?.category || "");
  const [categories, setCategories] = useState([]);
  const [extraIngredientPrices, setExtraIngredientPrices] = useState(
    menuItem?.extraIngredientPrices || [],
  );

  useEffect(() => {
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => {
        setCategories(categories);
      });
    });
  }, []);

  return (
    <form
      onSubmit={(ev) =>
        onSubmit(ev, {
          image,
          name,
          description,
          basePrice,
          sizes,
          extraIngredientPrices,
          category,
        })
      }
      className="mt-8 max-w-2xl mx-auto text-primary"
      dir="rtl"
    >
      <div
        className="md:grid items-start gap-4"
        style={{ gridTemplateColumns: ".3fr .7fr" }}
      >
        <div>
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="grow">
          <label dir="rtl">آیتم</label>
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <label>معرفی آیتم</label>
          <textarea
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            className=" my-8 h-[90px] w-[400px] max-w-[400px] text-wrap resize-x"
          />
          <br />
          <label className="mt-4 mr-4 ml-4">دسته بندی</label>
          <br />
          <select
            value={category}
            onChange={(ev) => setCategory(ev.target.value)}
          >
            {categories?.length > 0 &&
              categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
          </select>
          <label className="mt-8">قیمت</label>
          <input
            type="text"
            placeholder="قیمت"
            value={basePrice}
            onChange={(ev) => setBasePrice(ev.target.value)}
          />
          <div id={Styles.ignore}>
            <MenuItemPriceProps
              name={"Sizes"}
              addLabel={"Add item size"}
              props={sizes}
              setProps={setSizes}
            />
            <MenuItemPriceProps
              name={"Extra ingredients"}
              addLabel={"Add ingredients prices"}
              props={extraIngredientPrices}
              setProps={setExtraIngredientPrices}
            />
          </div>
          <button type="submit">ذخیره</button>
        </div>
      </div>
    </form>
  );
}
