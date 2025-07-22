export default function Footer() {
  return (
    <footer className="bg-white lg:mr-[300px] flex-1 text-center py-8 md:py-10 px-4 text-gray-700 border-t  ">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <img
          src="/ebc/project-logo.webp"
          loading="lazy"
          alt="Ekana Business Center"
          className="w-80"
        />

        <p className="text-sm font-medium text-gray-800">
          <span className="font-semibold">Ekana Business Center RERA No.</span> –
          UPRERAPRJ546851/07/2025
        </p>
        <a
          href="https://www.up-rera.in/"
          className="text-primary text-sm hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          ( https://www.up-rera.in/ )
        </a>

        <p className="text-xs  text-gray-600  leading-relaxed">
          <span className="font-medium">Disclaimer :</span> 
          The content on this website is for information purposes only 
          and does not constitute an offer to avail of any service. Prices 
          mentioned are subject to change without notice and properties 
          mentioned are subject to availability. Images are for representation 
          purposes only. This is the official website of authorized marketing 
          partner. We may also send updates to the mobile number/email id registered 
          with us. Project Rera No : UPRERAPRJ546851/07/2025 and available on the website 
          www.up-rera.in under registered projects.
        </p>

        {/* Links */}
        <div className="text-sm mt-2 space-x-2">
          <a href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </a>
          <span>| |</span>
          <a
            href="/terms-and-conditions"
            className="text-primary hover:underline"
          >
            Terms & Conditions
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs mt-0 text-gray-500">
          Copyright © 2025{" "}
          <span className="font-medium">ekanabusinesscenter.com</span> | All
          Rights Reserved. designed By <a href="wirewings.com">Wire Wings IT Solutions</a>
        </p>
      </div>
    </footer>
  );
}
