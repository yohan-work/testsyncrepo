"use client";

import Head from "next/head";

// export const metadata = {
//   title: "Term Data",
//   description: "Page with terms and descriptions",
// };

const termsData = [
  { term: "Term 1", description: "Description for Term 1" },
  { term: "Term 2", description: "Description for Term 2" },
  { term: "Term 3", description: "Description for Term 3" },
  { term: "Term 4", description: "Description for Term 4" },
  { term: "Term 5", description: "Description for Term 5" },
  { term: "Term 6", description: "Description for Term 6" },
];

export default function TermDataPage() {
  return (
    <div style={{ padding: "20px" }}>
      {/* <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head> */}

      <section style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Terms List</h1>
        <ul style={{ listStyleType: "disc", padding: "0" }}>
          {termsData.map((item, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>
              {item.term}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Term Description</h1>
        <p style={{ fontSize: "16px" }}>
          {termsData[0].description}
        </p>
      </section>
    </div>
  );
}