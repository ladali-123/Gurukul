import { useState } from "react";
import pic2 from "../assets/pic2.jpg";

const booksData = {
  "Nursery": [
    { sno: 1, name: "NEW MYLESTONE RUNWAY THE FUTURE", publication: "S.CHAND SCHOOL " }
  ],
  "LKG": [
    { sno: 1, name: "NEW MYLESTONE RUNWAY THE FUTURE", publication: "S.CHAND SCHOOL " }
  ],
  "UKG": [
    { sno: 1, name: "NEW MYLESTONE RUNWAY THE FUTURE", publication: "S.CHAND SCHOOL " }
  ],

  "Class 1": [

    { sno: 1, name: "NEW MYLESTONE HINDI PART-1 & 2", publication: "S.CHAND SCHOOL" },
    { sno: 2, name: "VYAKARAN VATIKA", publication: "MADHUBUN" },
    { sno: 3, name: "ENGLISH INSPIRE", publication: "BURLINGTON" },
    { sno: 4, name: "NEW MASTERING GRAMMAR", publication: "CREATIV KIDS" },
    { sno: 5, name: "NEW LEARNING COMPOSITE MATHS", publication: "S.CHAND SCHOOL" },
    { sno: 6, name: "FUN WAY OF EXPLORING SCIENCE", publication: "M.T.G" },
    { sno: 7, name: "MY BIG BOOK OF SOCIAL SCIENCE", publication: "RATNA SAGAR" },
    { sno: 8, name: "AI CONNECT", publication: "HEADWORD" },
    { sno: 9, name: "G.K TIMES", publication: "GOYAL BROTHER" },
    { sno: 10, name: "ENHANCED APTITUDE REASONING", publication: "BLUEPRINT" },
    { sno: 11, name: "MAGIC STROKES CURSIVE WRITING", publication: "GLOBAL RISE" },
    { sno: 12, name: "AKSHAR PRABH HINDI SHULEKH", publication: "SAMYAK" },
    { sno: 13, name: "ART SMART DRAWING", publication: "TAPSYA" },
    { sno: 14, name: "MY FIRST BOOK OF CONVERSATION", publication: "SURVI BOOKS" }
  ],

  "Class 2": [
    { sno: 1, name: "NEW MYLESTONE HINDI PART-1 & 2", publication: "S.CHAND SCHOOL" },
    { sno: 2, name: "VYAKARAN VATIKA", publication: "MADHUBUN" },
    { sno: 3, name: "ENGLISH INSPIRE", publication: "BURLINGTON" },
    { sno: 4, name: "NEW MASTERING GRAMMAR", publication: "CREATIV KIDS" },
    { sno: 5, name: "NEW LEARNING COMPOSITE MATHS", publication: "S.CHAND SCHOOL" },
    { sno: 6, name: "FUN WAY OF EXPLORING SCIENCE", publication: "M.T.G" },
    { sno: 7, name: "MY BIG BOOK OF SOCIAL SCIENCE", publication: "RATNA SAGAR" },
    { sno: 8, name: "AI CONNECT", publication: "HEADWORD" },
    { sno: 9, name: "G.K TIMES", publication: "GOYAL BROTHER" },
    { sno: 10, name: "ENHANCED APTITUDE REASONING", publication: "BLUEPRINT" },
    { sno: 11, name: "MAGIC STROKES CURSIVE WRITING", publication: "GLOBAL RISE" },
    { sno: 12, name: "AKSHAR PRABH HINDI SHULEKH", publication: "SAMYAK" },
    { sno: 13, name: "ART SMART DRAWING", publication: "TAPSYA" },
    { sno: 14, name: "MY FIRST BOOK OF CONVERSATION", publication: "SURVI BOOKS" }
  ],

  "Class 3": [
    { sno: 1, name: "NEW MYLESTONE HINDI PART-1 & 2", publication: "S.CHAND SCHOOL" },
    { sno: 2, name: "VYAKARAN VATIKA", publication: "MADHUBUN" },
    { sno: 3, name: "ENGLISH INSPIRE", publication: "BURLINGTON" },
    { sno: 4, name: "NEW MASTERING GRAMMAR", publication: "CREATIV KIDS" },
    { sno: 5, name: "NEW LEARNING COMPOSITE MATHS", publication: "S.CHAND SCHOOL" },
    { sno: 6, name: "FUN WAY OF EXPLORING SCIENCE", publication: "M.T.G" },
    { sno: 7, name: "MY BIG BOOK OF SOCIAL SCIENCE", publication: "RATNA SAGAR" },
    { sno: 8, name: "AI CONNECT", publication: "HEADWORD" },
    { sno: 9, name: "G.K TIMES", publication: "GOYAL BROTHER" },
    { sno: 10, name: "ENHANCED APTITUDE REASONING", publication: "BLUEPRINT" },
    { sno: 11, name: "MAGIC STROKES CURSIVE WRITING", publication: "GLOBAL RISE" },
    { sno: 12, name: "AKSHAR PRABH HINDI SHULEKH", publication: "SAMYAK" },
    { sno: 13, name: "ART SMART DRAWING", publication: "TAPSYA" },
    { sno: 14, name: "MY FIRST BOOK OF CONVERSATION", publication: "SURVI BOOKS" }
  ],

  "Class 4": [
    { sno: 1, name: "NEW MYLESTONE HINDI PART-1 & 2", publication: "S.CHAND SCHOOL" },
    { sno: 2, name: "VYAKARAN VATIKA", publication: "MADHUBUN" },
    { sno: 3, name: "ENGLISH INSPIRE", publication: "BURLINGTON" },
    { sno: 4, name: "NEW MASTERING GRAMMAR", publication: "CREATIV KIDS" },
    { sno: 5, name: "NEW LEARNING COMPOSITE MATHS", publication: "S.CHAND SCHOOL" },
    { sno: 6, name: "FUN WAY OF EXPLORING SCIENCE", publication: "M.T.G" },
    { sno: 7, name: "MY BIG BOOK OF SOCIAL SCIENCE", publication: "RATNA SAGAR" },
    { sno: 8, name: "AI CONNECT", publication: "HEADWORD" },
    { sno: 9, name: "G.K TIMES", publication: "GOYAL BROTHER" },
    { sno: 10, name: "ENHANCED APTITUDE REASONING", publication: "BLUEPRINT" },
    { sno: 11, name: "MAGIC STROKES CURSIVE WRITING", publication: "GLOBAL RISE" },
    { sno: 12, name: "AKSHAR PRABH HINDI SHULEKH", publication: "SAMYAK" },
    { sno: 13, name: "ART SMART DRAWING", publication: "TAPSYA" },
    { sno: 14, name: "MAP PRACTICES", publication: "RATNA SAGAR" },
    { sno: 15, name: "MY FIRST BOOK OF CONVERSATION", publication: "SURVI BOOKS" }
  ],

  "Class 5": [
    { sno: 1, name: "NEW MYLESTONE HINDI PART-1 & 2", publication: "S.CHAND SCHOOL" },
    { sno: 2, name: "VYAKARAN VATIKA", publication: "MADHUBUN" },
    { sno: 3, name: "ENGLISH INSPIRE", publication: "BURLINGTON" },
    { sno: 4, name: "NEW MASTERING GRAMMAR", publication: "CREATIV KIDS" },
    { sno: 5, name: "NEW LEARNING COMPOSITE MATHS", publication: "S.CHAND SCHOOL" },
    { sno: 6, name: "FUN WAY OF EXPLORING SCIENCE", publication: "M.T.G" },
    { sno: 7, name: "MY BIG BOOK OF SOCIAL SCIENCE", publication: "RATNA SAGAR" },
    { sno: 8, name: "AI CONNECT", publication: "HEADWORD" },
    { sno: 9, name: "G.K TIMES", publication: "GOYAL BROTHER" },
    { sno: 10, name: "ENHANCED APTITUDE REASONING", publication: "BLUEPRINT" },
    { sno: 11, name: "ANANTA SANSKRIT", publication: "HUDSON PRESS" },
    { sno: 12, name: "KANIKA SANSKRIT VYAKARAN", publication: "P.P PUBLICATION" },
    { sno: 13, name: "ART SMART DRAWING", publication: "TAPSYA" },
    { sno: 14, name: "MAP PRACTICES", publication: "RATNA SAGAR" },
    { sno: 15, name: "MY FIRST BOOK OF CONVERSATION", publication: "SURVI BOOKS" }
  ],

  "Class 6": [
    { sno: 1, name: "NEW MYLESTONE HINDI PART-1 & 2", publication: "S.CHAND SCHOOL" },
    { sno: 2, name: "VYAKARAN KUTUMB", publication: "SURVI SAPPHIRE" },
    { sno: 3, name: "ENGLISH INSPIRE", publication: "BURLINGTON" },
    { sno: 4, name: "WONDER ENGLISH GRAMMAR", publication: "DOUBLEW" },
    { sno: 5, name: "MATHEMATICS", publication: "BHARTI BHAWAN" },
    { sno: 6, name: "SCIENCE", publication: "S.CHAND SCHOOL" },
    { sno: 7, name: "SOCAIL SCIENCE", publication: "FUTURE KIDS" },
    { sno: 8, name: "HEXA ONE BYTE AT A TIME COMPUTER SCIENCE", publication: "UOLO" },
    { sno: 9, name: "G.K TIMES", publication: "GOYAL BROTHER" },
    { sno: 10, name: "REASONING MASTERY", publication: "M.T.G" }
  ],

  "Class 7": [
    { sno: 1, name: "NEW MYLESTONE HINDI PART-1 & 2", publication: "S.CHAND SCHOOL" },
    { sno: 2, name: "VYAKARAN KUTUMB", publication: "SURVI SAPPHIRE" },
    { sno: 3, name: "ENGLISH INSPIRE", publication: "BURLINGTON" },
    { sno: 4, name: "WONDER ENGLISH GRAMMAR", publication: "DOUBLEW" },
    { sno: 5, name: "MATHEMATICS R.S AGGARWAL PART-1", publication: "BHARTI BHAWAN" },
    { sno: 6, name: "MATHEMATICS R.S AGGARWAL PART-2", publication: "BHARTI BHAWAN" },
    { sno: 7, name: "SCIENCE", publication: "S.CHAND SCHOOL" },
    { sno: 8, name: "SOCAIL SCIENCE part-1 & 2", publication: "FUTURE KIDS" },
    { sno: 9, name: "HEXA ONE BYTE AT A TIME COMPUTER SCIENCE", publication: "UOLO" },
    { sno: 10, name: "G.K TIMES", publication: "GOYAL BROTHER" },
    { sno: 11, name: "REASONING MASTERY", publication: "M.T.G" },
    { sno: 12, name: "ANANTA SANSKRIT", publication: "HUDSON PRESS" },
    { sno: 13, name: "KANIKA SANSKRIT VYAKARAN", publication: "P.P PUBLICATION" },
    { sno: 14, name: "ART SMART DRAWING", publication: "TAPSYA" },
    { sno: 15, name: "MAP PRACTICES", publication: "RATNA SAGAR" },
    { sno: 16, name: "SCIENCE LAB MANUAL", publication: "DOUBLEW" },
    { sno: 17, name: "TALK ENGLISH CONVERSATION", publication: "KID'S WORLD" }
  ],

  "Class 8": [
    { sno: 1, name: "NEW MYLESTONE HINDI PART-1 & 2", publication: "S.CHAND SCHOOL" },
    { sno: 2, name: "VYAKARAN KUTUMB", publication: "SURVI SAPPHIRE" },
    { sno: 3, name: "ENGLISH INSPIRE", publication: "BURLINGTON" },
    { sno: 4, name: "WONDER ENGLISH GRAMMAR", publication: "DOUBLEW" },
    { sno: 5, name: "MATHEMATICS R.S AGGARWAL PART-1", publication: "BHARTI BHAWAN" },
    { sno: 6, name: "SCIENCE", publication: "S.CHAND SCHOOL" },
    { sno: 7, name: "SOCAIL SCIENCE PART-1", publication: "FUTURE KIDS" },
    { sno: 8, name: "HEXA ONE BYTE AT A TIME COMPUTER SCIENCE", publication: "UOLO" },
    { sno: 9, name: "G.K TIMES", publication: "GOYAL BROTHER" },
    { sno: 10, name: "REASONING MASTERY", publication: "M.T.G" },
    { sno: 11, name: "ANANTA SANSKRIT", publication: "HUDSON PRESS" },
    { sno: 12, name: "KANIKA SANSKRIT VYAKARAN", publication: "P.P PUBLICATION" },
    { sno: 13, name: "ART SMART DRAWING", publication: "TAPSYA" },
    { sno: 14, name: "MAP PRACTICES", publication: "RATNA SAGAR" },
    { sno: 15, name: "SCIENCE LAB MANUAL", publication: "DOUBLEW" },
    { sno: 16, name: "TALK ENGLISH CONVERSATION", publication: "KID'S WORLD" },
    { sno: 17, name: "MATHEMATICS R.S AGGARWAL PART-2", publication: "BHARTI BHAWAN" },
    { sno: 18, name: "SOCAIL SCIENCE PART-2", publication: "FUTURE KIDS" }
  ],

  "Class 9": [
    { sno: 1, name: "Dhanpat Rai Pub. R.D. Sharma & NCERT", publication: "" },
    { sno: 2, name: "Kaveri (NCERT)", publication: "Course :-B" },
    { sno: 3, name: "कक्षलतज् और कृलतका– । (NCERT)", publication: "कोस ि :–ए दहनद् ी वय् ाकरण (सरसव् ती प्रकाशन)" },
    { sno: 4, name: "Sanskrit", publication: "To be announced" },
    { sno: 5, name: "Sanskrit Gram.", publication: "To be announced" },
    { sno: 6, name: "Social Science", publication: "NCERT" },
    { sno: 7, name: "Science", publication: "S. Chand Pub. & NCERT" },
    { sno: 8, name: "Touch Pad Orange Pub.", publication: "(Optional) Head Word Publishing Company" },
    { sno: 9, name: "Urdu (Jaan Pehchan)", publication: "" }
  ],

  "Class 10": [
    { sno: 1, name: "Dhanpat Rai Pub. R.D. Sharma & NCERT", publication: "" },
    { sno: 2, name: "First Flight Footprints without feet", publication: "Course :-B" },
    { sno: 3, name: "कक्षलतज् –।। कृलतका – ।।", publication: "कोस ि :–ए दहनद् ी वय् ाकरण (सरसव् ती प्रकाशन)" },
    { sno: 4, name: "शेमुिी भाग – ।।", publication: "" },
    { sno: 5, name: "संस्कृत मखणका भाग – ।।", publication: "" },
    { sno: 6, name: "NCERT", publication: "" },
    { sno: 7, name: "S. Chand Pul. & NCERT", publication: "(Optional) Head Word Publishing Company" },
    { sno: 8, name: "Touch Pad Orange Pub.", publication: "" },
    { sno: 9, name: "गुलजार उदू ि नवाये उदू ि कवायद उदू ि", publication: "" }
  ]
};

const classes = [
  "Nursery", "LKG", "UKG",
  "Class 1", "Class 2", "Class 3",
  "Class 4", "Class 5", "Class 6",
  "Class 7", "Class 8", "Class 9", "Class 10"
];

export default function SchoolBooks() {
  const [activeClass, setActiveClass] = useState("Nursery");

  return (
    <div className="pt-[90px] bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">

      {/* HERO */}
      <div className="w-full h-[250px] md:h-[400px] relative">
        <img src={pic2} alt="school" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-black/50 backdrop-blur-lg px-10 py-5 rounded-2xl border border-white/20 shadow-xl">
            📚 Book List
          </h1>
        </div>
      </div>

      {/* TABS */}
      <div className="sticky top-[90px] z-20 bg-black/80 backdrop-blur-md py-6">
        <div className="flex justify-center flex-wrap gap-4 px-4 max-w-6xl mx-auto">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => setActiveClass(cls)}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border ${activeClass === cls
                  ? "bg-red-600 text-white border-red-400"
                  : "bg-white/5 text-gray-300 border-white/10"
                }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {/* BOOK LIST */}
      <div className="px-4 pt-6 pb-12">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">

          {/* HEADER */}
          <div className="grid grid-cols-3 px-6 py-4 bg-gradient-to-r from-red-700 to-red-900 text-white font-semibold">
            <div>S.No</div>
            <div>Book Name</div>
            <div>Publication</div>
          </div>

          {/* LIST */}
          {booksData[activeClass]?.map((book, index) => (
            <div
              key={book.sno}
              className={`grid grid-cols-3 items-center px-6 py-4 text-sm md:text-base ${index % 2 === 0 ? "bg-white/5" : "bg-transparent"
                } hover:bg-red-500/10`}
            >
              <div className="font-bold">{book.sno}</div>   {/* 👈 यहीं change करना है */}
              <div>{book.name}</div>
              <div className="text-gray-300">{book.publication}</div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
