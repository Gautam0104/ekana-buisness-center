import React from "react";

const Policy = () => {
  return (
    <div className="lg:mr-[300px] flex-1">
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className=" py-4 px-6">
            <h1 className="text-3xl font-bold text-black">Privacy Policy</h1>
          </div>

          <div className="p-6 space-y-8">
            <p className="text-gray-700">
              At Eldeco Group, we value the trust you place in us and are
              committed to protecting your privacy. This Privacy Policy outlines
              how we collect, use, and safeguard your personal information when
              you interact with our website, services, and products.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                  1. Information We Collect
                </h2>
                <div className="mt-4 space-y-3">
                  <p className="text-gray-700 font-medium">
                    Personal Identification Information:
                  </p>
                  <p className="text-gray-700 ml-4">
                    Name, email address, phone number, and postal address.
                  </p>

                  <p className="text-gray-700 font-medium">
                    Transactional Information:
                  </p>
                  <p className="text-gray-700 ml-4">
                    Details related to property purchases, bookings, payment
                    history, and communications with our team.
                  </p>

                  <p className="text-gray-700 font-medium">
                    Non-Personal Identification Information:
                  </p>
                  <p className="text-gray-700 ml-4">
                    IP address, browser type, and browsing activity on our
                    website for analytical purposes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                  2. How We Use Your Information
                </h2>
                <ul className="mt-4 ml-6 list-disc text-gray-700 space-y-2">
                  <li>
                    To process inquiries, bookings, and transactions related to
                    properties.
                  </li>
                  <li>
                    To send you relevant information regarding our projects,
                    updates, promotions, and offers.
                  </li>
                  <li>
                    To enhance your experience on our website by improving
                    services and functionality.
                  </li>
                  <li>
                    To communicate with you regarding any questions or concerns
                    related to our services.
                  </li>
                  <li>
                    To comply with legal obligations and enforce our terms and
                    conditions.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                  3. Information Sharing & Security
                </h2>
                <div className="mt-4 space-y-3">
                  <p className="text-gray-700">
                    We do not sell, trade, or rent your personal information to
                    third parties.
                  </p>
                  <p className="text-gray-700">
                    Your data is securely stored and protected against
                    unauthorized access.
                  </p>
                  <p className="text-gray-700">
                    Third-party service providers may access data only for
                    operational purposes (e.g., payment processing, analytics)
                    under strict confidentiality agreements.
                  </p>
                  <p className="text-gray-700">
                    We may disclose information when required by law or to
                    protect the rights, property, or safety of Eldeco Group,
                    our customers, or others.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                  4. Your Rights & Choices
                </h2>
                <ul className="mt-4 ml-6 list-disc text-gray-700 space-y-2">
                  <li>You can opt out of promotional emails at any time.</li>
                  <li>
                    You can request access, correction, or deletion of your data
                    by contacting us.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                  5. Contact Us
                </h2>
                <p className="mt-4 text-gray-700">
                  If you have any questions or concerns about this Privacy
                  Policy or how we handle your personal information, please
                  contact us:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center text-gray-700">
                    <span className="mr-2">📩</span>
                    <span>
                      Email:{" "}
                      <a
                        href="mailto:eldecogroup@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        eldecogroup@gmail.com
                      </a>
                    </span>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="mr-2">📞</span>
                    <span>
                      Phone:{" "}
                      <a
                        href="tel:+917042412266"
                        className="text-blue-600 hover:underline"
                      >
                        +91-7042412266
                      </a>
                    </span>
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div className="bg-gray-100 px-6 py-4 border-t">
            <p className="text-sm text-gray-600">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
