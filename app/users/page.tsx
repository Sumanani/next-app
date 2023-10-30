import React from "react";
import UsersTable from "./UsersTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1 className="my-4">Users</h1>
      <Link href="/users/new" className="btn btn-accent text-white mb-4">
        Add User
      </Link>
      <UsersTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
