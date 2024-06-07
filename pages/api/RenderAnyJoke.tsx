export default function RenderAnyJoke({ data }: { data: any }) {
  const NestedProp = data?.type;
  if (NestedProp === "twopart") {
    return (
      <div aria-label="twopart-label">
        <h2>Dont Watch These Jokes, please..</h2>
        Setup:
        <div>{JSON.stringify(data.setup)}</div>
        Punchline:
        <div>{JSON.stringify(data.delivery)}</div>
      </div>
    );
  } else if (NestedProp === "single")
    return (
      <div>
        <h2>Dont Watch These Jokes,please..</h2>
        One liner:
        <div aria-label="oneliner">{JSON.stringify(data.joke)}</div>
      </div>
    );
}
