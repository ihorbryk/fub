import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { getLayouts } from "../../services/layout";

export default function Home(props) {
  const layouts = getLayouts();

  return (
    <Layout title="Home">
      <div>
        <ul>
          {layouts.map((layout) => (
            <li key={layout.slug}>
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
