interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  [key: string]: any;
}

export default function Input({ label, name, kind, ...rest }: InputProps) {
  return (
    <>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {kind === "text" && (
        <input
          id={name}
          {...rest}
          className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      )}
    </>
  );
}
