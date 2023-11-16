import React from "react";
import BootstrapCard from "../Card/Card";

function Jobs() {
  const jobs = [
    { id: 1, title: "Software engineer", description: "Responsible for developing and maintaining Web applications." },
    { id: 2, title: "Product manager", description: "Responsible for product planning and design." },
    // 更多岗位...
  ];

  return (
    <div className="container mt-3">
      <h1>Jobs</h1>
      {jobs.map(job => (
        <BootstrapCard key={job.id} title={job.title} content={job.description} />
      ))}
    </div>
  );
}

export default Jobs;