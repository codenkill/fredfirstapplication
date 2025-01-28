"use client"; // This must be the very first line in the file

import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <main>
      <h1>Collect customer feedback to build better products</h1>
      <div>
        Create a feedback board in minutes, prioritize features, and build products your customers will love.
      </div>
      <ButtonLogin />
    </main>
  );
}
