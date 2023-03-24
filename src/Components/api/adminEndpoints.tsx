import axios from "axios";

const adminAuth = "http://localhost:2023/admin";

interface adminData {
  companyName: string;
  companyEmail: string;
  yourName: string;
  password: string;
}

interface login {
  companyEmail: string;
  password: string;
}

export const adminReg = async ({
  companyName,
  companyEmail,
  yourName,
  password,
}: adminData) => {
  return await axios
    .post(`${adminAuth}/register`, {
      companyName,
      companyEmail,
      yourName,
      password,
    })
    .then((res) => res.data);
};

export const adminLogin = async ({ companyEmail, password }: login) => {
  return await axios
    .post(`${adminAuth}/login`, {
      companyEmail,
      password,
    })
    .then((res) => res.data);
};
