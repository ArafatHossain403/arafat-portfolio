const About = () => {
  return (
    <div id="about">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/src/assets/about.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-left">
            <h2 className="">About Me</h2>
            <h1 className="text-5xl font-bold">
              A dedicated Front-end Developer based in Belgrade, Serbia.
            </h1>
            <p className="py-6">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
