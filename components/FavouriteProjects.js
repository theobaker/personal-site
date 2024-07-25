import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-5 sm:pb-15 md:my-10 lg:my-20">
          <img src={"/alt_secondary_shot.jpg"} width="550" alt="me, in the middle of laughing, holding one hand out, the other on my laptop" />
          <div className="col-span-1 md:col-span-2 mt-8 md:mt-0"> {/* Added top margin for spacing on small screens */}
            {userData.home.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl max-w-lg text-gray-700 mb-4 sm:pb-15 md:pb-10 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}
          </div>
        </header>
        <Link href="/about">
          <a className="w-full mb-20 row-start-2 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex space-x-4 justify-center items-center dark:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>Read my bio!</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
