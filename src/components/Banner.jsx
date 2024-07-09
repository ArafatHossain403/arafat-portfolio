import { FiDownload } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div id="home">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/tYYnQ8H/profile.jpg"
            className="max-w-sm rounded-full shadow-2xl"
          />
          <div className="text-left">
            <h1 className="text-5xl font-bold">Full Stack Developer</h1>
            <p className="py-6">
              Hi, I am Arafat Hossain. A passionate Full Stack Developer based{" "}
              <br /> in Khulna, Bangladesh.
            </p>
            <div className="flex gap-5 text-lg my-4">
              <a
                href="https://github.com/ArafatHossain403"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <AiFillGithub size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/arafat-hossain-82860a206/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaLinkedin size={40} />
              </a>
            </div>
            <a href="/src/assets/arafathossain.resume.pdf" download>
              <button className="btn ">
                <FiDownload />
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex gap-6 w-3/4 mx-auto my-5">
        <p className="text-xl font-serif font-bold">Tech Stack ||  
        <span className="font-bold text-green-600"> HTML </span>
        <span className="font-bold text-cyan-600"> |CSS </span>
        <span className="font-bold text-yellow-600"> |JavaScript</span>
        <span className="font-bold text-cyan-300"> |Tailwind</span>
        <span className="font-bold text-teal-600"> |Node.js</span>
        <span className="font-bold text-neutral-500"> |Express.js</span>
        <span className="font-bold text-green-500"> |MongoDB</span>
        <span className="font-bold text-yellow-600"> |TypeScript</span>
        <span className="font-bold text-cyan-300"> |Nextjs</span>
        <span className="font-bold text-teal-600"> |Nestjs</span>
        <span className="font-bold text-neutral-500">|React</span>
        <span className="font-bold text-green-500"> |Prisma</span>
        <span className="font-bold text-yellow-600"> |Graphql</span>
        <span className="font-bold text-cyan-300"> |Postgres</span>
        <span className="font-bold text-teal-600"> |Redux</span>
        <span className="font-bold text-neutral-500"> |Express.js</span>
        <span className="font-bold text-green-500"> |MongoDB</span>
       </p>
        {/* <img src="/src/assets/css.png" alt="" /> */}
        {/* <div className="flex gap-6">
         <img  src="/public/html.png" alt="" />
          <img src="/src/assets/css.png" alt="" />
          <img src="/src/assets/js.png" alt="" />
          <img src="/src/assets/tailwind.png" alt="" />
          <img src="/src/assets/node.png" alt="" />
          <img src="/src/assets/mongo.png" alt="" />
          <img src="/src/assets/express.png" alt="" />
          <img src="/src/assets/react.png" alt="" />
        </div> */}
      </div>

      {/* <div className='h-[500px] bg-blue-500 text-center my-4' id='home'>
      Home
    </div> */}
    </div>
  );
};

export default Banner;
