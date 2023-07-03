import { AiFillGithub } from "react-icons/ai";
import { BsCloudArrowUp } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Projects = () => {
  useEffect(()=> {
    AOS.init();
  }, [])
  return (
    <div id="project">
      <div className="mt-6">
        <h1 className="text-4xl font-bold text-teal-900">Projects</h1>
        <p>Every projects with a unique touch of work.</p>
      </div>
      <div className=" my-7 hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-3/4 mx-auto" data-aos="fade-left">
          <img
            src="https://i.ibb.co/qBWPfg1/fluentrix-client-web-app.png"
            className="h-[300px] max-w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">fluentrix</h1>
            <p className="py-6">
              It is an online course platform where students can learn different
              types of languages with enrollment methods and have their
              dashboard to see enrolled classes, payment history also delete the
              class.
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/ArafatHossain403/fluentrix-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">
                  github Client <AiFillGithub size={20} />
                </button>
              </a>
              <a
                href="https://github.com/ArafatHossain403/fluentrix-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">
                  github server <AiFillGithub size={20} />
                </button>
              </a>
              <a
                href="https://fluentrix-client.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">
                  Live Site <BsCloudArrowUp size={20} />
                </button>
              </a>
            </div>
          </div>
        </div>

        
      </div>

      <div className="my-7 hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row w-3/4 mx-auto " data-aos="fade-right">
          <img
            src="https://i.ibb.co/djmbqCX/toy-biz-client-web-app-1.png"
            className="h-[300px] max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">Toy-Biz</h1>
            <p className="py-6">
              ToyBiz is an e-commerce single-page application where movie toys
              can sell and any user can add the toys in a cart.  Perform Login
              system and Registration system and used a private route to add the
              toys to the cart only logged or registered users can add the toys.
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/ArafatHossain403/ToyBiz-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn ">
                  github Client <AiFillGithub size={20} />
                </button>
              </a>
              <a
                href="https://github.com/ArafatHossain403/ToyBiz-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn ">
                  github server <AiFillGithub size={20} />
                </button>
              </a>
              <a
                href="https://toy-biz-client.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn ">
                  Live Site <BsCloudArrowUp size={20} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-7 hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse  w-3/4 mx-auto" data-aos="fade-left">
          <img
            src="https://i.ibb.co/Rbd58Rh/desi-chefs-recipes-web-app.png"
            className="max-w-sm  h-[300px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">Desi-Chefs-Recipes</h1>
            <p className="py-6">
              Users can search different Bengali chefs' recipes and also the
              chefs' total recipes.  When the user wants to see the recipe
              details user must have to log in or register to the site and the
              user can add their favorite item to the wishlist.
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/ArafatHossain403/Desi-chefs-recipes-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn ">
                  github Client <AiFillGithub size={20} />
                </button>
              </a>
              <a
                href="https://github.com/ArafatHossain403/Desi-chefs-recipes-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">
                  github server <AiFillGithub size={20} />
                </button>
              </a>
              <a
                href="https://desi-chefs-recipes.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">
                  Live Site <BsCloudArrowUp size={20} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
