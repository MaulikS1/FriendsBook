
export interface IUserData {
    id: number;
    fname: string;
    lname: string;
    phone: string;
    address: {
      houseNumber: '';
      city: '';
      state: '';
      landmark: '';
    };
    payment: {
      name: '';
      cardNumber: '';
      month: '';
      year: '';
      cvv: '';
    };
    username: string;
    password: string;
    confirmpassword: string;
    email: string;
    orders: number[];
    totalCost: number;
    instantOrder: number;
  }
  