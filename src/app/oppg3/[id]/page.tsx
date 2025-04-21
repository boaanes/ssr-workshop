type Post = {
  id: number;
  title: string;
  body: string;
};

async function PostWithDelay({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await res.json();

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

// 🧠 Oppgave: Bruk react sin Suspense for å vise en loading state mens dataene hentes
export default function Oppg3Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Exercise 3: Suspense Loading State</h1>
      <PostWithDelay id={params.id} />
    </div>
  );
}
