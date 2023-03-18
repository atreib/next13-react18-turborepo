import { Link } from "../../../components/link";

export default function Page() {
  return (
    <ul>
      <li>
        <Link href="/dashboard/people/1">Person 1</Link>
      </li>
      <li>
        <Link href="/dashboard/people/2">Person 2</Link>
      </li>
      <li>
        <Link href="/dashboard/people/3">Person 3</Link>
      </li>
    </ul>
  );
}
