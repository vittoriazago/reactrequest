import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'


import { init } from './requisicaoActions'
import LabelAndInput from '../common/form/labelAndInput'

class FormularioRequisicao extends Component {

  constructor() {
    super();    
    this.state = {path:'',host:'',method:'',resultBody:''};
  }

	render() {
    const { handleSubmit, readOnly } = this.props
    const boxBody = {
      backgroundColor: '#ffffff',
      marginBottom: '20px'
    };       
    const textareaStyle = {
      backgroundColor: '#f1f1f1'
    }
		return (
      <div> 
        <form className="pure-form pure-form-aligned" onSubmit={handleSubmit}>
          <div className='box-body'>
            <div className='col-xs-12'>
              <fieldset>
                <legend>Dados Requisição</legend>
                <div className='row'>
                  <Field name='host' component={LabelAndInput} readOnly={readOnly} label='Host' cols='12 4' value={this.state.host} placeholder='Informe o host' />
                  <Field name='path' value={this.state.path} component={LabelAndInput} type='text' readOnly={readOnly} label='Caminho' cols='12 4' placeholder='Informe o caminho' /> 
                  <div className='col-xs-12 col-sm-4'>
                    <label>Método</label>
                    <Field name='method' component='select' className='form-control'
                            cols='12 2' label='method' value={this.state.method} 
                            readOnly={readOnly} placeholder='Selecione um método' >
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                    </Field>
                  </div>
                  <div className='col-xs-12 col-sm-12'>
                    <label>Requisição</label>
                    <Field name='requestBody' value={this.state.requestBody} component='textarea' label='requestBody' className='form-group' placeholder='Requisição' />
                  </div>
                </div>
              </fieldset>
            </div>
          </div> 
          <div className='box-footer'>
            <button type="submit" className='btn btn-primary'>Enviar</button>
          </div>    
        </form> 
        
        <div className='box-body' style={boxBody}>
            <div className='col-xs-12'>
              <fieldset>
                <legend>Dados da Resposta</legend>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12'>
                    <label>Resposta</label>
                    <Field style={textareaStyle}  name='responseBody' value={this.state.responseBody} component='textarea' readOnly='readonly'
                            label='Resposta' cols='col-lg' 
                            placeholder='Resposta' />      
                  </div>
                </div>
              </fieldset>
            </div>
        </div> 
      </div> 
		);
  }
}



FormularioRequisicao = reduxForm({form: 'requisicaoForm', destroyOnUnmount: false})(FormularioRequisicao)
const selector = formValueSelector('requisicaoForm')
const mapStateToProps = state => ({
    responseBody: selector(state, 'responseBody'),
    path: selector(state, 'path'),
    host: selector(state, 'host'),
    method: selector(state, 'method')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormularioRequisicao)