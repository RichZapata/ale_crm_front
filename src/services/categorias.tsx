import supabase from "../utils/supabase"

export const getCategorias = async () => {
    const {data} = await supabase.from('categorias').select();
    return data;
} 