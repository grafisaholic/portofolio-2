import Head from 'next/head';

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="web development, progamming, web design" />
        <title>Grafisaholic - {title}</title>
        <meta name="title" property="og:title" content={title} />
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      </Head>
      
      <main className="w-full pt-24 md:pt-24 h-full">
        <section className="max-w-4xl mx-auto lg:px-8 dark:text-gray-300">
          {children}
        </section>
      </main>
    </div>
  )
};

export default Layout