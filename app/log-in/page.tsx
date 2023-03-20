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
        <label className="block font-bold mb-2" htmlFor={id}>{label}</label>
        <input className="shadow w-full py-2 px-3 appearance-none border focus:outline-none focus:ring leading-tight" id={id} name={name} placeholder={placeholder} type={type} />
    </div>
)

export default function LogInPage() {
    return (
        <section className="container max-w-md mx-auto p-2">
            <h1 className="text-3xl mb-4">Log In</h1>

            <form>
                <Input id="email" label="Email" name="email" placeholder="email@example.com" type="email" />
                <Input id="password" label="Password" name="password" placeholder="************" type="password" />

                <button className="shadow bg-blue-500 text-white py-2 px-3 hover:bg-blue-700" type="submit">Log In</button>
            </form>
        </section>
    )
}
