import { getUser } from "./get-user";

export default async function Page({
  params,
}: {
  params: { personId: string };
}) {
  const { data: user } = await getUser({ id: params.personId });

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <ul>
        <li>ID: {user.id}</li>
        <li>Name: {user.name}</li>
      </ul>
    </div>
  );
}
