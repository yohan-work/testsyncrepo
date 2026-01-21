const dummyItems = [
  {
    id: 1,
    name: "dummy title",
    status: "dummy status",
    price: "dummy price",
    updatedAt: "dummy date",
  },
  {
    id: 2,
    name: "dummy title",
    status: "dummy status",
    price: "dummy price",
    updatedAt: "dummy date",
  },
  {
    id: 3,
    name: "dummy title",
    status: "dummy status",
    price: "dummy price",
    updatedAt: "dummy date",
  },
  {
    id: 4,
    name: "dummy title",
    status: "dummy status",
    price: "dummy price",
    updatedAt: "dummy date",
  },
  {
    id: 5,
    name: "dummy title",
    status: "dummy status",
    price: "dummy price",
    updatedAt: "dummy date",
  },
  {
    id: 6,
    name: "dummy title",
    status: "dummy status",
    price: "dummy price",
    updatedAt: "dummy date",
  },
];

export default function Home() {
  return (
    <main>
      <h1>dummy</h1>
      <p>test repo</p>
      <section className="grid">
        {dummyItems.map((item) => (
          <article className="card" key={item.id}>
            <span className="badge">{item.status}</span>
            <strong>{item.name}</strong>
            <span className="price">{item.price}</span>
            <span className="meta">업데이트: {item.updatedAt}</span>
          </article>
        ))}
      </section>
    </main>
  );
}
