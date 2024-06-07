export default function RenderSFWJoke({ data }: { data: any }) {
  const NestedProp = data?.type;
  if (NestedProp === "twopart") {
    return (
      <div>
        <h2>Programming Jokes!</h2>
        Setup:
        <div>{JSON.stringify(data.setup)}</div>
        Punchline:
        <div>{JSON.stringify(data.delivery)}</div>
      </div>
    );
  } else if (NestedProp === "single")
    return (
      <div>
        <h2>Programming Jokes!</h2>
        One liner:
        <div>{JSON.stringify(data.joke)}</div>
      </div>
    );
}
