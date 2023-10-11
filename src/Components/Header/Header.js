import React from 'react'
import Form from '../Form/Form'
// import styles from './style.module.css'

const Header = () => {


    return(
        <header>
            <Form/>
        </header>
    )
}

export default React.memo(Header) 
//React.memo - компонент высшего порядка
//(декоратор который оборачивает компонент и добавляет дополнительную функциональность), 
//если обновится родитель и при этом в наш компонент будут переданы теже самые пропсы то
//наш компонент вместе с родителем обновляться не будет