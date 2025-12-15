import { ReactComponent as TwitterIcon } from "../assets/socials-icons/icons8-twitter.svg";
import { ReactComponent as SoundCloudIcon } from "../assets/socials-icons/icons8-soundcloud.svg";
import {ReactComponent as GoogleScholarIcon} from "../assets/socials-icons/icons8-google-scholar.svg";
import { ReactComponent as GitHubIcon } from "../assets/socials-icons/icons8-github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/socials-icons/icons8-linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/socials-icons/icons8-instagram.svg";
import { ReactComponent as EmailIcon } from "../assets/socials-icons/email-svgrepo-com.svg";
import ProfileImage from "../assets/images/profile-image.jpg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

function About() {
  const image = useRef();
  const scotch = useRef([]);
  const typedRef = useRef(null);

  useEffect(() => {
    image.current.classList.remove("scale-50");
    image.current.classList.add("rotate-3");
    scotch.current.forEach((scotchEl) => {
      scotchEl.classList.remove("opacity-0");
      scotchEl.classList.add("scale-x-[8]");
    });
  }, [image, scotch]);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Research Engineer", "Software Engineer", "DJ"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 pb-24 gap-x-8 lg:gap-y-4 md:gap-y-8 lg:grid-cols-2 px-4 md:px-16 lg:grid-rows-[auto_1fr]">
      <section className="col-start-1 row-start-2 lg:row-start-1 lg:row-end-3">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-800 mt-5 mb-3 dark:text-zinc-100 sm:text-5xl">
          Paul Pommer
        </h1>
        <div className="text-xl md:text-2xl font-semibold text-zinc-600 dark:text-zinc-400">
          <span ref={typedRef}></span>
        </div>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-7 mt-10 text-base">
          <p>
            Hi, I'm Paul. Thanks for visiting my website!
          </p>
          <p>
            I'm a senior research engineer at the <a href="https://dynamical-inference.ai/" target="_blank" rel="noopener noreferrer" className="text-primary-400">Dynamical Inference Lab</a> working on machine learning algorithms for representation learning and their application to neuroscience supervised by <a href="https://stes.io/" target="_blank" rel="noopener noreferrer" className="text-primary-400">Steffen Schneider</a>.
            Currently, I'm building core infrastructure for explainability research including a framework for empirical identifiability and consistency, software libraries & data engines around sparse autoencoder (SAE) training, and software for annotating and hosting concepts extracted by SAEs.
            I'm also interested in training transformers on brain data at scale to study how multi-modal neural datasets can be compressed into foundation models.
          </p>
          <p>
            I’m also a senior software engineer at <a href="https://ki-macht-schule.de/" target="_blank" rel="noopener noreferrer" className="text-primary-400">KI macht Schule</a>, a non-profit organization teaching machine learning basics to high school students.
            We provide teachers with modern teaching materials, AI tools, and infrastructure through our <a href="https://hub.schule/" target="_blank" rel="noopener noreferrer" className="text-primary-400">open teaching hub</a> and offer student courses and teacher trainings on AI in Germany, Switzerland, and Austria.
            We have a great network of volunteers in nine cities who do science outreach directly in schools.
            If you want to help educate the next generation of students and make them literate in AI, consider joining our team!
          </p>
          <p>
            Besides that, I'm a DJ performing under the alias <a href="https://soundcloud.com/pommerotti" target="_blank" rel="noopener noreferrer" className="text-primary-400">Pommerotti</a>.
            My favorite genres are Italo Body Music, Neo Italo Disco, Italo House, 90s Trance, and Progressive House.
          </p>
        </div>
      </section>
      <section className="pl-4 lg:pl-20">
        <div className="lg:col-start-2 max-w-xs lg:max-w-none pr-10 self-center  aspect-square  relative">
          <div className="relative min-w-[86px]	">
            {/* <div
              ref={(el) => (scotch.current[0] = el)}
              className="absolute top-[20%] -left-[5%] w-[6%] h-[9%]  z-10 -rotate-45 scotch-effect transition origin-left duration-1000 ease-in-out opacity-0 delay-[750ms]"
            ></div> */}
            <img
              ref={image}
              src={ProfileImage}
              alt="Profile"
              className="rounded-3xl overflow-hidden transition-transform duration-1000 ease-out-in scale-50"
            />
            {/* <div
              ref={(el) => (scotch.current[1] = el)}
              className="absolute bottom-[20%] -right-[5%] w-[6%] h-[9%]  z-10 -rotate-45 scotch-effect transition origin-right duration-1000 ease-in-out opacity-0 delay-[750ms]"
            ></div> */}
          </div>
        </div>
      </section>
      <section className="col-start-1 lg:col-start-2 lg:pl-20 mt-8 lg:mt-0">
        <ul className="flex flex-col text-zinc-200 text-sm w-full">
          {/* <li className="mb-5">
            <a
              className="flex items-center group transition hover:text-teal-500"
              href="https://scholar.google.de/citations?user="
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleScholarIcon className="fill-zinc-500 transition group-hover:fill-teal-500 w-6 h-6 mr-2" />
              <p className="transition font-semibold ml-2 text-zinc-800 group-hover:text-teal-500 dark:text-zinc-200 dark:group-hover:text-teal-500">
                Google Scholar
              </p>
            </a>
          </li> */}
          <li className="mb-5">
            <a
              className="flex items-center group transition hover:text-primary-400"
              href="https://linkedin.com/in/paul-pommer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="fill-zinc-500 transition group-hover:fill-primary-400 w-6 h-6 mr-2" />
              <p className="transition font-semibold ml-2 text-zinc-800 group-hover:text-primary-400 dark:text-zinc-200 dark:group-hover:text-primary-400">
                Follow on LinkedIn
              </p>
            </a>
          </li>
          <li className="mb-5">
            <a
              className="flex items-center group transition hover:text-primary-400"
              href="https://github.com/ppommer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="fill-zinc-500 transition group-hover:fill-primary-400 w-6 h-6 mr-2" />
              <p className="transition font-semibold ml-2 text-zinc-800 group-hover:text-primary-400 dark:text-zinc-200 dark:group-hover:text-primary-400">
                Follow on Github
              </p>
            </a>
          </li>
          <li className="mb-5">
            <a
              href="https://soundcloud.com/pommerotti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group transition hover:text-primary-400"
            >
              <SoundCloudIcon className="fill-zinc-500 transition group-hover:fill-primary-400 w-6 h-6 mr-2 " />
              <p className="transition font-semibold ml-2 text-zinc-800 group-hover:text-primary-400 dark:text-zinc-200 dark:group-hover:text-primary-400">
                Follow on SoundCloud
              </p>
            </a>
          </li>
          {/* <li className="mb-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group transition hover:text-teal-500"
            >
              <InstagramIcon className="fill-zinc-500 transition group-hover:fill-teal-500 w-6 h-6 mr-2 " />
              <p className="transition font-semibold ml-2 text-zinc-800 group-hover:text-teal-500 dark:text-zinc-200 dark:group-hover:text-teal-500">
                Follow on Instagram
              </p>
            </a>
          </li>
          <li className="mb-5 ">
            <a
              href="https://twitter.com"
              className="flex items-center group transition hover:text-teal-500 overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="fill-zinc-500 transition group-hover:fill-teal-500 w-6 h-6 mr-2" />

              <p className="transition font-semibold ml-2 text-zinc-800 group-hover:text-teal-500 dark:text-zinc-200 dark:group-hover:text-teal-500">
                Follow on Twitter
              </p>
            </a>
          </li> */}
          <li className="border-t pt-5 border-zinc-100 dark:border-zinc-700/40 pl-1">
            <a
              className="flex items-center group transition hover:text-primary-400"
              href="mailto:website@ppom.simplelogin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon className="fill-zinc-500 transition group-hover:fill-primary-400 w-5 h-5 mr-2" />
              <p className="transition font-semibold ml-2 text-zinc-800 group-hover:text-primary-400 dark:text-zinc-200 dark:group-hover:text-primary-400">
                Send an email
              </p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
