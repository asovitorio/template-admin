// @flow

import Logo from '../Logo'
import { NotificacoesIcon, CasaIcon, AjustesIcon, LogoutIcon,  } from '../Icons'
import { MenuItem } from './MenuItem'
import useAuth from '../../data/hook/useAuth'

interface MenuLateralProps {}

export default function MenuLateral(props: MenuLateralProps) {
  const {logout} = useAuth()
  return (
    <aside
      className={`
    flex flex-col  dark:bg-gray-900 dark:text-gray-200  
   
   
    `}
    >
      <div>
        <Logo titulo="<AleDev />" />
        </div>
        <ul className="flex-grow">
          <MenuItem url="/" texto="Home" icon={<CasaIcon cor='dark:text-gray-200'/> } />
          <MenuItem url="/ajustes" texto="Ajustes" icon={<AjustesIcon cor='dark:text-gray-200' />} />
          <MenuItem
            url="/notificacoes"
            texto="Notificações"
            icon={<NotificacoesIcon cor='dark:text-gray-200'/>}
          />
        
        </ul>
        <ul>
          <MenuItem
          className='text-red-500 dark:text-red-300 dark:hover:bg-red-700'
            texto="Sair"
            icon={<LogoutIcon cor='text-red-500 dark:text-red-300'/>}
            onclick={logout}
          />
        </ul>
    
    </aside>
  )
}
