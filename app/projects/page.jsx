import Layout from "../components/layout/Layout"

export const metadata = {
  title: "Anuja Rahul - Projects",
};

const Projects = () => {
  return (
    <Layout>
      <div className="flex h-[60vh] flex-col flex-wrap items-center justify-center">
        <h1 className="text-balance text-center text-7xl text-white ">
          Projects page
        </h1>
        <p className="text-balance pt-5 text-center text-3xl text-white">
          Working on it...
        </p>
      </div>
    </Layout>
  )
}

export default Projects