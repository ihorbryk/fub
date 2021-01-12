import React from "react";
import FeatherIcon from "feather-icons-react";

export default function NoDataForDisplay() {
  return (
    <div className="py-10 flex flex-col items-center rounded-lg text-gray-500">
      <FeatherIcon icon="inbox" size={100} />
      <div className="italic">No Data</div>
    </div>
  );
}
