import styles from './Perfil.module.css'

const Perfil = ({nomeUsuario}) => {


    return(
        <header className={styles.header}> 
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}  />
            <h3 classNome={styles.name}> 
                {nomeUsuario}
                </h3>
        </header>
    )
}


export default Perfil;