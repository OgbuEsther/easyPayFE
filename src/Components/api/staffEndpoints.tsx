import axios from "axios";

const staffAuth = "http://localhost:2023/staff";
export const live = "https://easypayendpoints.onrender.com"

export interface staffData {
  companyName: string;
  email: string;
  yourName: string;
  password: string;
  position: string;
  _id : string
}

// interface adminData {
//   companyName: string;
//   companyEmail: string;
//   yourName: string;
//   password: string;
//     _id: string;
// }


export interface login {
  email: string;
  companyName: string;
  password: string;
}

export const staffReg = async (id:any,data:any
 ) => {
  return await axios
    .post(`${live}/staffregister/${id}`, data)
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


export const getOneStaff = async(id:any) =>{
  return await axios.get(`${live}/staff/${id}`).then((res) => res.data);
  }