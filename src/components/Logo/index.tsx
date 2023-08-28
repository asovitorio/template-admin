// @flow
interface LogoProps{
    titulo:string
}
export default function Logo(props: LogoProps) {
  return (
 
      <div className="flex justify-center items-center text-white font-semibold text-sm  h-20 w-20 bg-gradient-to-tr from-purple-800 to-blue-500">
      <span className="font-bold text-white text-sm bg-clip-text bg-gradient-to-r from-white
       to-purple-300">{props.titulo}</span>  
   
    </div>
  )
}
