import { useEffect } from 'react';
import { assets } from '../assets/assetPaths.js';

const inputClasses =
  'rounded-2xl px-4 py-3 border border-line bg-white text-sm outline-none box-border ' +
  'transition-shadow transition-colors duration-200 focus:shadow-md focus:border-gray-500';

function Contact() {
  // Load the reCAPTCHA script once, client-side, since this isn't a controlled
  // React form — it posts straight to Salesforce's Web-to-Lead endpoint.
  useEffect(() => {
    if (document.querySelector('script[src*="recaptcha"]')) return;
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="contact"
      className="flex justify-center flex-col h-[70vh] max-[1400px]:h-fit pt-[15vh] mx-10 lg:mx-40 max-[1200px]:mx-[5%]"
    >
      <p className="text-center">Get in Touch</p>
      <h1 className="text-5xl text-center">Contact Me</h1>

      <div className="flex justify-center rounded-2xl border border-line mx-auto my-4 p-2 flex-wrap max-[600px]:flex-wrap">
        <div className="flex items-center justify-center gap-2 m-4">
          <img src={assets.emailIcon} alt="Email icon" className="h-10 cursor-default" />
          {/* TODO: replace with your own email */}
          <p className="text-lg">
            <a href="mailto:aashaywase@icloud.com">aashaywase@icloud.com</a>
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 m-4">
          <img src={assets.linkedinIcon} alt="LinkedIn icon" className="h-8 cursor-default" />
          {/* TODO: replace with your own LinkedIn */}
          <p className="text-lg">
            <a href="https://www.linkedin.com/in/aashay-wase-%E2%98%81%EF%B8%8F-1647b3165/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* Web-to-Lead form. Plain HTML form (not React-controlled) because it
          must POST directly to Salesforce, not to a React handler. */}
      <div className="max-w-[920px] mx-auto my-7 p-6 bg-white rounded-2xl border border-line shadow-sm box-border w-full">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-6 items-start"
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DQy00000Xs9kx"
          method="POST"
        >
          {/* TODO: update oid / retURL if this connects to your own org */}
          <input type="hidden" name="oid" value="00DQy00000Xs9kx" />
          <input
            type="hidden"
            name="retURL"
            value="https://dqy00000xs9kxmab-dev-ed.develop.my.site.com/AashayWase/s/"
          />

          <div className="flex flex-col gap-1.5">
            <label htmlFor="salutation" className="font-semibold text-slate text-sm">
              Salutation
            </label>
            <select id="salutation" name="salutation" defaultValue="" className={inputClasses}>
              <option value="">--None--</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Dr.">Dr.</option>
              <option value="Prof.">Prof.</option>
              <option value="Mx.">Mx.</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="first_name" className="font-semibold text-slate text-sm">
              First Name
            </label>
            <input
              id="first_name"
              maxLength={40}
              name="first_name"
              size={20}
              type="text"
              required
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="last_name" className="font-semibold text-slate text-sm">
              Last Name
            </label>
            <input
              id="last_name"
              maxLength={80}
              name="last_name"
              size={20}
              type="text"
              required
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-semibold text-slate text-sm">
              Email
            </label>
            <input
              id="email"
              maxLength={80}
              name="email"
              size={20}
              type="email"
              required
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="company" className="font-semibold text-slate text-sm">
              Company
            </label>
            <input
              id="company"
              maxLength={40}
              name="company"
              size={20}
              type="text"
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="mobile" className="font-semibold text-slate text-sm">
              Mobile
            </label>
            <input
              id="mobile"
              maxLength={40}
              name="mobile"
              size={20}
              type="tel"
              className={inputClasses}
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col gap-1.5">
            <label htmlFor="description" className="font-semibold text-slate text-sm">
              Message
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Tell me about your project, timeline, or how I can help."
              maxLength={2000}
              className={`${inputClasses} w-full min-h-[140px] leading-relaxed resize-y`}
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-start md:justify-start max-[600px]:justify-center gap-4 items-center">
            <div id="w2l-recaptcha" className="flex items-center max-[480px]:justify-center max-[480px]:w-full">
              {/* TODO: replace with your own reCAPTCHA site key */}
              <div
                className="g-recaptcha"
                data-sitekey="6LdlxtUrAAAAACD_NQon2u0nmW-z2dJrQtHA2Fi8"
              ></div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-start max-[600px]:justify-center">
            <button
              type="submit"
              className="rounded-full px-6 py-3.5 min-w-[9rem] font-bold border border-ink bg-ink text-white hover:-translate-y-0.5 hover:shadow-lg transition-all max-[600px]:w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
