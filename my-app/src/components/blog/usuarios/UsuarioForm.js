import React from 'react';
import './UsuarioForm.css'

const UsuarioForm = ({error,onSave}) => {
    const submit = (event)=>{
        event.preventDefault();
        const {id, nome, email, senha} = event.target;
        const data = {
            id:id.value,
            nome:nome.value,
            email:email.value,
            senha:senha.value
        }
        onSave(data);
        event.target.reset();
    }
    return (
        <div>
            <form onSubmit={submit}>
            <div>
                <label htmlFor="id">Id</label>
                <input type="text" readOnly name="id" id="id"/>
                {error.id ? (<p>{error.id}</p>): null}
            </div>

             <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" readOnly name="nome" id="nome"/>
                {error.nome ? (<p>{error.nome}</p>): null}
            </div>

             <div>
                <label htmlFor="email">Email</label>
                <input type="text" readOnly name="email" id="email"/>
                {error.email ? (<p>{error.email}</p>): null}
            </div>

             <div>
                <label htmlFor="senha">Senha</label>
                <input type="text" readOnly name="senha" id="senha"/>
                {error.senha ? (<p>{error.senha}</p>): null}
            </div>
            <div>
                <button type = 'submit'> Enviar </button>
            </div>
            </form>
        </div>
    )
}