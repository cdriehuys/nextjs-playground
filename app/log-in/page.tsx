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

export default function LogInPage() {
  return (
    <section className="container mx-auto max-w-md p-2">
      <h1 className="mb-4 text-3xl">Log In</h1>

      <form>
        <Input
          id="email"
          label="Email"
          name="email"
          placeholder="email@example.com"
          type="email"
        />
        <Input
          id="password"
          label="Password"
          name="password"
          placeholder="************"
          type="password"
        />

        <button
          className="bg-blue-500 py-2 px-3 text-white shadow hover:bg-blue-700"
          type="submit"
        >
          Log In
        </button>
      </form>
    </section>
  );
}
