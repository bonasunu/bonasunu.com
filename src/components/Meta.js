import React from "react"
import Helmet from "react-helmet"
import Meta from "../images/meta-bonasunu.png"

export default () => (
  <Helmet>
    <title>@bonasunu - Bonaventura Sunu | Software Developer</title>
    <meta
      name="title"
      content="@bonasunu - Bonaventura Sunu | Software Developer"
    />
    <meta
      name="description"
      content="Bonaventura Sunu is aspiring software developer. He created this site to documented his journey to become modern self-taught developer. He build things using React, NodeJS, ExpressJS, PostgreSQL"
    ></meta>

    {/* Open Graph / Facebook  */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.bonasunu.com/" />
    <meta
      property="og:title"
      content="@bonasunu - Bonaventura Sunu | Software Developer"
    />
    <meta
      property="og:description"
      content="Bonaventura Sunu is aspiring software developer. He created this site to documented his journey to become modern self-taught developer. He build things using React, NodeJS, ExpressJS, PostgreSQL"
    />
    <meta property="og:image" content={Meta} />

    {/* Twitter  */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.bonasunu.com/" />
    <meta
      property="twitter:title"
      content="@bonasunu - Bonaventura Sunu | Software Developer"
    />
    <meta
      property="twitter:description"
      content="Bonaventura Sunu is aspiring software developer. He created this site to documented his journey to become modern self-taught developer. He build things using React, NodeJS, ExpressJS, PostgreSQL"
    />
    <meta property="twitter:image" content={Meta}></meta>

    {/* favicon */}
    <link
      rel="apple-touch-icon-precomposed"
      sizes="57x57"
      href="apple-touch-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="114x114"
      href="apple-touch-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="72x72"
      href="apple-touch-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="144x144"
      href="apple-touch-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="60x60"
      href="apple-touch-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="120x120"
      href="apple-touch-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="76x76"
      href="apple-touch-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="152x152"
      href="apple-touch-icon-152x152.png"
    />
    <link
      rel="icon"
      type="image/png"
      href="favicon-196x196.png"
      sizes="196x196"
    />
    <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="&nbsp;" />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
  </Helmet>
)
