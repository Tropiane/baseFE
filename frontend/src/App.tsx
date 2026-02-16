import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './layouts/header/header'
import Main from './layouts/main/main'
import Footer from './layouts/footer/footer'
import { UserProvider } from './providers/UserProvider'
import { Section } from './layouts/section/Section'
import { TicketsProvider } from './providers/TicketsProvider'


function App() {

  return (
    <>
    <BrowserRouter>
      <UserProvider>
        <TicketsProvider>

          <Header></Header>
          <Section></Section>
          <Main></Main>
          <Footer></Footer>
          
        </TicketsProvider>
      </UserProvider>
    </BrowserRouter>
    </>
  )
}

export default App
