import React from "react"

export default () => (
  <footer className="mb-8 mt-10 mr-2 ml-2 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
    <div className="text-center sm:text-left">
      <a
        className="m-3 sm:m-1"
        href="https://github.com/bonasunu"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      •
      <a
        className="m-3 sm:m-1"
        href="https://www.linkedin.com/in/bonasunu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      •
      <a
        className="m-3 sm:m-1"
        href="https://twitter.com/bonasunu"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </div>
    <div className="text-center sm:text-right sm:mr-2">
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
)
