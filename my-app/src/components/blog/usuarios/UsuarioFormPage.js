import React from 'react';
import HeaderPage from '../HeaderPage';
class UsuarioFormPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            errorMessage:{
                nome: '',
                email:'',
                senha:'',
            }
        }
    }

    onSalvar = ({id = null, nome, email, senha})=>{

    }

    render(){
       
        return(
            <div>
                <HeaderPage title = "Formulário de Usuários"></HeaderPage>
                <UsuarioForm 
                error = {this.state.errorMessage}
                onSalvar={this.onSalvar}
                ></UsuarioForm>
            </div>
        )
    }
}