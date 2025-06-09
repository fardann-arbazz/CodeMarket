export const Requirements = ({ items }: { items: string[] }) => {
  return (
    <div className="mt-6">
      <h3 className="text-md font-semibold text-sky-400 mb-2">
        Kebutuhan Sistem:
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-400">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
