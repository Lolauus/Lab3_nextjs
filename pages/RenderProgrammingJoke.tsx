export default function RenderSFWJoke({ data }: { data: any }) {
  const NestedProp = data?.type;
  if (NestedProp) {
    return (
      <div>
        <h1>Nerd Jokes!</h1>
        <h2>{data.category}</h2>
        <div>{data.setup}</div>
        <div>{data.delivery}</div>
        <div>{data.joke}</div>
      </div>
    );
  } else {
    <h2>No Jokes today, sorry!</h2>;
  }
}
