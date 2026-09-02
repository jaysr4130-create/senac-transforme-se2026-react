import { Link } from "react-router";

function Auth() {
    return (
<> 
    <div className="flex flex-col w-1/2 mx-auto bg-blue-200 shadow-md rounded-md p-6">
        <Link to="/" >Voltar</Link>
        <h2 className="text-center font bg-primary  "  >Login</h2>



        <form className="text-center  background-color flex flex-col " id="formLogin">

            Email:<input id="iEmailLogin" type="email" placeholder="Digite o seu email"  />
            Senha:<input id="iPassLogin" type="password" placeholder="Digite sua senha" />
            <a className="font shadow-lg mr-2 p-2 px-4 bg-primary hover:shadow-inner rounded text-white ml-auto" type="submit" href="painel.html" >Entrar</a>
        

        </form>
    </div>
</>
                                )
}
                                export default Auth;