// 🧠 Oppgave: Skriv om denne komponenten slik at slik at dataene i stedet hentes på serveren
"use client";

import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
};

export default function Ex1ClientFetch() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data: Post[]) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Exercise 1: Client-Side Fetch</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
