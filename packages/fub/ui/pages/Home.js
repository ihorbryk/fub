import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { getLayouts } from "../../services/layout";

export default function Home(props) {
  const layouts = getLayouts();

  return (
    <Layout title="Home">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <ul className="bg-white divide-y">
          {layouts.map((layout) => (
            <li key={layout.slug} className="px-6 py-4">
              <Link
                className="text-blue-500 hover:text-blue-400"
                to={`/${layout.slug}`}
              >
                {layout.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
