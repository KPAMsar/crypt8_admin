import api from "../axios";
import { URL } from "../params";

export const LoginAdmin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const data = await api.post(`${URL}/login`, {
      email,
      password,
    });
    return data.data;

    console.log(data)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {

    throw error?.response?.data;

  }
};
