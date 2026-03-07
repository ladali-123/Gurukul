import React from "react";

const leaders = [
  {
    name: "Mr. H. B. Shivram",
    role: "Trustee",
    image:
      "https://i.pinimg.com/736x/bf/6a/8b/bf6a8be7916631d9834e0221bda70564.jpg",
    desc: " Chairman of HRB Group of Companies and a renowned industrialist. He provides strong strategic direction and ensures sound financial leadership for the organization. With his vast industry experience and visionary approach, he plays a key role in guiding the institution toward sustainable growth and long-term success. His leadership inspires innovation, excellence, and strong organizational values."
  },
  {
    name: "Dr. Kumar Ramamurthy",
    role: "Trustee",
    image:
      "https://i.pinimg.com/736x/e0/a1/ed/e0a1ed7bcd7ebf8ecbf5315e2332b66d.jpg",
    desc: "Entrepreneur and visionary in the field of storage networks. His contributions to innovation and education are globally recognized. He continuously encourages research, creativity, and technological advancement across global academic and industry communities, inspiring future leaders and fostering collaborative solutions for emerging challenges."
  },
  {
    name: "Professor Shivram Kumar",
    role: "Trustee",
    image:
      "https://i.pinimg.com/736x/22/42/8d/22428d945e3ef791d1ec98fe0b1e6d21.jpg",
    desc: "Senior advisor and technology expert guiding ICT and telecommunication initiatives at the institution, driving innovation, strategic planning, digital transformation, advanced infrastructure development, and promoting research, collaboration, and global technological excellence, while mentoring professionals and fostering sustainable technology-driven institutional growth worldwide."
  },
  {
    name: "Mr. Rampal Singh",
    role: "Chairman, Indus Trust",
    image:
      "https://i.pinimg.com/736x/b8/6a/e7/b86ae71e52305faf4baff24e58479669.jpg",
    desc: "Chairman & Managing Director of Mantri Developers and a visionary entrepreneur contributing to educational excellence, known for his leadership, innovative business strategies, and commitment to social development, supporting institutions, infrastructure growth, and initiatives that promote quality education, research advancement, and community empowerment.."
  }
];

export default function LeadershipPage() {
  return (
    <div className="bg-black text-white min-h-screen" style={{ paddingTop: "90px" }}>

      {/* Hero Section */}

      <div
        className="h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/1200x/b8/30/33/b830338598001a135a2605562d3195bd.jpg)"
        }}
      >
       <div className="bg-black/60 w-full h-full flex items-center justify-center">
  <div className="bg-red-500/20 px-8 md:px-12 py-6 rounded-2xl text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white">Leadership</h1>
  </div>
</div>
      </div>

      {/* Leaders */}

      <div className="max-w-6xl mx-auto py-20 px-6 space-y-20">

        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-[300px] object-cover rounded-xl"
            />

            <div>
              <h2 className="text-3xl font-semibold mb-2">{leader.name}</h2>
              <p className="text-gray-400 mb-4">{leader.role}</p>
              <p className="text-gray-300 leading-relaxed text-justify">{leader.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}