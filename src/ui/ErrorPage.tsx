import React from "react";
export interface ErrorPageProps {
  message: any;
}
export default function ErrorPage({ message }: ErrorPageProps) {
  return <div>{message}</div>;
}
