"use client";
import {createContext, useContext} from "react";

const CheckoutContext = createContext<{
	sessionUrls?: {[key: string]: string};
} | null>(null);

export const useCheckout = () => useContext(CheckoutContext);
export const CheckoutProvider = CheckoutContext.Provider;
