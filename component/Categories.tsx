"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { API, BASE_URL } from "@/lib/api";

type Category = {
  id: number;
  name: string;
  image: string | null;
};

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(API.CATEGORY.LIST);
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Category fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className=" bg-white">
      <div className="py-16 container-custom flex flex-col items-center">

        <div className="px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full">
          CATEGORIES
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-center mt-5 mb-12">
          Explore Top Categories
        </h2>

        {loading ? (
          <div className="animate-pulse text-blue-600 font-bold">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">

            {categories.map((cat) => {
              const imageUrl = cat.image
                ? `${BASE_URL}${cat.image}`
                : "/images/fallback.png";

              return (
                <div
                  key={cat.id}
                  onClick={() => router.push(`/category/${cat.id}`)}
                  className="h-60 shadow-xl bg-white rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-500 group"
                >
                  <div className="relative h-20 w-20 mb-5">
                    <Image
                      src={imageUrl}
                      alt={cat.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-center">
                    {cat.name}
                  </h3>
                </div>
              );
            })}

          </div>
        )}
      </div>
    </section>
  );
}
