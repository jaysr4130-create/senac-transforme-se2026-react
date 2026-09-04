import { useState } from "react";
import { Link } from "react-router";

function Auth() {
    /*const [variavel, funcaoAlteraVariavel] = useState('valor inicial');*/
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] =useState("")

function handleLogin () {
    const users = JSON.parse(localStorage.getItem('users'))
    let user = users.find(u =>{
        returnu.email == email
    })
    if (!user){
        setMensagem("Usuário não encontrado")

        return
    }
    if(user.senha == pass){
        localStorage.setItem("Logado", JSON.stringify())
    }else{
        setMensagem("Usuário encontrado")
    }
}

    return (
<> 
    <div className="flex flex-col w-1/2 mx-auto bg-blue-200 shadow-md rounded-md p-6">
        <Link to="/" className="mb-5" >Voltar</Link>
        
        <h2 className="text-center font bg-primary  "  >Login</h2>



        <form className="text-center  background-color flex flex-col rounded-full p-2" id="formLogin">
            <></>
        <span className="text-left">Email: </span>
        <input 
        className="rounded-full p-2" 
        type="email" 
        value={email} 
        placeholder="Digite o seu email" 
        onChange={(e) => setEmail(e.target.value)} />
        {email}

<span className="text-left">Senha: </span>
        <input 
        className="rounded-full p-2" 
        type="password"
        value={senha} 
        placeholder="Digite sua senha" 
        onChange={(e) => setSenha(e.target.value)} />
        {senha}
           
            <a onClick={handleLogin} className="font  shadow-lg mr-2 p-2 px-4 bg-primary hover:shadow-inner rounded text-white ml-auto" to="/painel" >Entrar</a>
        

        </form>
    </div>
</>
                                )
}
                                export default Auth;