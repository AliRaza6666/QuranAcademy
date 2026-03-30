"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

/**
 * Admin Notification System Integration Example
 * 
 * This example shows how to correctly trigger the admin notification
 * after a successful user registration via Supabase.
 */
export default function AdminNotificationExample() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    try {
      // 1. Register the user with Supabase
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) throw error;

      if (data?.user) {
        // 2. Trigger the Admin Notification
        const notifyRes = await fetch("/api/send-admin-notification", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            email: email,
            timestamp: new Date().toLocaleString(),
          }),
        });

        const notifyData = await notifyRes.json();

        if (notifyRes.ok) {
          setMessage("Check your email to confirm registration. Admin notified!");
        } else {
          console.error("Admin Notification failed:", notifyData.error);
          setMessage("Registration successful, but admin notification failed.");
        }
      }
    } catch (err: any) {
      console.error("Signup Error:", err.message);
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Sign Up — Admin Notification Example</h2>
      
      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            name="password"
            type="password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? "Registering..." : "CREATE ACCOUNT"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-sm font-medium text-center text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-100">
          {message}
        </p>
      )}
    </div>
  );
}
