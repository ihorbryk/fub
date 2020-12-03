import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { getLayouts } from "../../model";

export default function Home(props) {
  const layouts = getLayouts();

  return (
    <Layout>
      <div>
        <ul>
          {layouts.map((layout) => (
            <li key={layout.slug}>
              <Link to={`/${layout.slug}`}>{layout.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
