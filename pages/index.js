import React, { useCallback, useMemo, useState,  } from "react";
import Head from "next/head";
import Link from "next/link";

import Banner from "./../Components/Reusable/Banner";
export default function Home() {
  const [query, setQuery] = useState("");
  const kind = useMemo(() => {
    return [
      "new-movies",
      "movies/افلام انيميشن",
      "movies/افلام عربي",
    ];
  }, []);

  const updateQueryHandelar = useCallback((option) => {
    
    setQuery((prev) => option);
    
  },[]);

  const disable = () => (query === "" ? true : false);

  return (
    <div className="h-full">
      <Head>
        <title>Home - My Movie</title>
      </Head>
      <main className="h-full flex flex-col items-center justify-center gap-4">
        <Banner title="Welcome to My Movie App" phargraph={true} />
        <Banner
          title="Please Choose What Kind Do You Love ?"
          options={kind}
          onQueryUpdate={updateQueryHandelar}
        />
        <div className="flex w-full justify-center ">
          <Link
            href={{
              pathname: "/result",
              query: query,
            }}
          >
            <button
              disabled={disable()}
              className={` ${
                disable() ? "cursor-no-drop opacity-75" : ""
              } bg-red-500 mb-4 py-2 px-10 rounded-md text-white `}
            >
              {query ? 'Search ' + query : 'Choose Some Category'}
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
