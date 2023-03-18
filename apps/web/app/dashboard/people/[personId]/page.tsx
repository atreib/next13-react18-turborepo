export default function Page({ params }: { params: { personId: string } }) {
  const { personId } = params;
  return <div>Person {personId}</div>;
}
