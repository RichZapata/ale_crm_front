import supabase from "../utils/supabase"

const getCategorias = async () => {
    const {data} = await supabase.from('categorias').select();
    return data;
} 