import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">
        <section className="grid grid-cols-2 h-[60vh]">
          <div className="bg-[#03ddff31]  flex flex-col gap-4 justify-center items-center">
            <h1 className="font-bold text-3xl text-center">
              Your One and only Link shortner
            </h1>
            <p className="text-xl w-[30vw] pl-5 transition ">
              We are the most straightfoward URL Shortener in the world. Most of
              the url shorteners will track you or ask you to give your details
              for login. We understand your needs and hence we have created this
              URL shortener
            </p>
            <div className="flex gap-4">
              <Link href={"/shorten"}>
                <button
                  type="button"
                  className="text-white text-xl bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base px-4 py-2.5 text-center leading-5 rounded-lg cursor-pointer"
                >
                  Try Now
                </button>
              </Link>
              <Link href={"https://github.com/harsh-upla/compress-link.git"}>
                <button
                  type="button"
                  className="text-white text-xl bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base px-4 py-2.5 text-center leading-5 rounded-lg cursor-pointer"
                >
                  Github
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-[#03ddff31] relative flex justify-start">
            <Image className="" src={"/vector.svg"} alt="vector" fill />
          </div>
        </section>
      </main>
    </>
  );
}