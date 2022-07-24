import { useState, useEffect } from "react";
import { Typography, Row, Table } from "antd";
import { getUsersData } from "../../services/usersAPI";
import Container from "../Container/Container";
import GenderSelect from "./GenderSelect";
import { columns } from "./tableOptions";
const { Title } = Typography;

export default function UsersList() {
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("all");
  const [usersData, setUsersData] = useState();

  async function fetchUsers(pageNumber) {
    setLoading(true);
    try {
      const response = await getUsersData(pageNumber, gender);
      setUsersData(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchUsers(1, gender);
  }, [gender]);

  const handleTableChange = (newPagination) => {
    fetchUsers(newPagination.current);
  };

  return (
    <Container>
      <Row justify="center">
        <Title>Users table</Title>
      </Row>
      <Row justify="end">
        <GenderSelect selectGender={setGender} />
      </Row>
      {usersData ? (
        <Table
          columns={columns}
          dataSource={usersData.users}
          rowKey="name"
          pagination={usersData.pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      ) : (
        <h2>Data is loading. Please wait</h2>
      )}
    </Container>
  );
}
