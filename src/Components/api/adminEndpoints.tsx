import axios from "axios";

// const adminAuth = "http://localhost:2023/admin";
export const live = "https://easypayendpoints.onrender.com/admin";

interface adminData {
  companyname: string;
  companyEmail: string;
  yourName: string;
  password: string;
}
interface iPay {
  cardNumber: string, amount:number, cvv: string, expireMonth: string, expireYear: string, id:string
}

interface login {
  companyEmail: string;
  password: string;
  companyname:string
}

interface iPay {
  cardNumber: string;
  amount: number;
  cvv: string;
  expireMonth: string;
  expireYear: string;
  id: string;
}

export const adminPayIn = async ({
  cardNumber,
  amount,
  cvv,
  expireMonth,
  expireYear,
  
}: iPay, id: string) => {
  return await axios
    .patch(`https://easypayendpoints.onrender.com/pay/pay/${id}`, {
      cardNumber,
      amount,
      cvv,
      expireMonth,
      expireYear,
    })
    .then((res) => res.data);
};

export const adminReg = async (data: adminData) => {
  return await axios.post(`${live}/register`, data).then((res) => res.data);
};

export const adminLogin = async ({ companyEmail, password , companyname }: login) => {
  return await axios
    .post(`${live}/login`, {
      companyEmail,
      password,
      companyname
    })
    .then((res) => res.data);
};
export const getOneAdmin = async (id: any) => {
  return await axios.get(`${live}/${id}`).then((res) => res.data);
};

