interface TextAreaProps {
  label?: string;
  name?: string;
  [key: string]: any;
}
const TextArea = ({ label, name, description, ...rest }: TextAreaProps) => {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        rows={4}
        {...rest}
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
      />
    </div>
  );
};

export default TextArea;
