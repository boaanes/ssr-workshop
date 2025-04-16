// Exercise 1: Basic client-side data fetching with useEffect in a Client Component.
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
