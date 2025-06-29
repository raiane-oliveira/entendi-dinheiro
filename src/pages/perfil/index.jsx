import { Header } from "../../components/Header";
import './styles.css';

export function PerfilPage() {
  return (
    <div className="app-container">
      <Header withoutSidebar={true} />
      
      <main className="main-app-content">
        <div className="perfil-container">
          <section className="perfil">
            <div className="capa-do-perfil">
              <img src="/capa-perfil.png" alt="Capa de Perfil" />
            </div>
            <img src="/foto-perfil.png" alt="Foto de Perfil" className="foto-do-perfil" />
            <h2>Ana Souza</h2>
            <p className="objetivo">Quero entender como sair das dívidas</p>
            <p className="localizacao">
              <img className="localizacao-icone" src="/icones/localizacao-icone.png" alt="Localização" /> Recife - PE
            </p>
            <p className="data-de-inicio">Entrou na Entendi Dinheiro em 21/11/2022</p>
          </section>

          <section className="competencias">
            <h3>Competências estudadas</h3>

            <div className="competencia-item">
              <i className="ph ph-wallet competencia-icone"></i>
              <div className="competencia-conteudo">
                <div className="competencia-texto">
                  <strong>Organização Financeira</strong>
                  <p>00h de estudo</p>
                </div>
                <div className="barra">
                  <progress value="0" max="100"></progress>
                  <span>0%</span>
                </div>
              </div>
            </div>

            <div className="competencia-item">
              <i className="ph ph-credit-card competencia-icone"></i>
              <div className="competencia-conteudo">
                <div className="competencia-texto">
                  <strong>Crédito e Dívidas</strong>
                  <p>00h de estudo</p>
                </div>
                <div className="barra">
                  <progress value="0" max="100"></progress>
                  <span>0%</span>
                </div>
              </div>
            </div>

            <div className="competencia-item">
              <i className="ph ph-bank competencia-icone"></i>
              <div className="competencia-conteudo">
                <div className="competencia-texto">
                  <strong>Educação Bancária</strong>
                  <p>00h de estudo</p>
                </div>
                <div className="barra">
                  <progress value="0" max="100"></progress>
                  <span>0%</span>
                </div>
              </div>
            </div>

            <div className="competencia-item">
              <i className="ph ph-trend-up competencia-icone"></i>
              <div className="competencia-conteudo">
                <div className="competencia-texto">
                  <strong>Investimentos</strong>
                  <p>00h de estudo</p>
                </div>
                <div className="barra">
                  <progress value="0" max="100"></progress>
                  <span>0%</span>
                </div>
              </div>
            </div>
          </section>

          <section className="links">
            <h3>Links</h3>
            <div className="redes-sociais-icones">
              <div className="icone-rede-social">
                <i className="ph-fill ph-linkedin-logo"></i>
              </div>
              <div className="icone-rede-social">
                <i className="ph-fill ph-facebook-logo"></i>
              </div>
              <div className="icone-rede-social">
                <i className="ph-fill ph-instagram-logo"></i>
              </div>
            </div>
          </section>

          <section className="medalhas">
            <h3>Medalhas</h3>
            <div className="medalhas-itens">
              <div>
                <img src="/icones/medalha-icone.png" alt="Medalha" />
                <p>Saí do Aperto!</p>
              </div>
              <div>
                <img src="/icones/medalha-icone.png" alt="Medalha" />
                <p>Sem Medo do Cartão</p>
              </div>
              <div>
                <img src="/icones/medalha-icone.png" alt="Medalha" />
                <p>Primeiro Investimento</p>
              </div>
              <div>
                <img src="/icones/medalha-icone.png" alt="Medalha" />
                <p>Maratonista Financeiro</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

