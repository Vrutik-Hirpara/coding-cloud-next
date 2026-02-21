"use client";

import React from "react";

type EventItem = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  author: string;
  dateRange: string;
  lessons: number;
  students: number;
  reviews: number;
  price: string;
  oldPrice: string;
  category: string;
  instructor: string;
  instructorImage: string;
};

interface Props {
  event: EventItem;
}

const EventCard: React.FC<Props> = ({ event }) => {
  return (
    <div className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[350px]">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold">
            {event.dateRange}
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-6 pt-6 pb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {event.title}
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            {event.subtitle} • {event.author}
          </p>

          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <span>{event.lessons} Lessons</span>
            <span>{event.students} Students</span>
          </div>

          <div className="flex items-center justify-between mb-5">
            <span className="text-lg font-bold text-gray-900">
              {event.price}
            </span>
            <span className="text-sm text-gray-400 line-through">
              {event.oldPrice}
            </span>
          </div>

          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;