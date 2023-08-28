import useDados from '@/data/hook/useDados'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import MenuLateral from './MenuLateral'
import Image from 'next/image'
import loading from '/public/images/Ripple-1s-200px.gif'
import useAuth from '@/data/hook/useAuth'
import router from 'next/router'

interface LayoutProps {
  titulo: string
  subtitulo: string
  children?: any
}

export default function Layout(props: LayoutProps) {
  const { tema } = useDados()
  const { usuario, carregando } = useAuth()

  function renderizarConteudo() {
    return (
      <>
      
        <div
          className={`
      flex h-screen w-screen
      ${tema}
      `}
        >
          <MenuLateral />
          <div
            className={`
         flex flex-col bg-gray-300   
         w-full p-3    dark:bg-gray-800 dark:text-gray-200  
     `}
          >
            <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
            <Conteudo>{props.children}</Conteudo>
          </div>
        </div>
      </>
    )
  }

  function renderizarCarregando() {
    return (
      <div
        className={`
        flex justify-center items-center h-screen bg-gray-100
        `}
      >
        <Image
          src={loading}
          alt="spinner de carregamento enquando a pagina não é carregada!"
          priority
        />
      </div>
    )
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo()
  } else if (carregando) {
    return renderizarCarregando()
  } else {
    router.push('/autenticacao')
    return null
  }
}
