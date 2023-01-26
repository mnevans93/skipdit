import styles from './SubList.scss'
import SubListItem from '../SubListItem/SubListItem'
import { subscribe } from '../../../routes/api/comments'

export default function SubList ({
    subs,
    link
}) {
    return (
        <ul className={styles.ul}>
            {
                subs.length
                    ? subs.map(sub => (
                        <Sub
                            key={sub._id}
                            sub={sub}
                            link={link}
                        />
                    ))
                    : <>
                        <h2>Sub Skip'dit yet to be created. Be the first!</h2>
                    </>
            }
        </ul>
    )
}


// ul
//name of sub
//link of sub
//how many posts a sub has