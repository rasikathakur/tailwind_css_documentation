"use client";

import Image from "next/image";
//contents of the page.tsx file
const hotels = [
  {
    id: 1,
    name: "Grand Palace Hotel",
    location: "Mumbai, India",
    price: "₹8,500 / night",
    image: "/hotel1.jpg",
    description:
      "Luxury stay with sea-facing rooms, free breakfast, and rooftop pool."
  },
  {
    id: 2,
    name: "Mountain View Resort",
    location: "Manali, India",
    price: "₹6,200 / night",
    image: "/hotel2.jpg",
    description:
      "Peaceful mountain retreat with scenic views and cozy wooden interiors."
  },
  {
    id: 3,
    name: "City Central Inn",
    location: "Bangalore, India",
    price: "₹4,800 / night",
    image: "/hotel3.jpg",
    description:
      "Comfortable business hotel located near major IT parks."
  }
];

export default function HomePage() {
  return (
    <main className="">

      {/* Header */}
      <header className="">
        <h1 className="">
          Hotel Listings
        </h1>
      </header>

      {/* Cards Section */}
      <section className="">
        {hotels.map((hotel) => (
          <article
            key={hotel.id}
            tabIndex={0}
            className=""
          >
            {/* Image */}
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={256}
              height={224}
              className=""
            />

            {/* Content */}
            <div className="">
              <div>
                <h2 className="">
                  {hotel.name}
                </h2>

                <p className="">
                  {hotel.location}
                </p>

                <p className="">
                  {hotel.description}
                </p>
              </div>

              {/* Footer */}
              <div className="">
                <span className="">
                  {hotel.price}
                </span>

                <button
                  className=""
                >
                  Book Now
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
