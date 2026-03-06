"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, AwardIcon, CheckCircle, Star } from "lucide-react";
import iao from "@/public/images/Accreditation/IAO.png";
import iso from "@/public/images/Accreditation/ISO.png";
import msme from "@/public/images/Accreditation/msme.png";
import Pill from "./ui/Pill";

const accreditations = [
    {
        id: 1,
        name: "IAO",
        logo: iao,
        description: "International Accreditation Organization",
        link: "https://www.iao.org/India-Gujarat/Coding-Cloud",
    },
    {
        id: 2,
        name: "ISO 9001:2015",
        logo: iso,
        description: "Quality Management System Certification",
        link: "/images/Accreditation/Coding-Cloud-ISO_2024-25.jpg",
    },
    {
        id: 3,
        name: "MSME",
        logo: msme,
        description: "Ministry of Micro, Small & Medium Enterprises",
        link: "https://codingcloudinstitute.com/wp-content/uploads/2024/10/Coding_Cloud_MSME_New.pdf",
    },
];

export default function Accreditation() {
    return (
        <section className="relative py-16 md:py-20 bg-gradient-to-b from-purple-50 via-white to-indigo-50 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-14"
                >
                    {/* <div className="flex justify-center mb-4">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                            <Award className="w-4 h-4" />
                            Accreditation
                        </span>
                    </div> */}
                    <div className="flex justify-center mb-4">
                        <Pill
                            text="Accreditation"
                            textColor="var(--color-accent-purple)"
                            bgColor="var(--color-primary-light)"
                        />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Recognized & <span className="text-purple-600">Certified</span>
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg">
                        Coding Cloud is proudly accredited and recognized by reputed
                        international and national certification bodies.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {accreditations.map((item, index) => (
                        <motion.div
                            key={item.id}
                            onClick={() => window.open(item.link, "_blank")}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group cursor-pointer"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 relative">

                                {/* Logo Circle */}
                                {/* Logo */}
                                <div className="flex justify-center">
                                    <div className="relative w-[278px] h-[300px] 
                  group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src={item.logo}
                                            alt={item.name}
                                            fill
                                            sizes="278px"
                                            className="object-contain"
                                            priority
                                            unoptimized
                                        />
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="text-lg md:text-xl font-semibold text-center text-gray-800 mb-2">
                                    {item.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm text-center">
                                    {item.description}
                                </p>

                                {/* Verified Badge */}
                                {/* <div className="flex justify-center mt-5">
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                        <CheckCircle className="w-3 h-3" />
                                        Verified
                                    </span>
                                </div> */}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Recognition */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm text-gray-600 font-medium">
                            Recognized by International Accreditation Bodies
                        </span>
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}