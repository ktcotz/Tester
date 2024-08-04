import { useEffect, useState } from "react";

export const Fetch = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );

        if (!res.ok) {
          throw new Error("ERROR");
        }

        const data = await res.json();

        setJoke(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <h1>{joke?.type}</h1>
          <h2>{joke?.setup}</h2>
        </>
      )}
    </div>
  );
};
