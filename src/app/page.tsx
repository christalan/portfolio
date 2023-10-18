import styles from './page.module.css'

export default function Home() {
  return (
    <main>

      <div className={styles.first_flex}>
        <div>
          <h1>Olá. <br />
            Eu sou o Alan.</h1>
          <p>Um Desenvolvedor que se especializa em frontend, backend, banco de dados e mobile.</p>
          <a href="https://api.whatsapp.com/send?phone=3491543214">
            <button className={styles.button}>Contato</button>
          </a>
        </div>

        <div>
          <img src="/profile.png" width="200px" />
        </div>
      </div>

      <div className={styles.second_flex}>
        <h1>Trabalhos em Destaque</h1>
        <p>Alguns dos meus trabalhos selecionados e projetos pessoais</p>
          <a href="https://pokedex-ma9r.onrender.com/">
            <img src="/pokedex.png" className={styles.image} />
          </a>
          <a href="https://rocket-coffee.onrender.com/">
            <img src="/coffee.png" className={styles.image} />
          </a>
          <a href="https://consulta-de-cep.onrender.com/">
            <img src="/cep.png" className={styles.image} />
          </a>
          <a href="https://calculadora-t4wb.onrender.com/">
            <img src="/calculadora.png" className={styles.image} />
          </a>
      </div>

    </main >
  )
}
