import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuTree label='Inicio' icon='home'> 
            <MenuItem path='/importar'
                label='Importar' icon='upload' />
            <MenuItem path='/exportar'
                label='Exportar' icon='download' />
        </MenuTree>    
        <MenuTree label='API' icon='edit'>       
            <MenuItem path='configuracoes' label='Configurações' icon='cogs' />
            <MenuItem path='requisicao' label='Requisicao' icon='connectdevelop' />
        </MenuTree>
    </ul>
)