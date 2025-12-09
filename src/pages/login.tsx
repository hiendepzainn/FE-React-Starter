import type { FormProps } from "antd";
import { App, Button, Form, Input } from "antd";
import { loginAPI } from "../services/api";
import { useNavigate } from "react-router";

type FieldType = {
  username?: string;
  password?: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { notification } = App.useApp();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { username, password } = values;

    try {
      const response = await loginAPI(username!, password!);
      const access_token = response.data.data.access_token;
      localStorage.setItem("access_token", access_token);
      navigate("/");
    } catch (error: any) {
      const errorMessage = error.response.data.message;
      notification.error({
        message: "Notification",
        description: errorMessage,
        placement: "topRight",
      });
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ width: 600, padding: 50, margin: "auto" }}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
