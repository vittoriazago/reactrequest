import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import Variavel from './variaveis'

class Configuracoes extends Component {

    render() {
        return (
            <div>
                <section className="content-header">
                    <h1> Cadastro de Configurações</h1>
                </section>
                <div className="content" id="content">  
                    <Variavel id='var1'/>
                    <Variavel id='var2'/>
                <button type="submit" cols='12 4' className='btn btn-primary'>
                    <i className="fa fa-plus-circle"/>  Adicionar Variavel
                </button>
                 </div> 
            </div>
        );
    }
}

Configuracoes = reduxForm({form: 'configuracoesForm', destroyOnUnmount: false})(Configuracoes)
const mapDispatchToProps = dispatch => bindActionCreators({
    
}, dispatch)
export default connect(null, mapDispatchToProps)(Configuracoes)
