"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; 
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Reset error state before attempting to sign in
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/dashboard");
    } else {
      // Determine the error message based on the error code
      switch(result?.error) {
        case "CredentialsSignin":
          setError("Invalid email or password.");
          break;
        case "UserNotFound":
          setError("User does not exist.");
          break;
        // Add more cases as needed based on your authorize function
        default:
          setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Display error message if exists */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        onChange={() => setError("")} // Clear error on input change
      />
      
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        onChange={() => setError("")} // Clear error on input change
      />
      
      <button type="submit">Login</button>
    </form>
  );
}