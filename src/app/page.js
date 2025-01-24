import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen w-full   px-4">
        {/* Title Section */}
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
          Explore the Beauty of Anime
        </div>

        {/* Subtitle Section */}
        <p className="text-xl md:text-2xl lg:text-3xl text-center mb-6">
          Read the Latest Comic Adventures!
        </p>

        {/* Call-to-Action Button */}
        <Link href="/AllItems">
          <p className="bg-white text-purple-600 hover:text-purple-800 px-6 py-3 text-lg md:text-xl lg:text-2xl rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            Explore Now
          </p>
        </Link>
      </div>
    </>
  );
}
