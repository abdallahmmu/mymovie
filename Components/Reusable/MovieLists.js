import React from "react";
import Image from "next/image";
import Link from "next/link";


function MovieList({ titleDesc, data,query }) {
  return (
    <div className="max-w-5xl mx-auto text-white ">
      <div className="container mx-auto p-4 flex flex-col">
        <div className="flex items-center justify-center mb-8">
          {titleDesc && <h1 className="text-4xl text-center">{titleDesc}</h1>}
        </div>
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-2">
          {!data && (
            <div className="flex items-center justify-center mb-8 animate-bounce text-4xl">loading</div>
          )}
          {data &&
            data.map((item) => {
              return (
                <Link href={{
                  pathname: `/result/${item.slug}`,
                  query:query
                }} key={item._id}>
                  <div className="flex items-center flex-col gap-2 hover:translate-y-1 ease-in duration-300 cursor-pointer">
                    <div className="image mb-4">
                      <Image
                        width="200"
                        height="270"
                        src={`https://thumbnail-sm.shofda.net${item.Poster}`}
                        alt="image"
                      />
                    </div>
                    <div>
                      <h1 className="text-xl">{item.Title}</h1>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default MovieList;
