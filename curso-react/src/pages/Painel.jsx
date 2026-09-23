import { useEffect, useState } from "react";
import { supabase } from '../../utils/supabase'

import { Link } from "react-router";

function Painel() {
    const [modal, setModal] = useState(false) //bollean
    const [users, setUsers] = useState([]) //vetor
    const [user, setUser]   = useState({}) //objeto
    const [logged, setLogged] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState(-1)
    
    const [spiner, setSpiner] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(
        ()=>{
            const logged = JSON.parse(localStorage.getItem('logado'))
            setLogged(logged)
        },
        []
    );
    useEffect(()=> {
        const usersTemp = JSON.parse(localStorage.getItem('users')) || []
        if(usersTemp) setUsers(usersTemp)
    },[])

    function deleteUser (index){
        const newUsers = users.filter((u,i) => {

            return i !=index
        })
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers))
    }

    function updateUser(indice){
        setModal(true)
        setUser(users[indice] )
        setIndex(indice)
    }

    async function handleRegister() {
        setSpiner(true)
        const {data: authData, error: authError} = await supabase.auth.signUp({
            email: user.email,
            password: user.senha
        });
        if(authError){
            //console.log(authError.message)
            setMsg(authError.message)
            setSpiner(false)
            return;
        }
        
        if(!authData){
            setMsg("Não foi possível cadastrar a internet")
            setSpiner(false)
            return;
        }

        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({ email: user.email, password: user.senha}); 

        if(loginError){
            setMsg(loginError.message)
            setSpiner(false)
            return;
        }


        const { error: profileError } = await supabase .from('collaborators') .insert({
            user_id: loginData.user.id,
            cpf: user.cpf
        });
        
        if(profileError){
            setMsg(profileError.message)
            setSpiner(false)
            return;

        }
    }


        
      

    return (
        <>
            <Link to="/auth">Voltar</Link>
            <h3>Bem vindo, {logged?.nome}</h3>

            {modal && (
                <div
                    className="fixed flex top-0 right-0 bottom-0 
        left-0  items-center justify-center bg-black/50 z-50">

                    <div className="relative max-w-md w-full p-5 bg-red-200 rounded-lg shadow-md flex flex-col">

                        <a onClick={() => {
                            setModal(false)
                            setIsEdit(false)
                            setUser({})
                            setIndex(-1)
                        }}
                             className="bg-prices absolute top-0 right-0 px-2
            rounded-full cursor-pointer">X</a>

                        <h2>Cadastre um novo usuário</h2>
                        <p>Preencha as informações abaixo</p>

                        {isEdit ? ( // num > 1
                        <form className="flex flex-col">

                            <span className="text-left">Nome: </span>
                            <input value={user.nome} 
                            onChange={ 
                                (e) => setUser({...user, nome: e.target.value}

                                ) } 
                                type="text" 
                                placeholder="Digite seu nome completo" 
                                className="text-center" />

                            <span className="text-left">Email: </span>
                            <input value={user.email}
                            onChange={
                                 (e) => setUser({...user, email: e.target.value}

                                 ) } 
                                 type="email"
                                  placeholder="Digite o seu melhor email" 
                                  className="text-center" />

                            <span className="text-left">Senha: </span>
                            <input    onChange={ (e) => setUser({...user, senha: e.target.value}) } type="password" placeholder="Letra maiúscula e números" className="text-center" />

                            <span className="text-left">Data de nascimento: </span>
                            <input value={user.nascimento} nChange={ (e) => setUser({...user, nascimento: e.target.value}) } type="date" />

                            <span className="text-left">CPF: </span>
                            <input value={user.cpf} nChange={ (e) => setUser({...user, cpf: e.target.value}) } type="text" />


                            { index != -1 && <a onClick={()=> setIsEdit(false)} className="mt-5 bg-primary text-black text-center rounded-md py-2 bg-red-300">Cancelar</a>}
                            <a onClick={handleRegister} className="mt-5 bg-primary text-white text-center rounded-md py-2">{spiner? '...':'Salvar'}</a>
                            
{msg}
                        </form>): //else
                            (
                                <>
                                <p>Nome: {user.nome}</p>
                                <p>Email: {user.email}</p>
                                <p>Nascimento: {user.nascimento}</p>
                                <p>Senha: {user.senha}</p>
                                <p>Cpf: {user.cpf}</p>
                                 <a onClick={()=> setIsEdit(true)} className="mt-5 bg-primary text-black text-center rounded-md py-2 bg-yellow-500">Editar</a>
                                </>
                            )
                        }
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
                    {users.map( (u, i) => (
                        <tr>
                            <td>{u.nome}</td>
                            <td>{u.email}</td>
                            <td>
                                <a className='curso-pointer
                                px-3
                                mx-4
                                hover:shadow
                                text-white
                                rounded-full
                                bg-green-500'
                                onClick={()=> updateUser(i)}
                                >V</a>
                                <a  className='curso-pointer
                                px-3
                                mx-4
                                hover:shadow
                                text-white
                                rounded-full
                                bg-red-500'
                                onClick={()=> deleteUser(i)}
                                >X</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <a onClick={() => {
                setModal(true)
                setIsEdit(true)
                }} className="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0"> + </a>
            <script src="user.js"></script>
            <script src="painel.js"></script>


        </>
    )
}
export default Painel;