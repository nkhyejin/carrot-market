import type { NextPage } from "next";
import Layout from "../../components/layout";

const Live: NextPage = () => {
  return (
    <Layout hasTabBar title="라이브">
      <div className="py-10 px-4 space-y-4 divide-y-2">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="pt-4">
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <h3 className=" text-gray-700 text-lg mt-2">
              Let&apos;s try potatos
            </h3>
          </div>
        ))}
        <button className="fixed hover:bg-orange-500 cursor-pointer transition-colors bottom-24 right-5 bg-orange-400 rounded-full p-4 text-white shadow-xl border-transparent  ">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Live;
