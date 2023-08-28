import useAuth from '@/data/hook/useAuth'
import Link from 'next/link'

export default function Avatar() {
  const { usuario } = useAuth()

  const isImage = usuario?.imagemUrl=='null'?false:true

console.log(isImage,usuario?.imagemUrl );

  return (
    <div
      className={`
      rounded-full border-2 border-indigo-500 bg-white
      h-12 w-12 shadow-sm flex justify-center items-center
      `}
    >
      <Link href={'/perfil'}>
        <img
          src={usuario?.imagemUrl ==='null' || undefined ? '/images/avatar.png':usuario?.imagemUrl}
          alt="imagem do avatar do usuário"
          className={`
      rounded-full
      h-10 w-10 shadow-sm
      `}
        />
      </Link>
    </div>
  )
}
