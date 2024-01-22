import { getData } from "./fetch/fetchData";

export default async function Home() {
  const data = await getData()

  console.log(data);

  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}
