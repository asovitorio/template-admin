
import { Inter } from 'next/font/google'
import Layout from '@/components/template/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Notificacoes() {
  return (
    <div className={`
    
    `}>

     
        <Layout titulo='Notificações' subtitulo='Aqui tem suas notificações!' >
          Teste conteudo
          </Layout>
    </div>
  )
}
