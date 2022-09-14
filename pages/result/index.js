import React, { useState, useEffect } from "react";
import Head from 'next/head'

import HomeButton from "./../../Components/Reusable/HomeButton";
import MovieList from "./../../Components/Reusable/MovieLists";

import { getAll } from "./../../utils/API_Calls";

let init = false;
function Result({ origins, query }) {
  const x = origins[0].data; // x is the origins data
  const [page, setPage] = useState(1); // for Page number
  const [data, setData] = useState(x);


  // fetch data from client site

  useEffect(() => {
    if (!init) {
      init = true;
      return;
    }
    getAll(`${query}?page=${page}`).then((data) => {
      if (query.includes("movies")) {
        setData((prev) => data.movies);
      } else {
        setData((prev) => data.shows);
      }
    });
  }, [page, query]);



  return (
    <div>
      <Head>
        <title>My Movie App - Result </title>
      </Head>
      <HomeButton />

      <MovieList
        titleDesc="Thank You For Choosing Us 🙏 Enjoy Your Time 😀⏱"
        data={data}
        query={query}
    

      />

      <div className="max-w-6xl mx-auto text-center mb-8 text-white">
        {page > 1 && (
          <button
            onClick={() => setPage((prev) => prev - 1)}
            className="mr-2 py-2 px-1 bg-sky-700 rounded-md hover:bg-sky-500 ml-2"
          >
            Back
          </button>
        )}
       Page {page} of {origins[0].pages}

{    page < origins[0].pages &&    <button
          onClick={() => setPage((prev) => prev + 1)}
          className="py-2 px-1 bg-sky-700 rounded-md hover:bg-sky-500 ml-2"
        >
          Next Page
        </button>}

      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const queryProps = query; // get the query type for the user
  let newQuery = Object.keys(queryProps); //to loop over the query properties
  let newMovies = [];

  if (newQuery.length === 0) {
    // check if the user entered to the page without a query
    return {
      redirect: {
        destination: "/",
      },
    };
  } else {
    const data = await getAll(`${newQuery[0]}?page=1`); // await the API
    let newData = []; // new Array of data for the client side
    if (newQuery[0].includes("movies")) {
      // Redesign for Data to be set For The Front End becouse we have different types of data
      newData.push({
        data: data.movies,
        pages: data.pages,
        page: data.page,
      });
    } else {
      newData.push({
        data: data.shows,
        pages: data.pages,
        page: data.page,
      });
    }
    return {
      props: {
        origins: newData,
        query: newQuery[0],
      },
    };
  }
}
export default Result;
