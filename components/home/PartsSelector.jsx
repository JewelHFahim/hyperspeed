"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import { FaCogs } from "react-icons/fa";

export default function PartsSelector({title, description}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load the TireConnect widget script dynamically
    const script = document.createElement("script");
    script.src = "https://app.tireconnect.ca/js/widget.js";
    script.async = true;
    script.onload = () => {
      if (window.TCWidget) {
        window.TCWidget.init({
          apikey: "a8a72a2c519972b3e6b8866d7fc9229d",
          container: "tireconnect",
        });
        setIsLoading(false);
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        {/* Header */}
        <div className="flex items-center gap-3 bg-[var(--color-primary)] text-white px-6 py-3 rounded-t-xl">
          <FaCogs className="text-xl" />
          <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
        </div>

        {/* Widget Container */}
        <div className="bg-white rounded-b-xl shadow-lg overflow-hidden p-4">
          {isLoading && (
            <div className="flex items-center justify-center h-[500px]">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[var(--color-primary)]"></div>
            </div>
          )}
          <div
            id="tireconnect"
            className="w-full min-h-[500px]"
            style={{ display: isLoading ? "none" : "block" }}
          ></div>
        </div>
      </Container>
    </section>
  );
}
