import { PropsWithChildren } from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <section>
      <div className="pb-4">
        <Link href="/">Home</Link>
        {` `}
        {`>`} <Link href="/dashboard">Dashboard</Link>
      </div>
      <div>{children}</div>
    </section>
  );
}
