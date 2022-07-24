import { NavLink } from "react-router-dom";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: "30%",
    render: (text, record) => {
      return (
        <NavLink
          state={{
            userData: record,
          }}
          to={{
            pathname: `/edit`,
          }}
        >
          {text}
        </NavLink>
      );
    },
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    filters: [
      {
        text: "Male",
        value: "male",
      },
      {
        text: "Female",
        value: "female",
      },
    ],
    onFilter: (value, record) => record.gender.startsWith(value),
    filterSearch: true,
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
