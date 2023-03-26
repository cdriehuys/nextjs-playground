"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import Input from "@/forms/Input";
import { useCallback } from "react";
import useAuthContext from "@/components/auth/useAuthContext";

const logIn = async (username: string): Promise<string> => {
  const response = await fetch("/api/tokens", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: username }),
  });
  const data = await response.json();

  return data.token;
};

interface FormData {
  username: string;
  password: string;
}

export default function LogInForm() {
  const authContext = useAuthContext();
  const mutation = useMutation({
    mutationFn: async (username: string) => {
      const token = await logIn(username);

      console.log("Received login token:", token);
      authContext.setToken(token);
    },
  });

  const form = useForm<FormData>();

  const onSubmit = useCallback(
    (data: FormData) => {
      mutation.mutate(data.username);
    },
    [mutation]
  );

  return (
    <section className="container mx-auto max-w-md p-2">
      <h1 className="mb-4 text-3xl">Log In</h1>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Input
          id="username"
          label="Username"
          placeholder="janedoe"
          type="text"
          {...form.register("username", { required: true })}
        />
        <Input
          id="password"
          label="Password"
          placeholder="************"
          type="password"
          {...form.register("password", { required: true })}
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
