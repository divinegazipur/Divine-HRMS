"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function HomePage() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.auth.getSession();

      console.log("Supabase Connected");
      console.log(data);

      if (error) {
        console.error(error);
      }
    }

    testConnection();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">
        Divine HRMS
      </h1>
    </main>
  );
}