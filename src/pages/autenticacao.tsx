// @flow
import { ErroMsgIcon, GoogleIcon } from '@/components/Icons'
import AuthInputs from '@/components/auth/AuthInput'
import useAuth from '@/data/hook/useAuth'

import { useEffect, useState } from 'react'
interface AutenticacaoProps {}
export default function Autenticacao(props: AutenticacaoProps) {
  const { login, loginGoogle, cadastrar } = useAuth()

  const [email, setEmail] = useState('')
  const [senha, setsenha] = useState('')
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [erro, setErro] = useState(false)

  function exibirErro(msg: any, tempoEmSegundos = 5) {
    setErro(msg)
    setTimeout(() => setErro(true), tempoEmSegundos * 1000)
  }

  async function submeter() {
    try {
      if (modo === 'login') {
        await login?.(email, senha)
      } else {
        await cadastrar?.(email, senha)
      }
    } catch (error) {
      if (error instanceof Error) exibirErro(error.message)
    }
  }
  return (
    <div
      className={`
      h-[100vh] w-full flex 
      items-center justify-center
     lg:bg-gradient-to-tr from-orange-700 to-yellow-300
    `}
    >
      <div
        className={`
    hidden md:block h-full w-full
      `}
      >
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da tela de autenticação"
          className={`
         h-screen w-full object-cover
         `}
        />
      </div>
      <div
        className={`
      w-screen placeholder:alignSelf: 'center', h-full lg:h-[70%] lg:w-1/2   flex flex-col lg:border rounded-lg
   lg:border-indigo-500 p-10 lg:bg-gray-50 m-10
    `}
      >
        <h1
          className="
      text-2xl font-bold mb-5"
        >
          {modo === 'login'
            ? 'Faça o Login na Plataforma'
            : 'Cadastre-se na Plataforma'}
        </h1>
        {erro ? (
          <div
            className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}
          >
            <ErroMsgIcon cor="text-white " />
            <span className="ml-3">{erro}</span>
          </div>
        ) : (
          false
        )}
        <AuthInputs
          type="email"
          label="Usuário"
          value={email}
          onChange={setEmail}
          placeholder="digite o Email"
        />
        <AuthInputs
          type="password"
          label="Senha"
          value={senha}
          onChange={setsenha}
          placeholder="digite o Senha"
        />
        <button
          onClick={submeter}
          className={`
      w-full rounded-lg py-3 px-4 mt-6
      bg-indigo-500 text-white
      `}
        >
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>
        <hr className="my-6 border-gray-400 w-full " />
        <button
          onClick={loginGoogle}
          className={`
      w-full rounded-lg py-1 mt-6 
       flex justify-center 
      `}
        >
          <span
            className={`
        w-14 h-14 rounded-full 
        justify-center items-center
        `}
          >
            <GoogleIcon altura={50} largura={50} />
          </span>
        </button>

        {modo === 'login' ? (
          <p
            className={`
        flex flex-col
        text-purple-500
        `}
          >
            Novo por aqui?
            <a
              onClick={() => setModo('cadastro')}
              className={`
          cursor-pointer text-blue-500 hover:text-blue-700
          font-semibold
          `}
            >
              Crie uma conta gratuitamente.
            </a>
          </p>
        ) : (
          <p
            className={`
              flex flex-col
              text-purple-500
              `}
          >
            Já possui conta?
            <a
              onClick={() => setModo('login')}
              className={`
                cursor-pointer text-blue-500 hover:text-blue-700
                font-semibold
                `}
            >
              Faça o login.
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
