import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: number;
  name: string;
  color: string;
  price: number;
  stock: number;
  category: string;
  rating: number;
  reviews: number;
  imageUrl: string;
};

type ProductState = {
  products: Product[];
};

const initialState: ProductState = {
  products: [
    {
      id: 1,
      name: "Apple iPad Pro",
      color: "Silver",
      price: 1399.0,
      stock: 48,
      category: "Tablets",
      rating: 4.6,
      reviews: 55,
      imageUrl: "https://via.placeholder.com/40",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index >= 0) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const { setProducts, addProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
