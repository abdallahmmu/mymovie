import React, { useEffect, useReducer, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { getAll } from "./../../utils/API_Calls";

function MovieDetails() {
  const { query } = useRouter();
  const [origin, setOrigin] = useState(null);
  const [video, setVideo] = useState(0);
  const newQuery = Object.keys(query); // convert the query to array to check if it a show or a movie

  const router = useRouter()

  useEffect(() => {
      getAll(`movie/${query.slug}`).then((data) => {
        if(data.error){
          router.push('/')
        }
        setOrigin(data.movie);
      })
    document.title = "Enojy Watching🎬😀";
  }, [query,router]);
  return (
    <div className="max-w-5xl text-white ">
      {!origin && (
        <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 text-4xl">
          <p className="animate-bounce text-center">Loooading ....</p>{" "}
        </div>
      )}
      {origin && (
        <div className="container grid md:grid-cols-1 place-items-cnter gap-4">
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="text-xl mb-4">
              You Choose {origin.Title} 🤟 Enjoy Watching 🎬⏱
            </h1>
            <Image
              width="200"
              height="270"
              src={`https://thumbnail-sm.shofda.net${origin.Poster}`}
              alt="imge"
              className="mb-4"
            />
            <p className="text-xl text-center mt-4 ">
              📌<span className="text-red-500">NOTE**</span> If The The Server
              Did not Work Correctly Make sure to Choose Another Server 😂😍
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mb-8">
            {origin.Embedded.length > 0 && (
              <iframe
                className="w-full h-screen"
                src={origin.Embedded[video]}
                title={origin.Title}
              ></iframe>
            )}
            {/* If It Is Movie And Exsist*/}
            {origin.Embedded.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
                {origin.Embedded.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="cursor-pointer text-xl py-2 px-3 my-2 bg-sky-700 hover:bg-sky-500 flex items-center flex-col md:flex-row gap-2"
                    >
                      <p onClick={() => setVideo((prev) => i)}>
                        Server {i + 1}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {origin.Embedded.length === 0 && (
              <video
                className="w-full h-screen"
                src={origin.Seasons["0"].Episodes[0].Embedded[video]}
              ></video>
            )}
            {/*Shows */}
            {origin.Embedded.length === 0 && (
              <div className="grid grid-cols-1 gap-4 place-items-center">
                {origin.Seasons["0"].Episodes.map((item) => {
                  return (
                    <div className="flex flex-wrap gap-2" key={item.slug}>
                      {item.Embedded.map((x, i) => {
                        return (
                          <div
                            key={i}
                            className="cursor-pointer text-xl py-2 px-3 my-2 bg-sky-700 hover:bg-sky-500 flex items-center flex-col md:flex-row gap-2"
                          >
                            <p onClick={() => setVideo((prev) => i)}>
                              Server {i + 1}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default MovieDetails;
