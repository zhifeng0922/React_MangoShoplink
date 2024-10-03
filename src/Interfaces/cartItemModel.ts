import menuItemModel from "./menuItemModel";

export default interface cartItemModel {
  id?: number;
  menuItemId?: number;
  menuItem?: menuItemModel;
  quantity?: number;
}

// export interface RootInterface {
//   id: number;
//   userId: string;
//   cartItems: any[];
//   cartTotal: number;
//   stripePaymentIntentId?: any;
//   clientSecret?: any;
// }
