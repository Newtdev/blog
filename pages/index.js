// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { Fragment } from "react";
import { getClient } from "../lib/sanity.server";
import { SpecialEdition } from "./components/blog/Blog";
import { NewsUI } from "./components/shared/SharedComponent";

import { authorContext } from "../context/Author";
import { categoryQuery, postQuery, authorQuery } from "../api/Api";

function News({ data }) {
  const [specialPostData, setData] = useState({});

  const { postData, authorData, categoryData } = data;

  const displaySpecialEdition = useCallback(() => {
    categoryData.forEach(({ title, _id }) => {
      if (title === "Special Edition") {
        const otherData = postData.filter((data) => {
          const {
            categories: [{ _ref }],
          } = data;

          if (_ref === _id) {
            setData((prev) => {
              return { ...prev, dataOne: [data] };
            });
          } else if (_ref !== _id) {
            return data;
          }
        });
        setData((prev) => {
          return { ...prev, dataTwo: otherData };
        });
      }

      return;
    });
  }, [categoryData, postData]);

  useEffect(() => displaySpecialEdition(), [displaySpecialEdition]);

  const displaySpecialEdition_data = () => {
    return specialPostData.dataOne?.map((cur) => {
      return (
        <Fragment key={cur._id}>
          <SpecialEdition post={cur} />
        </Fragment>
      );
    });
  };
  const displayOtherNews = () => {
    return specialPostData.dataTwo?.map((cur) => {
      return (
        <Fragment key={cur._id}>
          <NewsUI post_data={cur} author={authorData} />
          <NewsUI post_data={cur} author={authorData} />
          <NewsUI post_data={cur} author={authorData} />
          <NewsUI post_data={cur} author={authorData} />
          <NewsUI post_data={cur} author={authorData} />
        </Fragment>
      );
    });
  };

  return (
    <authorContext.Provider value={authorData}>
      <main className='min-h-screen max-w-screen mt-4'>
        <article className='container mx-auto h-full w-full'>
          <div className='pb-16'>{displaySpecialEdition_data()}</div>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 md:grid-cols-2 mt-12 py-6 gap-x-2 gap-y-6 px-4 lg:w-[75%] mx-auto'>
            {displayOtherNews()}
          </div>
        </article>
      </main>
    </authorContext.Provider>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const post = await getClient(preview).fetch(postQuery);
  const author = await getClient(preview).fetch(authorQuery);
  const category = await getClient(preview).fetch(categoryQuery);

  const [postData, authorData, categoryData] = await Promise.all([
    post,
    author,
    category,
  ]);

  return {
    props: { data: { postData, authorData, categoryData } },
    // revalidate: 10, // In seconds
  };
};

export default News;

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }