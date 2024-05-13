
import { User } from "../models/user";
import supabase from "../utils/supabase";

export const getUsers = async (): Promise<User[]> => {
    const { data , error} = await supabase.from("users").select();
    if (error) throw error;
    return data
}