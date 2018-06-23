import React, { Component } from 'react'; 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init, create, update, remove } from './requisicaoActions'
import FormularioRequisicao from './requisicaoForm'

class Requisicao extends Component {

    componentWillMount() {
        this.props.init()
    }
  
    render(){
      return (
        <div>
          <section className="content-header">
            <h1> Cadastro de Requisição</h1>
          </section>
          <div className="content" id="content">                            
              <FormularioRequisicao onSubmit={this.props.create}/>    
          </div>      
  
        </div>
      );
    }
  }
  
const mapDispatchToProps = dispatch => bindActionCreators({
    init, create, update, remove
}, dispatch)
export default connect(null, mapDispatchToProps)(Requisicao)