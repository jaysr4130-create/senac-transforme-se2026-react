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
        loadUsers()
    },[])

    async function loadUsers(){
        const{data, error} = await supabase.from('collaborators').select('*')
        if(error){
            setMsg(error.message)
            return;
        }
        setUsers(data)
    }

    async function editUser(){
         const { data, error } = await supabase
            .from('collaborators')
            .update(user)
            .eq('id', index);

            if(error){
                setMsg(error.message)
                setSpiner(false)
                return;
            }
            setMsg("Usuário editado")
            setSpiner(false)
            loadUsers()
    }

   async function deleteUser (index){
        
            const { error } = await supabase
              .from('collaborators')
              .delete()
              .eq('some_column', 'someValue')
          
    }

    function updateUser(user){
        setModal(true)
        setUser(user)
        setIndex(user.id)
    }

    async function handleRegister() {
        //console.log(user)
        setSpiner(true)
        const {data: authData, error: authError} = await supabase.auth.signUp({
            email: user.email,
            password: user.password
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

        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({ email: user.email, password: user.password}); 

        if(loginError){
            setMsg(loginError.message)
            setSpiner(false)
            return;
        }


        const { email, password, ...collaboratorData } = user;

        //console.log(collaboratorData)

        const { error: profileError } = await supabase
            .from('collaborators')
            .insert({
                ...collaboratorData,
                user_id: loginData.user.id
            });
        
        if(profileError){
            setMsg(profileError.message)
            setSpiner(false)
            return;

        }

        setSpiner(false)
        setMsg("Cadastrado com Sucesso")
        loadUsers()
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
                            <input value={user.nome_colaborador} 
                            onChange={ 
                                (e) => setUser({...user, nome_colaborador: e.target.value}

                                ) } 
                                type="text" 
                                placeholder="Digite seu nome completo" 
                                className="text-center" />
                            {index == -1 &&(
                                <>
                                    <span className="text-left">Email: </span>
                                    <input value={user.email} onChange={ (e) => setUser({...user, email: e.target.value} ) }  type="email" placeholder="Digite o seu melhor email"  className="text-center" />

                                    <span className="text-left">Senha: </span>
                                    <input    onChange={ (e) => setUser({...user, password: e.target.value}) } type="password" placeholder="Letra maiúscula e números" className="text-center" />
                                </>
                            )}
                            
                            <span className="text-left">Data de nascimento: </span>
                            <input value={user.nascimento} onChange={ (e) => setUser({...user, nascimento: e.target.value}) } type="date" />

                            <span className="text-left">CPF: </span>
                            <input value={user.cpf} onChange={ (e) => setUser({...user, cpf: e.target.value}) } type="text" />

                            <span className="text-left">Matrícula: </span>
                            <input value={user.matricula} onChange={ (e) => setUser({...user, matricula: e.target.value}) } type="text" />


                            { index != -1 && <a onClick={()=> setIsEdit(false)} className="mt-5 bg-primary text-black text-center rounded-md py-2 bg-red-300">Cancelar</a>}
                            <a onClick={
                                () => {
                                    if(index == -1)
                                        handleRegister()
                                    else
                                        editUser()
                            } 
                            }
                            className="mt-5 bg-primary text-white text-center rounded-md py-2">{spiner? '...':'Salvar'}</a>
                            
{msg}
                        </form>): //else
                            (
                                <>
                                <p>Nome: {user.nome_colaborador}</p>
                                <p>Email: {user.email}</p>
                                <p>Nascimento: {user.nascimento}</p>
                                <p>Senha: {user.senha}</p>
                                <p>Cpf: {user.cpf}</p>
                                <p>Matrícula: {user.matricula}</p>
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
                    <th>Cpf</th>
                    <th>Ações</th>
                </thead>
                <tbody className="font-secondary">
                    {users.map( (u) => (
                        <tr key={u.id}>
                            <td>{u.nome_colaborador}</td>
                            <td>{u.cpf}</td>
                            <td>{u.matricula}</td>
                            <td>
                                <a className='curso-pointer
                                px-3
                                mx-4
                                hover:shadow
                                text-white
                                rounded-full
                                bg-green-500'
                                onClick={()=> updateUser(u)}
                                >V</a>
                                <a  className='curso-pointer
                                px-3
                                mx-4
                                hover:shadow
                                text-white
                                rounded-full
                                bg-red-500'
                                onClick={()=> deleteUser(u)}
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