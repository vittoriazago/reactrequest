import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

class Configuracoes extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <section className="content-header">
                    <h1> Cadastro de Configuracoes</h1>
                </section>
                <div className="content" id="content">  
                 <Field name='host' component={LabelAndInput} readOnly={readOnly}
                        label='Host' cols='2 10' placeholder='Informe o host' />
                 </div> 
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    
}, dispatch)
export default connect(null, mapDispatchToProps)(Configuracoes)
