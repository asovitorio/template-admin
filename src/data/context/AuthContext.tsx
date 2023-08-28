import auth from '../../firebase/config'
import Usuario from '@/model/usuario'
import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import Cookies from 'js-cookie'

interface AuthContextProps {
  usuario?: Usuario
  carregando?: boolean
  login?: (email: string, senha: string) => Promise<void> 
  cadastrar?: (email: string, senha: string) => Promise<void> 
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: any): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken()
  return {
    uid: usuarioFirebase.uid,
    nome: String(usuarioFirebase.displayName),
    email: String(usuarioFirebase.email),
    token,
    provedor: String(usuarioFirebase.providerData[0]?.providerId),
    imagemUrl: String(usuarioFirebase.photoURL),
  }
}

function gerenciarCookie(logado: boolean) {
  if (logado) {
    Cookies.set('admin-template-ale-auth', logado + '', {
      expires: 7,
    })
  } else {
    Cookies.remove('admin-template-ale-auth')
  }
}

export function AuthProvider(props: any) {
  const [carregando, setCarregando] = useState(true)
  const [usuario, setUsuario] = useState<Usuario | undefined>()

  async function configurarSessao(usuarioFiereBase: any) {
    if (usuarioFiereBase?.email) {
      const usuario = await usuarioNormalizado(usuarioFiereBase)
      setUsuario(usuario)
      gerenciarCookie(true)
      setCarregando(false)
      return usuarioFiereBase.email
    } else {
      gerenciarCookie(false)
      setUsuario(undefined)
      setCarregando(false)
      return false
    }
  }

  async function loginGoogle() {
    try {
      setCarregando(true)
      const resp = await signInWithPopup(auth, new GoogleAuthProvider())
      await configurarSessao(resp.user)
      route.push('/')
    } finally {
      setCarregando(false)
    }
  }
  async function login(email: string, senha: string) {
    try {
      setCarregando(true)
      const resp = await signInWithEmailAndPassword(auth, email, senha)
      console.log(resp.user.photoURL);
      
      await configurarSessao(resp.user)
      route.push('/')
    } finally {
      setCarregando(false)
    }
  }
  async function cadastrar(email: string, senha: string) {
    try {
      setCarregando(true)
      const resp = await createUserWithEmailAndPassword(auth, email, senha)

      
      await configurarSessao(resp.user)
      route.push('/')
    } finally {
      setCarregando(false)
    }
  }

  async function logout() {
    try {
      setCarregando(true)
      await auth.signOut()
      await configurarSessao(null)
      route.push('/autenticacao')
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-ale-auth')) {
      const cancelar = auth.onIdTokenChanged(configurarSessao)
      return () => cancelar()
    } else {
      setCarregando(false)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ usuario, login, cadastrar, loginGoogle, logout, carregando }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
