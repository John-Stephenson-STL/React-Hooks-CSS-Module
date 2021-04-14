import { Page } from '../components/Page'
import styles from '../styles/button.module.css'

export const Demo = () => {
  return (
    <Page title='Demo'>
      <button className={styles.blue}>This is a Blue Button</button>
      <button className={styles.red}>This is a Red Button</button>
    </Page>
  )
}

export default Demo