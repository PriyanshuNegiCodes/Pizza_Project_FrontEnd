export interface BillDetails {
    email: string;
    phoneNumber: number;
    address: string;
    restaurantName: string;
    restaurantAddress: string;
    list: FoodList[];
    grandTotal: number;
  }
  
export interface FoodList {
    category: string;
    name: string;
    price: number;
    quantity: number;
  }