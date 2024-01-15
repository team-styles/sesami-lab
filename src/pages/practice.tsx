import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [authorsData, setAuthorsData] = useState([]);
  useEffect(() => {
    fetch("/api/authors").then((res) => res.json());
    // .then(console.log);
  }, []);

  const handleClick = async () => {
    await fetch("/api/authors", {
      method: "POST",
    });
  };

  const handleClick2 = async () => {
    const response = await fetch("/api/authors", {
      method: "get",
    });
    const data = await response.json();
    setAuthorsData(data);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={handleClick}>post</button>
      <button onClick={handleClick2}>Getttt</button>
    </>
  );
}
