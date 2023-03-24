import axios from "axios";

const staffAuth = "http://localhost:2023/staff";

interface staffData {
  companyName: string;
  email: string;
  yourName: string;
  password: string;
  position: string;
}

export interface login {
  email: string;
  companyName: string;
  password: string;
}

export const staffReg = async ({
  companyName,
  email,
  yourName,
  password,
  position,
}: staffData) => {
  return await axios
    .post(`${staffAuth}/staffregister`, {
      companyName,
      email,
      yourName,
      password,
      position,
    })
    .then((res) => res.data);
};

export const loginClient = async ({ email, companyName, password }: login) => {
  return await axios
    .post(`${staffAuth}/stafflogin`, { email, companyName, password })
    .then((res) => res.data);
};

export const getAllClients = async () => {
  return await axios.get(`${staffAuth}/`).then((res) => res.data);
};
