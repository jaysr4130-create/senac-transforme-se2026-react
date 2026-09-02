import { Link } from "react-router";

function Home () {
    return (
  <>
   
      
    <nav className="p-2 flex items-center px-4 top-0  fixed w-full bg-primary"> 

        <a className=" mr-2 p-2 hover:bg-primary" href="#about">Sobre</a>
        <a className=" mr-2 p-2 hover:bg-primary" href="#prices">Preços</a>
        <a className=" mr-2 p-2" hover:bg-primary href="#features">Benefícios</a>
        <Link className=" shadow-lg mr-2 p-2 px-4 bg-primary hover:shadow-inner rounded text-white ml-auto" to="/auth" >Acessar</Link>

    </nav>



    <main> 
        <section>
            <div className="font max-w-lg mx-auto py-6">
                 <h1 className="text-center">Segurança do Trabalho</h1>

                <h2>Sobre o projeto</h2>

                <h3>Projeto integrador serasa</h3>
                <div  className=" flex gap-2">
                <article>
                <p>A gestão adequada dos Equipamentos de Proteção Individual (EPIs) é fundamental para garantir a segurança
                     dos colaboradores e manter a organização dentro da empresa. O controle incorreto desses equipamentos pode gerar
        
                      problemas como falta de materiais, perda de prazos de validade, registros desatualizados 
                    e dificuldades para identificar quais equipamentos foram entregues a cada funcionário.</p>
</article>

<article>
                    <p>Pensando nisso, o projeto integrador propõe o desenvolvimento de um Sistema de Controle de EPIs, criado para 
                        facilitar
                         e organizar todo o processo de gerenciamento desses equipamentos. O sistema reúne informações sobre 
                         funcionários, EPIs, 
                        estoque, entregas, devoluções e prazos de validade em um único ambiente.</p>
                        </article>
                        </div>
                <h3>Controle de EPIs</h3>
                <p> O sistema conta com um módulo completo para cadastro de colaboradores e catalogação de equipamentos. Ele realiza o 
                    controle de 
                    estoque em tempo real, 
                    registra cada entrega ou devolução vinculada ao perfil do funcionário e monitora os prazos de validade dos itens.
                </p>


                 <p> Além disso, a plataforma envia notificações automáticas aos trabalhadores e gestores informando o momento correto para realizar a 
                    troca ou
                     manutenção do seu EPI, garantindo total controle de prazos e relatórios gerenciais em um só lugar.
                </p>
            </div>
        </section>
        <section >
            <div  className="max-w-lg mx-auto py-6">

                <h2>Planos e Preços</h2>

                <div  className="font flex gap-2">
                    <article>

<h3> Plano Mensal:</h3>
                        <p> Ideal para pequenas empresas ou equipes em fase de teste que buscam organização imediata sem compromisso de longo prazo. 
                            Inclui acesso completo ao controle de estoque de EPIs, cadastro ilimitado de colaboradores, 
                            emissão de relatórios básicos e suporte em horário comercial com cobrança recorrente mês a mês.</p>
                    </article>
                    
                    <article>
                        <h3> Plano Semestral:</h3>
                        
                        <p>
                            A opção com excelente custo-benefício desenvolvida para empresas de médio porte que desejam planejar a gestão de segurança
                             a médio prazo. Garante todas as funcionalidades do sistema, notificações automáticas de vencimento via plataforma, suporte
                              prioritário
                             e um desconto exclusivo na mensalidade contratada.
                        </p>
                    </article>
                    
                    <article>
                        <h3> Plano Anual:</h3>
                        
                        <p>
                           A solução definitiva e mais econômica projetada para grandes corporações ou indústrias com alto volume de movimentação de materiais. 
                           Oferece integração completa de dados, relatórios gerenciais avançados para auditorias, treinamentos para a equipe de segurança e o
                            maior percentual 
                           de desconto no valor total da assinatura.
                        </p>
                    </article>
                </div>

            </div>

        </section>

        
        <section >
            <div font className="max-w-lg mx-auto py-6">

                <h2>Benefícios do Sistema</h2>

               



                        <p>A gestão adequada dos Equipamentos de Proteção Individual (EPIs) é essencial para garantir a integridade física dos 
                            colaboradores e manter a empresa em conformidade com as normas de segurança. O controle inadequado desses itens pode resultar
                             em falhas de estoque, descumprimento de prazos de validade e falta de histórico sobre quais equipamentos foram entregues a cada
                              trabalhador. Pensando nisso, o Projeto Integrador propõe o desenvolvimento de um Sistema de Controle de EPIs com o objetivo de 
                              automatizar e centralizar todo o processo de gerenciamento, reunindo dados de funcionários, acervo de equipamentos, registro de 
                              entregas, controle de devoluções e alertas de validade em uma única plataforma.</p>
                   
                    
                    
                        <p>
                            O sistema conta com um módulo completo para cadastro de colaboradores e catalogação de equipamentos. Ele realiza o controle
                             de estoque em tempo real, registra cada entrega ou devolução vinculada ao perfil do funcionário e monitora os prazos de validade 
                             dos materiais. Além disso, a plataforma envia notificações automáticas aos trabalhadores e gestores
                             informando o momento correto para a troca ou manutenção do seu equipamento de proteção.
                        </p>

                         <p>
                            Essa solução proporciona mais organização, eficiência e praticidade na gestão dos materiais. Ao substituir planilhas manuais 
                            e papéis por um banco de dados único e seguro, o sistema elimina o risco de perda de registros e reduz erros operacionais na 
                            distribuição dos itens. O acompanhamento contínuo dos prazos de validade e dos Certificados de Aprovação evita a utilização de 
                            equipamentos vencidos, prevenindo acidentes e garantindo conformidade jurídica perante fiscalizações. A plataforma também permite 
                            consultar históricos de entregas em poucos cliques e 
                            simplifica a emissão de relatórios gerenciais para auditorias.
                        </p>
                    
                

            </div>

        </section>
    </main>
    <footer> 
    </footer>

</>

  )
}

export default Home;