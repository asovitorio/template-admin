import Layout from "@/components/template/Layout";
import useAuth from "@/data/hook/useAuth";

export default function Avatar() {
    const {usuario} = useAuth()
    console.log(usuario);
    
    return (
     
        <Layout
        titulo="Perfil"
        subtitulo="Edite os dados do seu perfil"
        >
 
  
        </Layout>
     
    );
  };