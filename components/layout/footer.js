import siteConfig from '../../data/siteConfig';

const Footer = () => {
  return(
    <footer className="w-full justify-center text-center mx-auto pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          <p className="text-center text-sm lg:text-md md:text-md text-cool-gray-500">© {new Date().getFullYear()} Khabibur Rokhman{" "}</p>

          <div className="flex">
            {siteConfig.accounts.map(site => (
              <a
                key={site.label}
                aria-label={site.label}
                href={site.url} 
                target="_blank" 
                rel="noreferrer"
                className={site.class}
              >
                {site.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;