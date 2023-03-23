import { mockUsers } from "./../data";

function makeEndpointResult({ id }: { id: string }) {
  return {
    data: mockUsers.at(Number(id) - 1),
  };
}

export async function getUser({
  id,
}: {
  id: string;
}): Promise<ReturnType<typeof makeEndpointResult>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === "3") {
        reject(new Error("User is broken"));
      }

      resolve(makeEndpointResult({ id }));
    }, 3000);
  });
}
