import styles from './SubListItem.scss'

export default function SubListItem({
    sub,
    updateSub,
    deleteSub
}) {
    return (
        <li className={styles.li}>
            <h2>{name}</h2>
            <a href></a>
            <h4>{posts}: 99001</h4>
        </li>
    )
}

// li
//name of sub
//link of sub
//how many posts a sub has