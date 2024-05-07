import Link from "next/link";

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const posts = await fetchData();
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post?.id}>
            <p>{post?.title}</p>
            <Link href={`/post/${post?.id}`}>More details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
