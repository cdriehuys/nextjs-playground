import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
}

const Input = ({ id, label, name, placeholder, type }: InputProps) => (
  <div className="mb-4">
    <label className="mb-2 block font-bold" htmlFor={id}>
      {label}
    </label>
    <input
      className="w-full appearance-none border py-2 px-3 leading-tight shadow focus:outline-none focus:ring"
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  </div>
);

export default Input;
