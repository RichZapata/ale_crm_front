import { Product } from "../models/product";
import supabase from "../utils/supabase";


export const getProducts = async (): Promise<Product[]> => {
    const { data , error} = await supabase.from("product").select();
    if (error) throw error;
    return data
}


export const saveProduct = async (product: Product): Promise<Product | null> => {
    const { data, error } = await supabase.from("product").insert([product]).select();
    if (error) {
        console.error("Error saving product:", error.message);
        return null;
    }
    if (data && data.length > 0) {
        return data[0];
    } else {
        return null;
    }
};
