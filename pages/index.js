import Head from 'next/head'
import Home from '../components/Home';


function Index() {
  return <div className="container">
  <Head>
  <title>PortFolio</title>
  <link rel="icon" href="/iconOnglet.png" />
  </Head>
  
  <Home />
  </div> 
}

export default Index;
