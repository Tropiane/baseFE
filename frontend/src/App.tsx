import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './layouts/header/header'
import Main from './layouts/main/main'
import Footer from './layouts/footer/footer'
import { UserProvider } from './providers/UserProvider'
import { Section } from './layouts/section/Section'


function App() {

  return (
    <>
    <BrowserRouter>
      <UserProvider>
          <Header></Header>
          <Section></Section>
          <Main></Main>
          <Footer></Footer>
      </UserProvider>
    </BrowserRouter>
    </>
  )
}

export default App
