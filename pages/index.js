import Head from "next/head";
import ArticleList from "../components/ArticleList";
export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Ravenry BMS</title>
        <meta name="freelancing" content="freelancer, portfolio, matchmaking" />
      </Head>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );

//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
