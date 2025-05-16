import React from "react";

const Card = () => {
  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Strait"
        />
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg"
          style={{ fontFamily: '"Strait", sans-serif' }}
        >
          <img
            className="w-full"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfJ5hSkM1pGC5I_gTNx-Bmpyb0QrwWm-TwiARKclttVPrZrIKfr0bTHyP0afaIHL7zks-AbODA7zAf9LYhKdKVM6s2YXB8jkFl-fWBTmse2y6O68grQjw6tOOMrtdsG1qkVOwRT05R5XVZIoRoJFsn_wUqkrABJwEGZN0Q0OZlLZxis2zkhOH2u1RI_dNd/s518/colobus.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Monkey</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <br />
            <a
              target="_blank"
              href="https://bootsnipp.com/muhittinbudak"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Bootstrap 3 examples
            </a>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
