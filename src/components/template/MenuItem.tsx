import Link from 'next/link'

interface MenuItemProps {
  url?: string
  texto: string
  icon: any
  className?:string
  onclick?: (e: any) => void
}

export function MenuItem(props: MenuItemProps) {
  function renderizarLink() {
    return (
      <div
        className={`
    flex flex-col justify-center items-center
    h-20 w-20 
    `}
      >
        <span>{props.icon}</span>
        <span 
        className={`
        ${props.texto.length>7?'text-xs':'text-lg'}
        
        `}
        
        >{props.texto}</span>
      </div>
    )
  }
  return (
    <li
      className={`
   hover:bg-gray-100 
   cursor-pointer 
   dark:hover:bg-gray-700
  ${props.className}
    
        `}
      onClick={props.onclick}
    >
      {props.url ? (
        <Link href={props.url}>{renderizarLink()}</Link>
      ) : (
        renderizarLink()
      )}
    </li>
  )
}
