import React from "react";
import Layout from "../Layout";
import FeatherIcon from "feather-icons-react";

export default function NoDataForDisplay() {
  return (
    <Layout title="No data for display">
      <div className="py-10 flex flex-col items-center border rounded-lg text-gray-500">
        <FeatherIcon icon="inbox" size={100} />
        <div className="italic">No Data</div>
      </div>
    </Layout>
  );
}
