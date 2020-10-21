import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col min-h-screen">
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-h-full">
        <div className="m-3">
          <h1 className="text-3xl font-Consolas font-extrabold text-gray-800">
            Bonaventura Sunu
          </h1>
        </div>
        <div className="m-3 text-right p-3 font-serif text-md">
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label>
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                />{" "}
                Dark mode
              </label>
            )}
          </ThemeToggler>
        </div>
      </div>
      <main className="flex-grow">
        <div className="mt-8 grid gap-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 max-h-full">
          <div className="md:col-span-1">
            <img
              src="../../bon.jpeg"
              alt="profile"
              className="h-32 max-w-full rounded-md m-3"
            />
          </div>
          <div className="m-2 md:col-span-3">
            <p className="font-serif text-md mt-2">
              Hi, there!{" "}
              <span role="img" aria-label="hi">
                &#128075;
              </span>
            </p>
            <p className="font-serif text-md ">
              I'm a software developer based in Indonesia.
            </p>
            <p className="font-serif text-md mt-3">
              I build things on the web with React, Node.js, Express.js,
              PostgreSQL, and Sequelize.
            </p>
          </div>
        </div>
        <div className="m-3">
          <div className="mt-10">
            <h3 className="text-xl font-Consolas font-extrabold text-gray-800">
              A Little About Me
            </h3>
            <p className="mt-2 mb-3">
              I started to learn full stack development tutorials early in 2020.
              Then I decided to switch my career to become software developer
              and I've been documenting everything I learn ever since. I believe
              many of the routes we take in life should be on dirt paths into
              the unknown. In my life, I have explored several different paths
              all leading in different ventures, but the path that I’ve enjoyed
              and found the most fulfilling has been in technology and software
              engineering. When I'm not coding, I also watching NBA games,
              hanging out with my friends, read Kindle books, or recook
              Masterchef recipe.
            </p>
          </div>
          <h3 className="text-xl font-Consolas font-extrabold text-gray-800 mb-2 mt-10">
            A few projects I'm proud of
          </h3>
          <div>
            <a
              className="text-md font-Consolas font-extrabold text-gray-800 mb-2"
              href="https://github.com/bonasunu/pizzaSOS"
              target="_blank"
              rel="noopener noreferrer"
            >
              SOS Pizza!
            </a>
            <p className="mb-3">
              SOS Pizza is Alexa Skill for emergency declaration chat to
              Telegram via fake pizza order. I built this project using Amazon
              Alexa, NodeJS, ExpressJS, Axios, and Restful API.
            </p>
            <a
              className="text-md font-Consolas font-extrabold text-gray-800 mb-2"
              href="https://github.com/bonasunu/MDNLocalLibrary"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN Local Library
            </a>
            <p className="mb-3">
              MDN Local Library is web app to manage the catalog for a local
              library. I created this project to clone MDN (Mozilla Developer
              Network) Local Library using sequelize, postgreSQL, and jwt for
              authentication.{" "}
            </p>
            <a
              className="text-md font-Consolas font-extrabold text-gray-800 mb-2"
              href="https://github.com/bonasunu/fullstackopen.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fullstackopen.id
            </a>
            <p className="mb-3">
              MDN Local Library is web app to manage the catalog for a local
              library. I created this project to clone MDN (Mozilla Developer
              Network) Local Library using sequelize, postgreSQL, and jwt for
              authentication.{" "}
            </p>
          </div>
        </div>
        <div className="m-3">
          <h3 className="text-xl font-Consolas font-extrabold text-gray-800 mt-10">
            Get in touch
          </h3>
          <p className="mt-2">
            I hope you love the site, and if there's anything you want to talk
            about with me feel free to contact me. I'm happy to hear your
            comments, feedback, suggestions, or just say hi!
          </p>
        </div>
      </main>
      <footer className="mb-8 mt-8 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-h-full">
        <div>
          <a
            className="m-3"
            href="https://github.com/bonasunu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          •
          <a
            className="m-3"
            href="https://www.linkedin.com/in/bonasunu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          •
          <a
            className="m-3"
            href="https://twitter.com/bonasunu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <div className="text-right mr-2">
          <h3>
            Built on{" "}
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GatsbyJS
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
          </h3>
        </div>
      </footer>
    </div>
  )
}
