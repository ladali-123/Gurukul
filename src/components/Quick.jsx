import React, { useEffect, useState } from "react";
import { Flag, Users, School, Globe, GraduationCap } from "lucide-react";

const stats = [
    {
        icon: <Flag size={40} />,
        value: 2002,
        
        subText: "26TH JAN",
        isDate: true,
    },
    {
        icon: <Users size={40} />,
        value: 4000,
        label: "STUDENT STRENGTH",
    },
    {
        icon: <School size={40} />,
        value: 30,
        label: "STUDENTS CLASS SIZE",
    },
    {
        icon: <Globe size={40} />,
        value:4,
        label: "ACRES",
    },
    {
        icon: <GraduationCap size={40} />,
        value: 160,
        label: "FACULTY STRENGTH",
    },
];

const Counter = ({ target }) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        let start = 1;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target]);

    return <span>{count}+</span>;
};

export default function QuickFacts() {
    return (
        <section className="bg-gray-950 py-12">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-white tracking-wide">
                    QUICK FACTS
                </h2>

                <div className="flex justify-center mt-4 mb-8">
                    <div className="w-24 h-1 bg-red-600 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 text-center">
                    {stats.map((item, index) => (
                        <div key={index} className="group">

                            {/* Icon */}
                            <div className="flex justify-center mb-6 text-white group-hover:text-red-500 transition duration-300">
                                {item.icon}
                            </div>

                            {/* Value */}
                            <div className="text-4xl font-bold text-white mb-2">
                                {item.isDate ? item.value : <Counter target={item.value} />}
                            </div>

                            {/* Subtext (for founded) */}
                            {item.subText && (
                                <div className="text-sm text-gray-400 mb-2 tracking-widest">
                                    {item.subText}
                                </div>
                            )}

                            {/* Label */}
                            <p className="text-gray-500 text-xs tracking-[3px] uppercase">
                                {item.label}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}