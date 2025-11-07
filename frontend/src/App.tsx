import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './layouts/header/header'
import Main from './layouts/main/main'
import Footer from './layouts/footer/footer'


function App() {

  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
