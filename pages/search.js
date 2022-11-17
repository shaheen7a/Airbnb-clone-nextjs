import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300 Stays - {range} - for {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div
            className="hidden lg-inline-flex mb-5 space-x-3 text-gray-800
          whitespace-nowrap"
          >
            <p
              className="px-4 py-2 border rounded-full cursor-pointer
            hover:shadow-lg active:scale-95 active:bg-gray-100 transition
            transform duration-100 ease-out"
            >
              Cancellation Flexibility
            </p>

            <p
              className="px-4 py-2 border rounded-full cursor-pointer
            hover:shadow-lg active:scale-95 active:bg-gray-100 transition
            transform duration-100 ease-out"
            >
              Type of Place
            </p>

            <p
              className="px-4 py-2 border rounded-full cursor-pointer
            hover:shadow-lg active:scale-95 active:bg-gray-100 transition
            transform duration-100 ease-out"
            >
              Price
            </p>

            <p
              className="px-4 py-2 border rounded-full cursor-pointer
            hover:shadow-lg active:scale-95 active:bg-gray-100 transition
            transform duration-100 ease-out"
            >
              Rooms and Beds
            </p>

            <p
              className="px-4 py-2 border rounded-full cursor-pointer
            hover:shadow-lg active:scale-95 active:bg-gray-100 transition
            transform duration-100 ease-out"
            >
              More filters
            </p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                price={item.price}
                star={item.star}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
