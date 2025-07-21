import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen lg:mr-[300px] flex-1 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto  overflow-hidden">
        <div className=" py-4 px-6">
          <h1 className="text-3xl font-bold text-black">Terms and Conditions</h1>
        </div>
        
        <div className="p-6 space-y-6">
          <p className="text-gray-700">
            Welcome to the official website of Eldeco Group. By accessing and using our website and services, 
            you agree to comply with and be bound by the following Terms and Conditions. These terms govern your 
            use of our services, website, and any transactions you may engage in with us.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">1. Acceptance of Terms</h2>
              <p className="mt-2 text-gray-700">
                By using our website, services, or making a purchase, you agree to be legally bound by these 
                Terms and Conditions. If you do not agree with these terms, you should not access or use our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">2. Use of Website</h2>
              <p className="mt-2 text-gray-700">
                Eldeco Group grants you a limited, non-transferable license to access and use our website for 
                personal, non-commercial purposes. You agree not to:
              </p>
              <ul className="mt-2 ml-6 list-disc text-gray-700 space-y-1">
                <li>Use the website for any unlawful purposes.</li>
                <li>Interfere with or disrupt the operation of the website or any of its services.</li>
                <li>Engage in any activity that could harm the reputation or functionality of the website or Eldeco Group.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">3. Privacy Policy</h2>
              <p className="mt-2 text-gray-700">
                Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your 
                personal information. By using our website and services, you consent to the collection and use of 
                your personal information in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">4. Contact Information</h2>
              <p className="mt-2 text-gray-700">
                If you have any questions or concerns regarding these Terms and Conditions, or if you need 
                assistance with any aspect of our website or services, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p className="flex items-center text-gray-700">
                  <span className="mr-2">📩</span>
                  <span>Email: <a href="mailto:eldecogroup@gmail.com" className="text-blue-600 hover:underline">eldecogroup@gmail.com</a></span>
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="mr-2">📞</span>
                  <span>Phone: <a href="tel:+917042412266" className="text-blue-600 hover:underline">+91-7042412266</a></span>
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="bg-gray-100 px-6 py-4 border-t">
          <p className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;