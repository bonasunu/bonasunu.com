import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default () => (
  <div className="mt-8 mb-1 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
    <div className="m-3">
      <h1 className="text-3xl font-Consolas font-extrabold text-gray-800">
        Bonaventura Sunu
      </h1>
    </div>
    <div className="m-3 text-right p-3 font-serif text-md">
      {/* <a
        className="text-md font-Consolas font-extrabold mr-2 ml-5"
        href="https://blog.bonasunu.com"
      >
        Blogs
      </a>
      <a
        className="text-md font-Consolas font-extrabold mr-5 ml-3"
        href="/projects"
      >
        Projects
      </a> */}
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="switch ml-2">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            <span className="slider">
              {/* <span role="img" aria-label="hi">
                &#x1F319;
              </span> */}
            </span>
          </label>
        )}
      </ThemeToggler>
      <span className="ml-2">Dark Mode</span>
    </div>
  </div>
)
