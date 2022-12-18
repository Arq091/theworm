import Head from "next/head"
import { Formik, Field, Form } from "formik"
import { useState } from "react"
import * as yup from "yup"

import "@primer/css/base/index.scss"
import "@primer/css/index.scss"

const schema = yup.object().shape({
  size: yup.number().required().moreThan(9).lessThan(121),
  length: yup.number().required().moreThan(4).lessThan(16),
  color: yup.number().required().moreThan(-1).lessThan(361),
})

export default function Home() {
  const [wormShit, setWormShit] = useState({
    size: 50,
    length: 6,
    color: 200,
  })
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      className="app"
      style={{
        backgroundColor: `hsl(${wormShit.color}, 85%, 90%)`,
        paddingLeft: `${isOpen ? "29rem" : "0"}`,
      }}
    >
      <Head>
        <title>Wiggly Worm - The Worm</title>
        <meta name="description" content="Just a worm." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="top-items">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler "
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => setIsOpen(true)}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
        <a href="https://github.com/arq091/theworm" target="blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler github"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="1.6"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
        </a>
      </nav>

      <section
        className="sidebar border"
        style={{ transform: `translateX(${isOpen ? "0%" : "-100%"})` }}
      >
        <header className="text-bold header">
          <h1>
            Wiggly Worm<sup>v2</sup>
          </h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setIsOpen(false)}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </header>
        <div>
          <h2 className="text-underline text-normal">
            What is this monstrosity?
          </h2>
          <p style={{ maxWidth: "25rem" }}>
            This <strong>thing </strong>
            is basically the second version of a stupid project I made like a
            year ago for fun. Yes, this is literally it. Btw, this thing has
            like 1000 bugs lol sorry.
          </p>
        </div>
        <div>
          <h2 className="text-underline text-normal">Settings</h2>
          <Formik
            initialValues={{
              size: 50,
              length: 6,
              color: 200,
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              setWormShit({
                size: values.size,
                length: values.length,
                color: values.color,
              })
            }}
          >
            <Form>
              <div className="mb-2">
                <label htmlFor="size">
                  Worm Block Size{" "}
                  <span className="color-fg-danger small text-normal">
                    min: 10 max: 120
                  </span>
                </label>
                <Field
                  id="size"
                  name="size"
                  placeholder="20"
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="length">
                  Worm Length{" "}
                  <span className="color-fg-danger small text-normal">
                    min: 5 max: 15
                  </span>
                </label>
                <Field
                  id="length"
                  name="length"
                  placeholder="6"
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="color">
                  Worm Color in Degrees{" "}
                  <span className="color-fg-danger small text-normal">
                    min: 0 max: 360
                  </span>
                </label>
                <Field
                  id="color"
                  name="color"
                  placeholder="200"
                  type="number"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary mr-2">
                Apply Changes
              </button>
            </Form>
          </Formik>
        </div>
      </section>
      <main className="board">
        <div className="worm">
          {[...Array(wormShit.length)].map((i, index) => {
            if (index != 0) {
              return (
                <div
                  className="worm__block"
                  key={i}
                  style={{
                    animationDelay: `${index * 200}ms, ${index * 100}ms`,
                    width: `${wormShit.size}px`,
                    height: `${wormShit.size}px`,
                    backgroundColor: `hsl(${wormShit.color}, 50%, ${
                      index * 2.6 + 35
                    }%)`,
                    borderRadius: `${wormShit.size / 7}px`,
                    left: `-${index * 0.25}rem`,
                  }}
                ></div>
              )
            } else {
              return (
                <div
                  className="worm__block"
                  key={i}
                  style={{
                    animationDelay: `${index * 200}ms, ${index * 100}ms`,
                    width: `${wormShit.size}px`,
                    height: `${wormShit.size}px`,
                    backgroundColor: `hsl(${wormShit.color}, 50%, ${
                      index * 3 + 35
                    }%)`,
                    borderRadius: `${wormShit.size / 7}px`,
                    padding: `${wormShit.size / 10}px`,
                  }}
                >
                  <div
                    className="eyes"
                    style={{
                      height: `${wormShit.size / 2.5}px`,
                      width: `${wormShit.size / 7}px`,
                      borderRadius: "inherit",
                    }}
                  ></div>
                  <div
                    className="mouth"
                    style={{
                      height: `${wormShit.size / 20}px`,
                      width: `${wormShit.size / 2}px`,
                      borderRadius: "inherit",
                      marginTop: `${wormShit.size / 5}px`,
                      marginLeft: `${(wormShit.size / 10) * -1}px`,
                    }}
                  ></div>
                </div>
              )
            }
          })}
        </div>
      </main>
    </div>
  )
}
