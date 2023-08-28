import useDados from "@/data/hook/useDados";
import ButtonsAlternarTema from "../ButtonsAlternarTema";
import Titulo  from "./Titulo";
import Avatar from "../Avatar";

interface CabecalhoProps{
    titulo:string;
    subtitulo:string;
}

export default function Cabecalho(props:CabecalhoProps) {
  const ctx = useDados()
  
  
  return (
    <div className={`flex ` }>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
      <div className={`flex flex-grow justify-end items-center gap-3`}>
        <ButtonsAlternarTema tema= {ctx.tema} alternarTema={ctx.alternarTema}/>
       <Avatar />
      </div>
    </div>
  );
};