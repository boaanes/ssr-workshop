// 🧠 Oppgave: Gjør denne ruten dynamisk slik at du kan hente en post basert på id fra URL-en

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Oppg2Static() {
  const postId = 1; // Midlertidig hardkodet – skal erstattes med dynamisk id
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  const post: Post = await res.json();

  return (
    <div>
      <h1>Exercise 2: Dynamic Route for Post</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
