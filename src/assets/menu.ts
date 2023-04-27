  export interface Orders {
    restaurantName: string;
    restaurantAddress: string;
    foodItemsList: FoodItems[];
  }
  
  export interface FoodItems {
    category: string;
    name: string;
    price: number;
  }