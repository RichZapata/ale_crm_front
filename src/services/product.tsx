import { Product } from "../models/product";
import supabase from "../utils/supabase";


export const getProducts = async (): Promise<Product[]> => {
    const { data , error} = await supabase.from("product").select();
    if (error) throw error;
    return data
}