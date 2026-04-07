import { useState } from "react";
import pic2 from "../assets/pic2.jpg";

const books = [
    { sno: 1, name: "NEW MYLESTONE HINDI PART-1" },
    { sno: 2, name: "NEW MYLESTONE HINDI PART-2" },
    { sno: 3, name: "NEW MYLESTONE HINDI ABHYAS PUSTIKA" },
    { sno: 4, name: "VYAKARAN KUTUMB" },
    { sno: 5, name: "ENGLISH INSPIRE" },
    { sno: 6, name: "WONDER ENGLISH GRAMMAR" },
    { sno: 7, name: "MATHEMATICS R.S. AGGARWAL PART-1" },
    { sno: 8, name: "SCIENCE" },
    { sno: 9, name: "SOCIAL SCIENCE PART-1" },
    { sno: 10, name: "HEXA ONE BYTE AT A TIME COMPUTER SCIENCE" },
    { sno: 11, name: "GK Times" },
    { sno: 12, name: "REASONING MASTERY" },
    { sno: 13, name: "ANANTA SANSKRIT" },
    { sno: 14, name: "KANIKA SANSKRIT VYAKARAN" },
    { sno: 15, name: "ART SMART DRAWING" },
    { sno: 16, name: "MAP PRACTICES" },
    { sno: 17, name: "SCIENCE LAB MANUAL" },
    { sno: 18, name: "TALK ENGLISH CONVERSATION" }
];

const classes = [
    "Nursery", "LKG", "UKG",
    "Class 1", "Class 2", "Class 3",
    "Class 4", "Class 5", "Class 6",
    "Class 7", "Class 8"
];

export default function SchoolBooks() {

    // ✅ Default selected (gap fix)
    const [activeClass, setActiveClass] = useState("Nursery");

    return (
        <div className="pt-[90px] bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">

            {/* ✅ HERO */}
            <div className="w-full h-[250px] md:h-[400px] relative">
                <img
                    src={pic2}
                    alt="school"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl font-bold bg-black/50 backdrop-blur-lg px-10 py-5 rounded-2xl border border-white/20 shadow-xl">
                        📚 Book List
                    </h1>
                </div>
            </div>

            {/* ✅ TABS (CENTERED + BIGGER + SCROLLABLE) */}
            <div className="sticky top-[90px] z-20 bg-black/80 backdrop-blur-md py-6">

                <div className="flex justify-center">
                    <div className="flex overflow-x-auto no-scrollbar gap-4 px-4">

                        {classes.map((cls) => (
                            <button
                                key={cls}
                                onClick={() => setActiveClass(cls)}
                                className={`whitespace-nowrap px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border
                                    ${
                                        activeClass === cls
                                            ? "bg-red-600 text-white border-red-400 shadow-[0_0_12px_rgba(255,0,0,0.7)] scale-105"
                                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:scale-105"
                                    }`}
                            >
                                {cls}
                            </button>
                        ))}

                    </div>
                </div>

            </div>

            {/* ✅ BOOK LIST */}
            <div className="px-4 pt-6 pb-12">

                <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">

                    {/* HEADER */}
                    <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-red-700 to-red-900">
                        <h2 className="font-semibold text-lg text-white">
                            {activeClass} Books
                        </h2>
                        <span className="bg-white text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                            {books.length}
                        </span>
                    </div>

                    {/* LIST */}
                    {books.map((book, index) => (
                        <div
                            key={book.sno}
                            className={`flex items-center gap-4 px-6 py-4 transition-all duration-300
                                ${index % 2 === 0 ? "bg-white/5" : "bg-transparent"}
                                hover:bg-red-500/10`}
                        >
                            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm font-bold shadow-md">
                                {book.sno}
                            </div>

                            <div className="text-sm md:text-base font-medium tracking-wide text-white">
                                {book.name}
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}