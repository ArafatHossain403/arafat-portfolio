import { FiDownload } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin,} from 'react-icons/fa';

const Banner = () => {
    return (
        <div id='home'>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/QpxMjDH/IMG-6216.jpg" className="max-w-sm rounded-full shadow-2xl" />
    <div className="text-left">
      <h1 className="text-5xl font-bold">Full Stack Developer</h1>
      <p className="py-6">Hi, I am Arafat Hossain. A passionate Full Stack Developer based <br/> in Khulna, Bangladesh.</p>
      <div className='flex gap-5 text-lg my-4'>
      <a href="https://github.com/ArafatHossain403" target = "_blank" 
rel = "noopener noreferrer"> <AiFillGithub size={40}/></a>
      <a href="https://www.linkedin.com/in/arafat-hossain-82860a206/" target = "_blank" 
rel = "noopener noreferrer"> <FaLinkedin size={40}/></a>
      </div>
      <a href="/src/assets/arafathossain.resume.pdf" download><button className="btn "><FiDownload />Get Resume </button></a>
    </div>
  </div>
</div>
<div className='flex gap-6 w-3/4 mx-auto'>
  
  <p className='text-lg'>Tech Stack | </p>
  <div className='flex gap-6'>
  <img  className='' src="/src/assets/html.png" alt="" />
  <img src="/src/assets/css.png" alt="" />
  <img src="/src/assets/js.png" alt="" />
  <img src="/src/assets/tailwind.png" alt="" />
  <img src="/src/assets/node.png" alt="" />
  <img src="/src/assets/mongo.png" alt="" />
  <img src="/src/assets/express.png" alt="" />
  <img src="/src/assets/react.png" alt="" />
  
  </div>
  
</div>
           
            {/* <div className='h-[500px] bg-blue-500 text-center my-4' id='home'>
      Home
    </div> */}
            
        </div>
    );
};

export default Banner;