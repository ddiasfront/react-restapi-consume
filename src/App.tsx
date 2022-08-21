import React from "react";
import { useFetch } from "./hooks/useFetch";

type People = {
  name: string;
  gender: string;
};

export default function App() {
  const { data: people, isFetching } = useFetch<People[]>(
    "https://swapi.dev/api/people"
  );
  return (
    <>
      <>{isFetching && <span>Loading</span>}</>
      {people?.map((person) => (
        <li key={person.name}>
          <strong>{person.name}</strong>
          <p>{person.gender}</p>
        </li>
      ))}
    </>
  );
}
