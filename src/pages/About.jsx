import { useRoutes, A } from 'hookrouter'
import { Page } from '../components/Page'
import { AboutMe } from './AboutMe'
import { AboutMyAudio } from './AboutMyAudio'
import { AboutMyDocs } from './AboutMyDocs'

const routes = {
  '/me': () => <AboutMe />,
  '/myDocs': () => <AboutMyDocs />,
  '/myAudio': () => <AboutMyAudio />
}

export const About = () => {
  const match = useRoutes(routes)

  return (
    <Page title='About'>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <span style={{ marginRight: '20px' }}><A href='/about/me'>About Me</A></span>
        <span style={{ marginRight: '20px' }}><A href='/about/myAudio'>About My Audio</A></span>
        <span style={{ marginRight: '20px' }}><A href='/about/myDocs'>About My Documentations</A></span>
      </div>
      {match || <div>Pick a Page.</div>}
    </Page>
  )
}

export default About