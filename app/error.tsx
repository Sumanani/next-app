"use client";
import React from "react";

interface Props {
  error: Error;
}

const ErrorPage = ({ error }: Props) => {
  console.log(error);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <p>An unexpected error occured.</p>
    </div>
  );
};

export default ErrorPage;
