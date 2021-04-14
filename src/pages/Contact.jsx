import { Page } from '../components/Page'

export const Contact = ({ name }) => {
  return (
    <Page title='Contact'>
      <p>Contact Page</p>
      <p>Hello, {name}</p>
    </Page>
  )
}

export default Contact