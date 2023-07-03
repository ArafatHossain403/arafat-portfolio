import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
  useEffect(()=> {
    AOS.init();
  }, [])
  return (
    <div id="about">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row w-3/4 mx-auto " data-aos="fade-right">
          <img
            src="https://i.ibb.co/kK3CdcD/pexels-andrew-neel-2312369.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-left">
            <h2 className="text-2xl font-bold text-teal-900">About Me</h2>
            <h1 className="text-5xl font-bold">
              A dedicated Full Stack Developer from khulna, Bangladesh.
            </h1>
            <p className="py-6">
            Efficiently design, develop, and deploy feature-rich web applications using the MERN stack to meet business goals, enhance user
experience, and drive growth. I aim to stay updated with the latest trends in web development, enabling me to deliver exceptional
results and exceed expectations.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
