import React from "react"
// import Meta from "../components/Meta"
// import Header from "../components/Header"
// import Footer from "../components/Footer"

export default () => (
  <div>
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
        SOS Pizza is Alexa Skill for emergency declaration chat to Telegram via
        fake pizza order. I built this project using Amazon Alexa, NodeJS,
        ExpressJS, Axios, and Restful API.
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
        MDN Local Library is web app to manage the catalog for a local library.
        I created this project to clone MDN (Mozilla Developer Network) Local
        Library using sequelize, postgreSQL, and jwt for authentication.{" "}
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
        MDN Local Library is web app to manage the catalog for a local library.
        I created this project to clone MDN (Mozilla Developer Network) Local
        Library using sequelize, postgreSQL, and jwt for authentication.{" "}
      </p>
    </div>
  </div>
)
