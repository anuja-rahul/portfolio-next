import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
// import OGImage from "./components/res/images/logo-a.png";
// import "./App.scss";
// import "./components/layout/index.scss";

export default function Home() {
  return (
    <>
    <Layout>
      {/* <h1>Home page</h1> */}
      <Hero />
    </Layout>
    </>
  );
}
