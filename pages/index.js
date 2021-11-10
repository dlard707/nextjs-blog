import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <p>Professor e Desenvolvedor</p>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}

        <div class="py-8 px-8 max-w-sm mx-auto bg-violet rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          
          <div class="text-center space-y-2 sm:text-left">
          <h1 class="text-lg text-black font-semibold">
            Professor
          </h1>
          <p class="text-red-900 font-medium">
            Desenvolvedor
          </p>
          <button >Mensagem</button>
          {/* <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button> */}
          </div>
          
        </div>
      </section>
    </Layout>
  )
}