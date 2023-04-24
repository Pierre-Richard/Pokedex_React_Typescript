import React, { createContext, ReactNode, useState } from "react";
import { Pokemon } from "../../Pokemon.type";
import { PokemonCard } from "../components/PokemonCard";
import { ShoppingCart } from "../components/ShoppingCart";

type DrawerContextProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type MuiDrawerContext = {
  getItemQuantity: (id: number) => number;
  addCartQuantity: (id: number) => void;
  cartQuantity: number;
  cartItemss: CartItem[];
  deleteCartItem: (id: number) => void;
};
export const MuiDrawerContexts = createContext({} as MuiDrawerContext);

export const MuiDrawerContextProvider = ({ children }: DrawerContextProps) => {
  const [cartItemss, setCartItems] = useState<CartItem[]>([]);

  // const addCart = (id: number) => {
  //   return setCartItems((prev: number[]) => ({ ...prev, [id]: prev[id] + 1 }));
  // };

  const cartQuantity = cartItemss.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id: number) => {
    return cartItemss.find((item) => item.id === id)?.quantity || 0;
  };
  const addCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const deleteCartItem = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };
  return (
    <MuiDrawerContexts.Provider
      value={{
        addCartQuantity,
        getItemQuantity,
        cartItemss,
        cartQuantity,
        deleteCartItem,
      }}
    >
      {children}
    </MuiDrawerContexts.Provider>
  );
};
