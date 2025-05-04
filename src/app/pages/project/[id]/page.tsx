"use client"

import { useParams } from "next/navigation";

const ProjectDetail = () => {
  const params = useParams();
  const { id } = params;
  return <div>{id}</div>;
};

export default ProjectDetail;
