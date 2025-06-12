export default function NumberInput({ value, onChange, placeholder, min = 0, className = '' }) {
  return (
    <input
      type="number"
      min={min}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder={placeholder}
      className={`border p-2 rounded w-32 ${className}`}
    />
  );
}