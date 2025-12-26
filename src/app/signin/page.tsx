"use client";

import { useState } from "react";
import styles from "@/styles/sign-in.module.css";
import { useAuth } from "@/hooks/useAuth";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, loading, error } = useAuth();

  const handleSignIn = async (data: { email: string; password: string }) => {
    const response = await signIn(data);
    if (response) {
      // Handle successful sign-in (e.g., redirect, store token, etc.)
      console.log("Signed in successfully:", response);
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSignIn({ email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Sign In</h2>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />

          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
}