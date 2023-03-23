import Link from "next/link";

export default function Page() {
  return (
    <section>
      <article>
        <h1>Hello!</h1>
        <p>Let{`'`}s explore the app dir and all its power!</p>
      </article>
      <div>
        <Link href="/dashboard">Access dashboard</Link>
      </div>
    </section>
  );
}
