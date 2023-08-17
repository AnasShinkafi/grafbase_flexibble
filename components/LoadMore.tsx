"use client"

import { useRouter } from "next/navigation";
import Button from "./Button";

type Props = {
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

const LoadMore = ({ startCursor, endCursor, hasNextPage, hasPreviousPage}: Props) => {
  <div className=""></div>
}

export default LoadMore