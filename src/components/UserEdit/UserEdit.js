import { Row, Typography, Button, Form, Input, Select } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { patchUserData } from "../../services/usersAPI";
import routes from "../../routes/routes";
import Container from "../Container/Container";
import { useEffect, useState } from "react";
import NoUserData from "./NoUserData";

const { Title } = Typography;
const { Option } = Select;

export default function UserEdit() {
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  useEffect(() => {
    if (data) {
      setUserData(data.userData);
    }
  }, [userData]);

  const showMessage = (data) => {
    if (data === 200) {
      toast.success(`User data changed successfully`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else {
      toast.error(`${data}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

  const onFinish = async (values) => {
    try {
      const result = await patchUserData(userData.id, values);
      showMessage(result);
      setTimeout(() => navigate(routes.users), 2000);
    } catch (error) {
      showMessage(error.message);
    }
  };

  return (
    <>
      <Container>
        {userData === null ? (
          <>
            <NoUserData setUserData={setUserData} />
          </>
        ) : (
          <>
            <Row justify="center">
              <Title>User edit</Title>
            </Row>
            <NavLink
              to={{
                pathname: `/users`,
              }}
            >
              Go to user list
            </NavLink>
            <Row justify="center">
              <Form
                name="basic"
                onFinish={onFinish}
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 18,
                }}
              >
                <Form.Item
                  label="Username"
                  name="name"
                  initialValue={userData.name}
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="E-mail"
                  initialValue={userData.email}
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="gender"
                  label="Gender"
                  initialValue={userData.gender}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select>
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="status"
                  label="Status"
                  initialValue={userData.status}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select>
                    <Option value="active">active</Option>
                    <Option value="inactive">inactive</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Row>
          </>
        )}
      </Container>
      <ToastContainer />
    </>
  );
}
