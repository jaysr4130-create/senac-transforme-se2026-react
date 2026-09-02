import { useState } from "react";
import { Link } from "react-router";

function Auth() {
    /*const [variavel, funcaoAlteraVariavel] = useState('valor inicial');*/
    const [batatinha, setBatatinha] = useState(0);

    function sub(){
        setBatatinha(batatinha - 1)
    }
    return (
<> 
    <div className="flex flex-col w-1/2 mx-auto bg-blue-200 shadow-md rounded-md p-6">
        <Link to="/" className="mb-5" >Voltar</Link>
        <div className="bg-red-100 rounded-full p-2" onClick={sub}>-</div>
        {batatinha}
        <div className="bg-green-100 rounded-full p-2" onClick={() => setBatatinha(batatinha + 1)}>+</div>
        <h2 className="text-center font bg-primary  "  >Login</h2>



        <form className="text-center  background-color flex flex-col rounded-full p-2" id="formLogin">

            Email:<input className="rounded-full p-2" id="iEmailLogin" type="email" placeholder="Digite o seu email"  />
            Senha:<input className="rounded-full p-2" id="iPassLogin" type="password" placeholder="Digite sua senha" />
            <a className="font  shadow-lg mr-2 p-2 px-4 bg-primary hover:shadow-inner rounded text-white ml-auto" type="submit" href="painel.html" >Entrar</a>
        

        </form>
    </div>
</>
                                )
}
                                export default Auth;