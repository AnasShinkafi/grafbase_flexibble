import { UserProfile, ProjectInterface } from "@/common.types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  userId: string;
  projectId: string;
}

const RelatedProjects = async ({ userId, projectId}: Props ) => {
  return (
    <div className=""></div>
  )
}

export default RelatedProjects