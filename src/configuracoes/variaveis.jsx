import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'


import LabelAndInput from '../common/form/labelAndInput'
import inputT from '../common/form/input'
class Variaveis extends Component {

  constructor() {
    super();    
    this.state = {name:'',value:''};
  }
  render(){      
    const { handleSubmit, readOnly, id } = this.props;
    const boxBody = {
        backgroundColor: '#ffffff',
        marginBottom: '20px'
      };  
      const boxCheck = {
        top: 30,
        left: 30,
        height: '25px',
        width: '25px',
        backgroundcolor: '#eee',
      };   
      return (
      <div>
          <fieldset>
            <div className='box-body' style={boxBody}>    
                <div className='col-xs-12 col-sm-1'>
                    <div className='form-group'>
                        <label >Usando</label>
                        <input name='use' type='checkbox' style={boxCheck} label='Em Uso' readOnly={readOnly} placeholder='' />
                    </div>
                </div>
                <Field name={`name-${id}`} component={LabelAndInput} readOnly={readOnly}
                   label='Nome'cols='12 4'  placeholder='Nome da variavel' />        
                <Field name={`value-${id}`}  component={LabelAndInput} readOnly={readOnly}
                    label='Valor'cols='12 4'  placeholder='Valor da variavel' />   
            </div>         
          </fieldset>
      </div>
      );
  }
}



Variaveis = reduxForm({form: 'variavelForm', destroyOnUnmount: false})(Variaveis)
const selector = formValueSelector('variavelForm')
const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Variaveis)