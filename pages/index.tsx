import Head from "next/head";

import Navbar from "@/components/Navbar/Navbar";

export default function Home({ posts }: { posts: any }) {
  return (
    <>
      <Head>
        <title>
          Ayris Apart Otel | Muğla Milas Ören | Günlük Kiralık Daireler
        </title>
        <meta
          name="description"
          content="Ayris Apart Otel | Muğla Milas Ören | Günlük Kiralık Daireler"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar posts={posts} />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJF2YX1pGtvxQRz5hGZmsQN-E&key=${process.env.NEXT_PUBLIC_GA_API}`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
