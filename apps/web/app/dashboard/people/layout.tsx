import { PropsWithChildren } from "react";
import Link from "next/link";
import { getUsers } from "./get-users";

export default async function DashboardPeopleLayout({
  children,
}: PropsWithChildren) {
  const { data: users } = await getUsers();

  return (
    <section className="flex">
      <div className="min-w-[20%]">
        <ul>
          <li className="font-bold">People</li>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/dashboard/people/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>{children}</div>
    </section>
  );
}
