import { useState } from "react";
import { Link } from "react-router";

function Painel() {
    const [modal, setModal] = useState(false)


    return (
        <>
            <Link to="/auth">Voltar</Link>

            <h3 id="userLogado"></h3>

            {modal && (
                <div
                    className="fixed flex top-0 right-0 bottom-0 
        left-0  items-center justify-center bg-black-50 z-50">

                    <div className="relative max-w-md w-full p-5 bg-about rounded-lg shadow-md flex flex-col">

                        <a id="btClose" className="bg-prices absolute top-0 right-0 px-2
            rounded-full cursor-pointer">X</a>

                        <h2>Cadastre um novo usuário</h2>
                        <p>Preencha as informações abaixo</p>

                        <form className="flex flex-col">

                            <span className="text-left">Nome: </span>
                            <input id="iName" type="text" placeholder="Digite seu nome completo" className="text-center" />

                            <span className="text-left">Email: </span>
                            <input id="iEmail" type="email" placeholder="Digite o seu melhor email" className="text-center" />



                            <span className="text-left">Senha: </span>
                            <input id="iPass" type="password" placeholder="Letra maiúscula e números" className="text-center" />

                            <span className="text-left">Data de nascimento: </span>
                            <input id="iBirth" type="date" />



                            <a id="formRegister" className="mt-5 bg-primary text-white text-center rounded-md py-2">Salvar</a>

                        </form>
                    </div>
                </div>
            )}
            <table>
                <thead>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ações</th>

                </thead>
                <tbody className="font-secondary">

                </tbody>
            </table>

            <a onClick={() => setModal(true)} className="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0"> + </a>
            <script src="user.js"></script>
            <script src="painel.js"></script>


        </>
    )
}
export default Painel;