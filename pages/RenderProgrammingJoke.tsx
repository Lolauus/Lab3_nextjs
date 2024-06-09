export default function RenderSFWJoke({ data }: { data: any }) {
  const NestedProp = data?.type;
  if (NestedProp) {
    return (
      <div>
        <h1>Nerd Jokes!</h1>
        <h3> Category: {data.category}</h3>
        <hr />
        <p>{data.setup}</p>
        <p>{data.delivery}</p>
        <p>{data.joke}</p>
        <hr />
      </div>
    );
  } else {
    <h2>No Jokes today, sorry!</h2>;
  }
}
