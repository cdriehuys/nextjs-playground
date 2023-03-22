import Input from "@/forms/Input";

export default function RegisterPage() {
  return (
    <section className="container mx-auto max-w-md p-2">
      <h1 className="mb-4 text-3xl">Register</h1>

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
          Register
        </button>
      </form>
    </section>
  );
}
