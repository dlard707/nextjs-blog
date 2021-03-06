import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import 'tailwindcss/tailwind.css'
// import Header from '../components/Header/Header'

export default function Home() {
  return (
    <Layout home>
       {/* <nav role="navigation">
          <div id="menuToggle">

            <input type="checkbox" />


            <span></span>
            <span></span>
            <span></span>


            <ul id="menu">
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Info</li></a>
              <a href="#"><li>Contact</li></a>
              <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
            </ul>
          </div>
        </nav> */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <Header
        color="transparent"
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      /> */}


      <section className={utilStyles.headingMd}>
       
       
        <div class="py-8 px-8 max-w-sm mx-auto bg-violet rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">

          <div class="text-center space-y-2 sm:text-left">
            <h1 class="text-lg text-black font-semibold">
            Global Individual Reseller
            </h1>
            <p class="text-red-900 font-medium">
            <img id="logo" src="https://codecombat.com/images/pages/base/logo.png"></img>
        
            </p>
            
            <button ><a href="https://api.whatsapp.com/send?phone=5511973849522">Mensagem</a></button>
            {/* <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button> */}
          </div>

        </div>
      </section>
    </Layout>
  )
}