import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuTree label='Inicio' icon='home'> 
            <MenuItem path='/salvar'
                label='Salvar' icon='save' />
            <MenuItem path='/importar'
                label='Importar' icon='import' />
            <MenuItem path='/exportar'
                label='Exportar' icon='export' />
        </MenuTree>    
        <MenuTree label='API' icon='edit'>       
            <MenuItem path='configuracoes' label='Configurações' icon='conf' />
            <MenuItem path='requisicao' label='Requisicao' icon='dashboard' />
        </MenuTree>
    </ul>
)