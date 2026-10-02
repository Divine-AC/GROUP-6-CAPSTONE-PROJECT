const stats = [
  { label: "Active Jobs", value: 5 },
  { label: "Total Applications", value: 42 },
  { label: "Shortlisted", value: 8 },
];

export default function Dashboard() {
  return (
    <div>
      <h1>Employer Dashboard</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h2>{s.value}</h2>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
