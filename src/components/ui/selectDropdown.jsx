export default function SelectDropdown({
  options = [],
  valueKey = 'value',
  labelKey = 'label',
  selectedValue,
  onChange,
  className = '',
}) {
  return (
    <select
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
      className={`border p-2 rounded w-full ${className}`}
    >
      {options.map((item) => (
        <option key={item[valueKey]} value={item[valueKey]}>
          {item[labelKey]}
        </option>
      ))}
    </select>
  );
}
