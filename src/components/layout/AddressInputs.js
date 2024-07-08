export default function AddressInputs({
  addressProps,
  setAddressProp,
  disabled = false,
}) {
  const { phone, address, postalcode, vahed, pelak } = addressProps;
  return (
    <>
      <div class="w-full px-3 relative">
        <label
          class="block uppercase tracking-wide text-primary text-xs font-bold mb-2 absolute  right-0  -top-3"
          for="grid-phone"
        >
          شماره تماس
        </label>
        <input
          class="appearance-none   block w-full bg-gray-200 text-primary border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-phone"
          type="text"
          placeholder="شماره تماس"
          disabled={disabled}
          value={phone || ""}
          onChange={(ev) => setAddressProp("phone", ev.target.value)}
        />
      </div>

      <div class="w-full px-3 relative">
        <label
          class="block uppercase tracking-wide text-primary text-xs font-bold mb-2 absolute  right-0  -top-3"
          for="grid-address"
        >
          آدرس
        </label>
        <input
          class="appearance-none   block w-full bg-gray-200 text-primary border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-address"
          type="text"
          placeholder="آدرس"
          disabled={disabled}
          value={address || ""}
          onChange={(ev) => setAddressProp("address", ev.target.value)}
        />
      </div>

      <div class="w-full px-3 relative">
        <label
          class="block uppercase tracking-wide text-primary text-xs font-bold mb-2 absolute  right-0  -top-3"
          for="grid-postalcode"
        >
          کدپستی
        </label>
        <input
          class="appearance-none   block w-full bg-gray-200 text-primary border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-postalcode"
          type="text"
          placeholder="کدپستی"
          disabled={disabled}
          value={postalcode || ""}
          onChange={(ev) => setAddressProp("postalcode", ev.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div class="w-full px-3 relative">
          <label
            class="block uppercase tracking-wide text-primary text-xs font-bold mb-2 absolute  right-0  -top-3"
            for="grid-vahed"
          >
            واحد
          </label>
          <input
            class="appearance-none   block w-full bg-gray-200 text-primary border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-vahed"
            type="text"
            placeholder="واحد"
            value={vahed || ""}
            onChange={(ev) => setAddressProp("vahed", ev.target.value)}
          />
        </div>
        <div class="w-full px-3 relative">
          <label
            class="block uppercase tracking-wide text-primary text-xs font-bold mb-2 absolute  right-0  -top-3"
            for="grid-pelak"
          >
            پلاک
          </label>
          <input
            class="appearance-none   block w-full bg-gray-200 text-primary border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-pelak"
            type="text"
            placeholder="پلاک"
            value={pelak || ""}
            onChange={(ev) => setAddressProp("pelak", ev.target.value)}
          />
        </div>
      </div>
    </>
  );
}
