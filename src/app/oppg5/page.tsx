"use client";

import { useState } from "react";

// 🧠 Oppgave: Flytt logikken for å opprette en post til en server action (ikke inne i komponenten)
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
export default function Oppg5Form() {
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    const title = formData.get("title");
    const body = formData.get("body");

    // TODO: Flytt dette til en server action
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setMessage("Post submitted!");
  }

  return (
    <div>
      <h1>Exercise 5: Submit with Server Action</h1>
      <form action={handleSubmit}>
        <input name="title" placeholder="Title" required />
        <textarea name="body" placeholder="Body" required />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
