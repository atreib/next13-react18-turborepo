import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/dashboard/people">Click here to see all people</Link>
    </div>
  );
}
