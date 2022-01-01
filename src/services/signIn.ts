import { FormLoginValues } from "../types/types";

export const signIn = async (data: FormLoginValues) => {
  const { email, password } = data;

  if (email === "challenge@alkemy.org" && password === "react") {
    const response = {
      data: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE",
      },
      status: 200,
      error: "",
    };
    return response;
  }
  const response = {
    error: "Please provide valid email and password",
    status: 401,
    data: {
      token: "",
    },
  };
  return response;
};
