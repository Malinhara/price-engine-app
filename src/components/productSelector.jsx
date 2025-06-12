import SelectDropdown from "./ui/selectDropdown";


export default function ProductSelector({ selected, onChange, products }) {
  const handleChange = (value) => {
    const product = products.find((p) => p.name === value);
    onChange(product);
  };

  return (
    <SelectDropdown
      options={products}
      valueKey="name"
      labelKey="name"
      selectedValue={selected?.name}
      onChange={handleChange}
    />
  );
}
