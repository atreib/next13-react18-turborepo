import { PropsWithChildren } from "react";
import { Link } from "../../components/link";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <section className="">
      <div>
        <Link href="/">Back</Link>
      </div>
      <div>{children}</div>
    </section>
  );
}
