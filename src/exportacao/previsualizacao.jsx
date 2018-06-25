import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

class PreVisualizacao extends Component {

  constructor() {
    super();   
    var sample = {"host" : "{{host}}","port" : "{{port}}","basePath" : "/administracao", "requests" : [ {
                "path" : "/cidade",  "method" : "get",
                "tags" : [ 
                    "Cidade", "Endereço"
                ],
                "summary" : "Listar cidades por estado", "description" : "Esta consulta é paginada.",
                "operationId" : "Cidade_Get", "consumes" : [],
                "produces" : [ "application/json"],
                "parameters" : [ 
                    {
                        "name" : "numeroPagina",
                        "in" : "query",
                        "description" : "Número da página desejada. Se não for informada, será considerado o valor 1.",
                        "required" : false,
                        "type" : "integer",
                        "format" : "int32",
                        "default" : "1"
                    }, 
                    {
                        "name" : "tamanhoPagina",
                        "in" : "query",
                        "description" : "Quantidade de registros por página. Se não for informada, será considerado o valor 50.",
                        "required" : false,
                        "type" : "integer",
                        "format" : "int32",
                        "default" : "50"
                    }, 
                    {
                        "name" : "UF",
                        "in" : "header",
                        "description" : "Sigla do estado desejado para filtro",
                        "required" : true,
                        "type" : "string",
                        "default" : ""
                    }
                ],
                "responses" : [ 
                    {
                        "statuscode" : "500",
                        "description" : "Erro interno da aplicação."
                    }, 
                    {
                        "statuscode" : "400",
                        "description" : "UF inválida."
                    }, 
                    {
                        "statuscode" : "404",
                        "description" : "UF não localizada."
                    }, 
                    {
                        "statuscode" : "200",
                        "description" : "Lista de cidades.",
                        "schema" : {
                            "type" : "array",
                            "return" : "CidadeDTO"
                        }
                    }
                ],
                "security" : [ 
                    {
                        "Authorization" : []
                    }
                ]
            }
        ],
        "definitions" : [ 
            {
                "name" : "CidadeDTO",
                "type" : "object",
                "properties" : [ 
                    {
                        "name" : "IdCidade",
                        "format" : "uuid",
                        "type" : "string",
                        "example" : "00000000-0000-0000-0000-000000000000"
                    }, 
                    {
                        "name" : "Descricao",
                        "type" : "string"
                    }, 
                    {
                        "name" : "IdUnidadeFederativa",
                        "format" : "uuid",
                        "type" : "string",
                        "example" : "00000000-0000-0000-0000-000000000000"
                    }, 
                    {
                        "name" : "SiglaUnidadeFederativa",
                        "type" : "string"
                    }
                ]
            }
        ],
        "variables" : [ {"host" : "localhost"},  { "port" : "8080" }
        ]};
     this.state = {file: JSON.stringify(sample,undefined, 2)}; 
  }
  render(){         
    const textareaStyle = {
        backgroundColor: '#f1f1f1',
        height: '500px',
      }   
      return (
      <div>
           <div className='col-xs-12 col-sm-12'>
                <label>Visualizar</label>
                <Field style={textareaStyle}  name='responseBody' value={this.state.file} component='textarea' readOnly='readonly'
                                        label='visualizar' cols='col-lg' placeholder={this.state.file}   />
            </div>
      </div>
      );
  }
}



PreVisualizacao = reduxForm({form: 'previsualizacaoForm', destroyOnUnmount: false})(PreVisualizacao)
const selector = formValueSelector('previsualizacaoForm')
const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PreVisualizacao)