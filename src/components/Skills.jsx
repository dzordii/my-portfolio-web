export function Skills({ image, title, description }) {
  return (
    <div className="border-text text-text flex flex-col items-start gap-2 rounded-4xl border-1 p-6">
      <img className="w-8" src={image} />
      <h1 className="text-secondary text-start text-2xl font-bold">{title}</h1>
      <span className="text-start text-xs text-text">{description}</span>
    </div>
  );
}
