import { Select } from "antd";
const { Option } = Select;

export default function GendreSelect({ selectGender }) {
  const handleChange = (value) => {
    selectGender(value);
  };
  return (
    <>
      <Select
        defaultValue="Change gender"
        style={{
          width: 150,
        }}
        onChange={handleChange}
      >
        <Option value="male">male</Option>
        <Option value="female">female</Option>
        <Option value="all">all</Option>
      </Select>
    </>
  );
}
