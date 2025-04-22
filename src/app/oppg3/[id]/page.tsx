type Post = {
  id: number;
  title: string;
  body: string;
};

// 🧠 Oppgave: Splitt opp komponenten i flere komponenter slik at det som krever ekstern data
// håndteres i en egen komponent
export default async function Oppg3({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
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
