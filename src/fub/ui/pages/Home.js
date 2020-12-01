import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { getModels } from "../../services/model";

export default function Home(props) {
  const models = getModels();

  return (
    <Layout>
      <div>
        <ul>
          {models.map((model) => (
            <li key={model.slug}>
              <Link to={`/${model.slug}`}>{model.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
