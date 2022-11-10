import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  isPro?: boolean | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
