interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  [key: string]: any;
}

export default function Input({ label, name, kind, ...rest }: InputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      {kind === "text" && (
        <div className="rounded-md relative flex  items-center shadow-sm">
          <input
            id={name}
            {...rest}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      )}
      {kind === "price" && (
        <div className="rounded-md flex items-center relative shadow-sm ">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm pointer-events-none">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="pl-7 appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="absolute right-0 pr-3 flex items-center">
            <span className="text-gray-500 text-sm pointer-events-none">
              USD
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
