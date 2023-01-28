import styles from './SubListItem.scss'

export default function SubListItem({
    sub,
    updateSub,
    deleteSub
}) {
    return (
        <li className={styles.li}>
            <h2>{sub.name}</h2>
            <a href={sub.url}>{sub.url}</a>
            <h4>posts: 9001</h4>
        </li>
    )
}

// li
//name of sub
//link of sub
//how many posts a sub has