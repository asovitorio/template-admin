import { LuaIcon, SolIcon } from '../Icons'

interface AlternarTemaProps {
  tema?: string
  alternarTema?: () => void
}
export default function ButtonsAlternarTema(props: AlternarTemaProps) {
  return props.tema === 'dark' ? (
    <div
      onClick={props.alternarTema}
      className={`
    hidden sm:flex cursor-pointer gap-2  items-center 
    bg-gradient-to-r from-orange-600 to-yellow-300 
    h-8 w-14 lg:w-28 px-2 text-gray-800 font-bold rounded-full
    `}
    >
      <div className={``}>
        <SolIcon />
      </div>
      <span className={`hidden lg:flex`}>Claro</span>
    </div>
  ) : (
    <div
      onClick={props.alternarTema}
      className={`
    hidden sm:flex cursor-pointer gap-2 justify-end items-center 
    bg-gradient-to-r from-blue-800 to-gray-900 
    h-8 w-14 lg:w-28 px-2 text-gray-200 font-bold rounded-full
    `}
    >
      <span
        className={`
      hidden lg:flex
   
      `}
      >
        Escuro
      </span>
      <div className={``}>
        <LuaIcon cor='text-yellow-500 bg-gray-900 rounded-full'/>
      </div>
    </div>
  )
}
