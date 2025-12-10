import { ReactComponent as TwitterIcon } from "../assets/socials-icons/icons8-twitter.svg";
import { ReactComponent as GitHubIcon } from "../assets/socials-icons/icons8-github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/socials-icons/icons8-linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/socials-icons/icons8-instagram.svg";
import { ReactComponent as EmailIcon } from "../assets/socials-icons/email-svgrepo-com.svg";
import { useEffect, useRef } from "react";

const imageUrl =
  "https://nomorecopyright.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddtk9h9bc%2Fimage%2Fupload%2Fv1756001723%2Ftlwujlsl7jiqhy6qrgfx.webp&w=1200&q=75";

function About() {
  const image = useRef();
  const scotch = useRef([]);

  useEffect(() => {
    image.current.classList.remove("scale-50");
    image.current.classList.add("rotate-3");
    scotch.current.forEach((scotchEl) => {
      scotchEl.classList.remove("opacity-0");
      scotchEl.classList.add("scale-x-[8]");
    });
  }, [image, scotch]);

  return (
    <div className="grid grid-cols-1 pb-24 gap-x-8 lg:gap-y-4 md:gap-y-8 lg:grid-cols-2 px-4 md:px-16 lg:grid-rows-[auto_1fr]">
      <section className="col-start-1 row-start-2 lg:row-start-1 lg:row-end-3">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-800 my-5 dark:text-zinc-100 sm:text-5xl">
          I’m Spencer Sharp. I live in New York City, where I design the future.
        </h1>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-7 mt-10 text-base">
          <p>
            I’ve loved making things for as long as I can remember, and wrote my
            first program when I was 6 years old, just two weeks after my mom
            brought home the brand new Macintosh LC 550 that I taught myself to
            type on.
          </p>
          <p>
            The only thing I loved more than computers as a kid was space. When
            I was 8, I climbed the 40-foot oak tree at the back of our yard
            while wearing my older sister’s motorcycle helmet, counted down from
            three, and jumped — hoping the tree was tall enough that with just a
            bit of momentum I’d be able to get to orbit.
          </p>
          <p>
            The only thing I loved more than computers as a kid was space. When
            I was 8, I climbed the 40-foot oak tree at the back of our yard
            while wearing my older sister’s motorcycle helmet, counted down from
            three, and jumped — hoping the tree was tall enough that with just a
            bit of momentum I’d be able to get to orbit.
          </p>
          <p>
            Today, I’m the founder of Planetaria, where we’re working on
            civilian space suits and manned shuttle kits you can assemble at
            home so that the next generation of kids really can make it to orbit
            — from the comfort of their own backyards.
          </p>
        </div>
      </section>
      <section className="pl-4 lg:pl-20">
        <div className="lg:col-start-2 max-w-xs lg:max-w-none pr-10 self-center  aspect-square  relative">
          <div className="relative min-w-[86px]	">
            <div
              ref={(el) => (scotch.current[0] = el)}
              className="absolute top-[20%] -left-[5%] w-[6%] h-[9%]  z-10 -rotate-45 scotch-effect transition origin-left duration-1000 ease-in-out opacity-0 delay-[750ms]"
            ></div>
            <img
              ref={image}
              src={imageUrl}
              alt=""
              className="rounded-3xl overflow-hidden transition-transform duration-1000 ease-out-in scale-50"
            />
            <div
              ref={(el) => (scotch.current[1] = el)}
              className="absolute bottom-[20%] -right-[5%] w-[6%] h-[9%]  z-10 -rotate-45 scotch-effect transition origin-right duration-1000 ease-in-out opacity-0 delay-[750ms]"
            ></div>
          </div>
        </div>
      </section>
      <section className="col-start-1 lg:col-start-2 lg:pl-20 mt-8 lg:mt-0">
        <ul className="flex flex-col text-zinc-200 text-sm w-full">
          <li className="mb-5 ">
            <a
              href="https://www.twitter.com"
              className="flex items-center group transition hover:text-teal-500 overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="fill-zinc-500 transition group-hover:fill-teal-500 w-6 h-6 mr-2" />

              <p className="transition font-semibold ml-2 text-zinc-800 group-hover:text-teal-500 dark:text-zinc-200 dark:group-hover:text-teal-500">
                Follow on Twitter
              </p>
            </a>
          </li>

          <li className="mb-5">
            <a
              href="https://www.instagram.com"
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
          <li className="mb-5">
            <a
              className="flex items-center group transition hover:text-teal-500"
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="fill-zinc-500 transition group-hover:fill-teal-500 w-6 h-6 mr-2" />
              <p className="transition font-semibold ml-2 text-zinc-800 group-hover:text-teal-500 dark:text-zinc-200 dark:group-hover:text-teal-500">
                Follow on Github
              </p>
            </a>
          </li>
          <li className="mb-5">
            <a
              className="flex items-center group transition hover:text-teal-500"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="fill-zinc-500 transition group-hover:fill-teal-500 w-6 h-6 mr-2" />
              <p className="transition font-semibold ml-2 text-zinc-800 group-hover:text-teal-500 dark:text-zinc-200 dark:group-hover:text-teal-500">
                Follow on LinkedIn
              </p>
            </a>
          </li>
          <li className="border-t pt-5 border-zinc-100 dark:border-zinc-700/40 pl-1">
            <a
              className="flex items-center group transition hover:text-teal-500"
              href="mailto:spencer@planetaria.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon className="fill-zinc-500 transition group-hover:fill-teal-500 w-5 h-5 mr-2" />
              <p className="transition font-semibold ml-2 text-zinc-800 group-hover:text-teal-500 dark:text-zinc-200 dark:group-hover:text-teal-500">
                spencer@planetaria.tech
              </p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
