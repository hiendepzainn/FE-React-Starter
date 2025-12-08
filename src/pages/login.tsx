import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import axios from "axios";

type FieldType = {
  username?: string;
  password?: string;
};

const LoginPage = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { username, password } = values;
    const response = await axios.post("http://localhost:8000/api/login", {
      username,
      password,
    });

    console.log("response:", response);
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
