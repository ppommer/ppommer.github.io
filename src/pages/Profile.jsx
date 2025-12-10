import React, { useRef } from "react";
import { ReactComponent as TwitterIcon } from "../assets/socials-icons//icons8-twitter.svg";
import { ReactComponent as GitHubIcon } from "../assets/socials-icons/icons8-github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/socials-icons/icons8-linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/socials-icons/icons8-instagram.svg";
import { ReactComponent as EmailIcon } from "../assets/socials-icons/email-svgrepo-com.svg";
import { ReactComponent as BagIcon } from "../assets/ui-icons/noun-work-bag-4681180.svg";
import PlanetariaIcon from "../assets/cv-icons/planetaria.ecd81ade.svg";
import AirbnbIcon from "../assets/cv-icons/airbnb.b4000690.svg";
import FacebookIcon from "../assets/cv-icons/facebook.dd9e7d48.svg";
import StarbucksIcon from "../assets/cv-icons/starbucks.4a5bd050.svg";

import CvListElement from "../components/CvListElement";
import ArticlePreview from "../components/ArticlePreview";

const dummyArticles = [
  {
    title: "Crafting a design system for a multiplanetary future",
    description:
      "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
    isoDate: "2022-08-19T21:15:30.000Z",
  },
  {
    title: "Engineering navigation systems for interplanetary travel",
    description:
      "Building reliable navigation for spacecraft requires precision beyond Earth's standards. Our team developed quantum gyroscopes that ensure accuracy even when GPS signals are billions of kilometers away.",
    isoDate: "2022-07-14T16:30:15.000Z",
  },
  {
    title: "Terraforming Mars: The design challenges of a new world",
    description:
      "Transforming the red planet into a habitable environment isn’t just a scientific endeavor—it’s a design revolution. We explore how architecture, technology, and ethics converge in humanity’s greatest experiment.",
    isoDate: "2022-01-03T09:42:00.000Z",
  },
];

const profileImageUrl =
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=128&q=75";

const imagesSlideshow = [
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=640&q=75",
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=640&q=75",
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&w=640&q=75",
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=640&q=75",
  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&w=640&q=75",
];

function Profile() {
  const emailInput = useRef(null);
  const onFormSubmit = (e) => {
    e.preventDefault();
    // redirect to thanks for subscribing
  };

  const onCVButtonClick = () => {
    // download the CV
  };

  return (
    <div className="md:px-10 lg:px-20 overflow-hidden sm:overflow-visible">
      <div className="px-4 ">
        <img
          src={profileImageUrl}
          alt="profile"
          className="aspect-auto h-full w-16 rounded-full mb-6"
        />
        <h1 className="text-zinc-800 dark:text-zinc-100 text-3xl sm:text-5xl font-bold w-full lg:w-4/6 mb-6">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base w-full lg:w-4/6 mb-6">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <ul className="flex gap-3 mb-8">
          <li className="mb-5">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-600 transition dark:hover:fill-zinc-300 " />
            </a>
          </li>

          <li className="mb-5">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-600 transition dark:hover:fill-zinc-300 " />
            </a>
          </li>
          <li className="mb-5">
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-600 transition dark:hover:fill-zinc-300 " />
            </a>
          </li>
          <li className="mb-5">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-600 transition dark:hover:fill-zinc-300 " />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-x-8">
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
          <img
            src={imagesSlideshow[0]}
            alt="plane"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
          <img
            src={imagesSlideshow[1]}
            alt="conference"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
          <img
            src={imagesSlideshow[2]}
            alt="computer"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-1">
          <img
            src={imagesSlideshow[3]}
            alt="mountain"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
          <img
            src={imagesSlideshow[4]}
            alt="mars"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 mt-24 mb-4 w-full">
        <div className="col-start-1">
          {dummyArticles.map((el) => (
            <ArticlePreview {...el} />
          ))}
        </div>
        <div className="lg:col-start-2 md:ml-10 px-4">
          <form
            onSubmit={onFormSubmit}
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mb-14"
          >
            <div className="flex items-center mb-4">
              <EmailIcon className="w-6 h-6 fill-zinc-400 dark:fill-zinc-700 mr-4" />
              <h1 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Stay up to date
              </h1>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>
            <div className="flex">
              <input
                ref={emailInput}
                required
                type="email"
                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                placeholder="Email address"
              />
              <button className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none">
                Join
              </button>
            </div>
          </form>
          <div className="w-full rounded-2xl mb-14  border border-zinc-100 p-6 dark:border-zinc-700/40 ">
            <div className="flex items-center">
              <div className="relative w-8 aspect-square mr-4">
                <BagIcon className="w-full fill-zinc-400 dark:fill-zinc-700  absolute" />
              </div>
              <h1 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Work
              </h1>
            </div>
            <ul className="w-full">
              <CvListElement
                svgIcon={PlanetariaIcon}
                company="Planetaria"
                position={"CEO"}
                years={"2019 - Present"}
              />
              <CvListElement
                svgIcon={AirbnbIcon}
                company="Airbnb"
                position={"Product Designer"}
                years={"2014 - 2019"}
              />
              <CvListElement
                svgIcon={FacebookIcon}
                company="Facebook"
                position={"iOS Software Engineer"}
                years={"2011 - 2014"}
              />
              <CvListElement
                svgIcon={StarbucksIcon}
                company="Starbucks"
                position={"Shift Supervisor"}
                years={"2008 - 2011"}
              />

              <button
                onClick={onCVButtonClick}
                className="w-full text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-800/100 hover transition-colors font-semibold  rounded-xl text-sm p-2"
              >
                Download CV
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
