import axios from "axios";

const adminAuth = "http://localhost:2023/admin/";

interface adminData {
  companyName: string;
  companyEmail: string;
  yourName: string;
  password: string;
}

export const adminReg = async (data: adminData) => {
  return await axios
    .post(`${adminAuth}/register`, data)
    .then((res) => res.data);
};
