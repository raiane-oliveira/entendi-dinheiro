import { Link } from "react-router";
import '../../styles/auth.css';

export function LoginPage() {
  return (
    <div className="auth-container">
      <div className="container">
        <Link to="/" className="auth-logo">
          <img src="/logo.svg" alt="Entendi Dinheiro Logo" />
        </Link>

        <h2 className="auth-title">Acesse sua conta</h2>

        <div className="social-login">
          <button className="social-btn google">
            <i className="ph ph-google-logo"></i>
            Google
          </button>
          <button className="social-btn facebook">
            <i className="ph ph-facebook-logo"></i>
            Facebook
          </button>
        </div>

        <form id="login-form">
          <div className="form-group">
            <label className="form-label" htmlFor="email">E-mail</label>
            <input className="form-input" type="email" id="email" name="email" placeholder="johndoe@example.com" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="senha">Senha</label>
            <input className="form-input" type="password" id="senha" name="senha" placeholder="Sua senha" />
          </div>

          <button type="submit" className="login-btn">Entrar</button>
        </form>

        <div className="divider"></div>

        <div className="signup">
          <div className="signup-text">
            <i className="ph ph-currency-circle-dollar"></i>
            <p>
              <span>Não tem uma conta?</span>
              <Link to="/cadastro">Crie sua conta grátis</Link>
            </p>
          </div>

          <i className="ph ph-caret-right signup-arrow-icon"></i>
        </div>
      </div>
    </div>

  )
}

