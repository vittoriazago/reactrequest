import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import PreVisualizacao from './previsualizacao'

class Exportar extends Component {

    render() {      
        const { handleSubmit, readOnly } = this.props
        return (
            <div> 
                 <section className="content-header">
                    <h1> Exportar</h1>
                </section>
                <div className="content" id="content">  
                    <form className="pure-form pure-form-aligned" onSubmit={handleSubmit}>
                      <div className='box-body'>
                        <fieldset>
                            <legend>Download</legend>               
                            <PreVisualizacao/>                           
                         </fieldset>
                       </div>
                        <div className='box-footer'>
                            <button type="submit" className='btn btn-primary'><i className="fa fa-download"/> Exportar Arquivo</button>
                        </div>    
                    </form> 

                 </div> 
            </div>
        )
    }
}

Exportar = reduxForm({form: 'exportarForm', destroyOnUnmount: false})(Exportar)
const mapDispatchToProps = dispatch => bindActionCreators({
    
}, dispatch)
export default connect(null, mapDispatchToProps)(Exportar)