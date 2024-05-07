export default function Page({ params }: { params: { clientId: string } }) {
  return (
    <div>
      <h1>Client Id</h1>
      <p>{params.clientId}</p>
    </div>
  );
}
