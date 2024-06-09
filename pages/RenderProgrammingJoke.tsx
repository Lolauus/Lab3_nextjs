export default function RenderSFWJoke({ data }: { data: any }) {
  const NestedProp = data?.type;
  if (NestedProp) {
    return (
      <div>
        <h1>Nerd Jokes!</h1>
        <hr />
        <h3> Category: {data.category}</h3>
        <div>{data.setup}</div>
        <div>{data.delivery}</div>
        <div>{data.joke}</div>
        <hr />
      </div>
    );
  } else {
    <h2>No Jokes today, sorry!</h2>;
  }
}
