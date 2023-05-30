import React from "react";

function Banner({ title, phargraph, options, onQueryUpdate }) {
  return (
    <div className="flex flex-col items-center justify-center border text-white rounded-md border-white p-8">
      <h3 className="text-3xl text-center mb-4">
        {title}
        <br />
      </h3>
      {phargraph && (
        <p className="mb-4">
          We Would Like To Thank You For choosing us 😀 <br /> Enjoy Watching
          Your Favorite Movie and Show.🎥🎬
        </p>
      )}

      {options && (
        <>
          <label className="block mb-2 text-sm font-medium text-base-900 dark:text-gray-400">
            Select an Category
          </label>
          <select
            onChange={(e) => onQueryUpdate(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option></option>
            {options.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </>
      )}
    </div>
  );
}

export default React.memo(Banner);
