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
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">
          Hotel Listings
        </h1>
      </header>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto px-6 pb-12 space-y-6">
        {hotels.map((hotel) => (
          <article
            key={hotel.id}
            tabIndex={0}
            className="flex flex-col md:flex-row overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-purple-500"
          >
            {/* Image */}
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={256}
              height={224}
              className="h-64 w-full md:h-auto md:w-64 object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-between p-5 flex-1">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {hotel.name}
                </h2>

                <p className="text-sm text-gray-600 mt-1">
                  {hotel.location}
                </p>

                <p className="text-gray-700 mt-3">
                  {hotel.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-purple-700">
                  {hotel.price}
                </span>

                <button
                  className="rounded-lg px-4 py-2 text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
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
