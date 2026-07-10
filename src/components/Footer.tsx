import Link from 'next/link';
import { siteConfig } from '../config/site.config';

const openingHours = [
  { day: 'Monday', hours: '9am–6pm' },
  { day: 'Tuesday', hours: '9am–6pm' },
  { day: 'Wednesday', hours: '9am–6pm' },
  { day: 'Thursday', hours: '9am–9pm' },
  { day: 'Friday', hours: '9am–9pm' },
  { day: 'Saturday', hours: '9am–6pm' },
  { day: 'Sunday', hours: '12pm–6pm' },
];

const policyLinks = [
  { href: '/cookies-policy', label: 'Cookies Policy' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/web-accessibility', label: 'Web Accessibility' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/site-map', label: 'Site Map' },
];

const socialLinks = [
  {
    href: siteConfig.social.facebook,
    label: 'Facebook',
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    href: siteConfig.social.instagram,
    label: 'Instagram',
    path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.054.058-1.37.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.466-.399-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
  },
];

const Footer = () => {
  return (
    <footer className="bg-dl-navy text-white relative">
      <div className="accent-rule" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Address */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white tracking-tight">
                {siteConfig.siteName}
              </h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-md">
                Your shopping destination in the heart of {siteConfig.location} — a curated mix of retail,
                dining and services, minutes from the DART and the harbour.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-xs font-semibold text-dl-gold tracking-[0.2em] uppercase">Find Us</h4>
              <div className="mt-3 space-y-1 text-sm text-white/70">
                <p className="font-semibold text-white">{siteConfig.fullAddress.name}</p>
                <p>{siteConfig.fullAddress.street}</p>
                <p>{siteConfig.fullAddress.town}, {siteConfig.fullAddress.county}</p>
                <p>{siteConfig.fullAddress.eircode}</p>
              </div>
            </div>
            {/* Social */}
            <div className="flex space-x-3">
              {socialLinks.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-dl-navy hover:bg-dl-gold hover:border-dl-gold transition-colors"
                  aria-label={label}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d={path} clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-5">
            <h4 className="text-sm sm:text-base font-semibold text-white tracking-wider uppercase">
              Opening Hours
            </h4>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <dl className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm">
                {openingHours.map(({ day, hours }) => (
                  <div key={day} className="contents">
                    <dt className="font-medium text-white/70 truncate">{day}</dt>
                    <dd className="text-right text-white/50">{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Contact & Policies */}
          <div className="space-y-5">
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white tracking-wider uppercase">
                Get in Touch
              </h4>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                <p>
                  Phone:{' '}
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-medium text-dl-sky hover:text-dl-gold transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-medium text-dl-sky hover:text-dl-gold transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-dl-gold tracking-[0.2em] uppercase">Policies</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {policyLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-white/70 hover:text-dl-gold transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-14 md:mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs sm:text-sm text-center">
            &copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
