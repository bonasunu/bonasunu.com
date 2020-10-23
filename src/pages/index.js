import React from "react"
import Bon from "../images/bon.jpeg"
import Meta from "../components/Meta"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col min-h-screen">
      <Meta />
      <Header />
      <main className="flex-grow">
        <div className="mt-8 grid gap-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 max-h-full">
          <div className="md:col-span-1">
            <img
              src={Bon}
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
          <Projects />
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
      <Footer />
    </div>
  )
}
