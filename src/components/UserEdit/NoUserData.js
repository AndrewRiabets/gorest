import { Row, Typography, Button, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import { getUserDataById } from "../../services/usersAPI";
import { ToastContainer, toast } from "react-toastify";
const { Title } = Typography;

export default function NoUserData({ setUserData }) {
  const onSubmit = async (value) => {
    try {
      const result = await getUserDataById(value);
      setUserData(result);
    } catch (error) {
      showMessage(value);
      console.log(error);
    }
  };

  const showMessage = ({ userId }) => {
    toast.error(`User with id ${userId} not found:(`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  };

  return (
    <>
      <Row justify="center">
        <Title>You haven't selected a user to edit!</Title>
        <Button type="primary">
          <NavLink
            to={{
              pathname: `/users`,
            }}
          >
            Go to user list
          </NavLink>
        </Button>
      </Row>
      <Row justify="center">
        <Title level={2}>Or enter user id!</Title>
      </Row>
      <Row justify="center">
        <Form
          name="findById"
          onFinish={onSubmit}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 18,
          }}
        >
          <Form.Item
            label="UserId"
            name="userId"
            rules={[
              {
                required: true,
                message: "Please input user Id!",
              },
            ]}
          >
            <Input />
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
      <ToastContainer />
    </>
  );
}
