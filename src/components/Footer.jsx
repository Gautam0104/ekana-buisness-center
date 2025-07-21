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
          <span className="font-semibold">Eldeco Skywalk RERA No.</span> –
          UPRERAPRJ859279
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
          <span className="font-medium">Disclaimer :</span> The content and visuals depicted in this material are intended solely for illustrative and representational purposes. These artistic renderings are not to scale and should not be construed as part of any legal offering or binding agreement. The project promoter clarifies that all information shared is indicative and subject to change. Prospective buyers are advised to independently confirm all project details, including layout plans, specifications, payment terms, and other relevant aspects with the authorized sales team before proceeding with any purchase decision related to the units.
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
          <span className="font-medium">eldecoskywalkofficial.com</span> | All
          Rights Reserved. designed By <a href="wirewings.com">Wire Wings IT Solutions</a>
        </p>
      </div>
    </footer>
  );
}
