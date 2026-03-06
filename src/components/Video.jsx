export default function VideoSection() {
  const youtubeLink = "https://www.youtube.com/embed/e9NUOFUBy88";

  return (
    <section className="bg-black w-full min-h-screen flex items-center justify-center">
      <div className="w-full h-screen relative">

        {/* Heading Overlay */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            CAMPUS TOUR
          </h2>

          <div className="flex justify-center mt-4">
            <div className="w-20 h-1 bg-red-600 rounded-full"></div>
          </div>
        </div>

        {/* Video */}
        <iframe
          className="w-full h-full"
          src={youtubeLink}
          title="Campus Tour Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

      </div>
    </section>
  );
}