import { Navbar } from './components/Navbar'
import { Wrapper } from './components/Wrapper'
import { useRoutes } from 'hookrouter'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Demo } from './pages/Demo'
import { NotFound } from './pages/NotFound'

const routes = {
  '/': () => <Home />,
  '/about*': () => <About />,
  '/contact/:name': ({name}) => <Contact name={name} />,
  '/demo': () => <Demo />
}

function App() {
  const match = useRoutes(routes)

  return (
    <Wrapper>
      <Navbar />
      {match || <NotFound />}
    </Wrapper>
  );
}

export default App;