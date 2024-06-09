export default function RenderAnyJoke({ data }: { data: any }) {
  const NestedProp = data?.type;

  if (NestedProp) {
    return (
      <div>
        <h1>Could be any kind of Joke..</h1>
        <hr />
        <h3> Category: {data.category}</h3>
        <p>{data.setup}</p>
        <p>{data.delivery}</p>
        <p>{data.joke}</p>
      </div>
    );
  } else {
    <h2>No Jokes today, sorry!</h2>;
  }
}
