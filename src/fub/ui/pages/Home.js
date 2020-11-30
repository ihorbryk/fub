import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { getEntities } from "../../services/entity";

export default function Home(props) {
  const entities = getEntities();

  return (
    <Layout>
      <div>
        <ul>
          {entities.map((entity) => (
            <li key={entity.slug}>
              <Link to={`/${entity.slug}`}>{entity.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
