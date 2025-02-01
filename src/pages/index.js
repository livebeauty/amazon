import Head from "next/head";

import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { fetchProducts } from "../lib/api";
import { Header } from "../components/header";
import Footer from "../components/Footer";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* ----Header---- */}
      <Header />

      {/* ----Content ---- */}
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>

      <Footer/>
    </div>
  );
}

// ✅ Fetch data from FakeStore API at request time (SSR)
export async function getServerSideProps() {
  const products = await fetchProducts();
  return { props: { products } };
}
