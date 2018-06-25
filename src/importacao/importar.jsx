import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'

 class Importar extends Component {

    componentWillMount() {
        this.state = {url:'',model:''};
    }

    render() {   
        const { handleSubmit, readOnly } = this.props
        return (
            <div> 
                 <section className="content-header">
                    <h1> Importar</h1>
                </section>
                <div className="content" id="content">  
                    <form className="pure-form pure-form-aligned" onSubmit={handleSubmit}>
                      <div className='box-body'>
                        <fieldset>
                        <legend>Url do Swagger JSON</legend>
               
                        <Field name='url' component={LabelAndInput} readOnly={readOnly}
                                label='Url Swagger' cols='2 10' placeholder='Informe a url' />
                        </fieldset>
                       </div>
               
                        <div className='box-footer'>
                            <button type="submit" className='btn btn-primary'>Enviar</button>
                        </div>    
                    </form> 

                    <form className="pure-form pure-form-aligned" onSubmit={handleSubmit} > 
                        <div className='box-body' >                     
                            <div className='col-xs-12'>
                            <fieldset>
                                <legend>Escolher modelo já cadastrado</legend>
                                <div className='row'>
                                <div className='col-xs-12 col-sm-12'>
                                    <label>Modelos</label>
                                    <Field name='model' component='select' className='form-control'
                                            cols='12 2' value={this.state.model} 
                                            readOnly={readOnly} placeholder='Selecione um método' >
                                            <option value="ADM">API Administrativo</option>
                                            <option value="PETSTORE">API PetStore</option>
                                    </Field>
                                </div>
                                </div>
                            </fieldset>                        
                             </div>
                         </div>                      
                        
                        <div className='box-footer'>
                            <button type="submit" className='btn btn-primary'>Enviar</button>
                        </div> 
                    </form>
                 </div> 
            </div>
        )
    }
}

Importar = reduxForm({form: 'importarForm', destroyOnUnmount: false})(Importar)
const mapDispatchToProps = dispatch => bindActionCreators({
    
}, dispatch)
export default connect(null, mapDispatchToProps)(Importar)