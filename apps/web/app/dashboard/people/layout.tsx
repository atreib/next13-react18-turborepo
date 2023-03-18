import { PropsWithChildren } from "react";
import { Button } from "ui";

export default function DashboardPeopleLayout({ children }: PropsWithChildren) {
  return (
    <section className="">
      <div>{children}</div>
      <div>
        <Button />
      </div>
    </section>
  );
}
