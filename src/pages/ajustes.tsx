
import { Inter } from 'next/font/google'
import Layout from '@/components/template/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Ajustes() {
  return (
    <div className={`
    
    `}>

     
        <Layout titulo='Ajustes' subtitulo='Aqui você ajusta as coisas' >
          Teste conteudo
          </Layout>
    </div>
  )
}
