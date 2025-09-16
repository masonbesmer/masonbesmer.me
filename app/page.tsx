import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Hello, I&apos;m Mason Besmer
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Welcome to my personal website. This is built with the latest technologies 
            including Next.js 15, React 19, TypeScript, and Tailwind CSS 4.
          </p>
        </div>
      </div>
    </main>
  );
}
