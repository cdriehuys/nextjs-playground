import { Ref, forwardRef } from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
}

const Input = (
  { id, label, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>
) => (
  <div className="mb-4">
    <label className="mb-2 block font-bold" htmlFor={id}>
      {label}
    </label>
    <input
      className="w-full appearance-none border py-2 px-3 leading-tight shadow focus:outline-none focus:ring"
      id={id}
      // Forward the ref for usage with react-hook-form
      ref={ref}
      {...rest}
    />
  </div>
);

export default forwardRef(Input);
