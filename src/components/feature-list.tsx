export const FeatureList = ({ features }: { features: string[] }) => {
  return (
    <div className="mt-4">
      <h3 className="text-md font-semibold text-emerald-400 mb-2">
        Fitur Utama:
      </h3>
      <ul className="list-disc list-inside space-y-1 text-sm text-zinc-300">
        {features.map((feature, idx) => (
          <li key={idx} className="ml-2">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};
