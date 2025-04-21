async function fetchPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

async function fetchComments(postId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );
  return res.json();
}

async function PostTitle({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const post = await fetchPost(id);
  return <h2>{post.title}</h2>;
}

async function PostComments({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const comments: { id: number; name: string }[] = await fetchComments(id);

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

// 🧠 Oppgave: Wrapp <PostComments /> i <Suspense> slik at tittelen vises med en gang
export default function Oppg4Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Exercise 4: Streaming Components</h1>

      <PostTitle id={params.id} />

      {/* TODO: Wrapp denne i Suspense */}
      <PostComments id={params.id} />
    </div>
  );
}
