import { mockUsers } from "./data";

const mockEndpoint = {
  data: mockUsers,
};

export async function getUsers(): Promise<typeof mockEndpoint> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEndpoint);
    }, 3000);
  });
}
