export interface OrderHistory {
    id: number;
    email: string;
    phoneNumber: number;
    address: string;
    restaurantName: string;
    restaurantAddress: string;
    orderDateAndTime: string;
    list: FoodList[];
    grandTotal: number;
  }
  
export interface FoodList {
    category: string;
    name: string;
    price: number;
    quantity: number;
  }
  