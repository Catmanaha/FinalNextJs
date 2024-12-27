"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [error, setError] = useState(""); 
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        setError("");
        setIsLoading(true); 

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.ok) {
                router.push("/dashboard");
            } else {
                switch (result?.error) {
                    case "CredentialsSignin":
                        setError("Invalid email or password.");
                        break;
                    case "UserNotFound":
                        setError("User does not exist.");
                        break;
                    default:
                        setError(
                            "An unexpected error occurred. Please try again."
                        );
                }
                setIsLoading(false);
            }
        } catch (err) {
            setError("An unexpected error occurred.");
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <input
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={() => setError("")} 
            />

            <input
                name="password"
                type="password"
                placeholder="Password"
                required
                onChange={() => setError("")} 
            />

            <button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Login"} 
            </button>
        </form>
    );
}
