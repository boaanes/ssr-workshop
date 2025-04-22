async function fetchPost(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

async function fetchComments(postId: string) {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );
  return res.json();
}

// 🧠 Oppgave: Splitt opp denne komponenten i to ulike komponenter for å hente title og comments
// hver for seg og bruk Suspense for å vise en loading state
async function Post({ id }: { id: string }) {
  const post = await fetchPost(id);
  const comments: { id: number; name: string }[] = await fetchComments(id);

  return (
    <>
      <h2>{post.title}</h2>
      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default async function Oppg4Page({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Exercise 4: Streaming Components</h1>
      <Post id={params.id} />
    </div>
  );
}
