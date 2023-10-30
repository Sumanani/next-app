"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUsersPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Add User Page</h1>
      <button
        onClick={() => router.push("/users")}
        className="btn btn-info text-white"
      >
        Create
      </button>
    </div>
  );
};

export default NewUsersPage;
