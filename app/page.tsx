import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold text-white">
            Hello, I&apos;m Mason Besmer
          </h1>
          <p className="max-w-2xl text-lg text-gray-300">
            Welcome to my personal website. This is built with the latest
            technologies including Next.js 15, React 19, TypeScript, and
            Tailwind CSS 4.
          </p>
        </div>
      </div>
    </main>
  );
}
