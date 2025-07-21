import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

export default function EnquiryFormModal({ closeModal }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      consent: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
        .required("Mobile number is required"),
      consent: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      const templateParams = {
        name: values.name,
        phone: values.phone,
      };

      emailjs
        .send(
          "service_daeykci",
          "template_2n8xz18",
          templateParams,
          "hyKKlCXmQROMX6XFo"
        )
        .then(() => {
          navigate("/thank-you");
          resetForm();
          closeModal();
        })
        .catch((error) => {
          alert("Failed to send message: " + error.text);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="w-full mx-auto py-2 px-4 border border-primary rounded-md shadow-sm">
      <h2 className="text-2xl font-bold text-green-800 mb-4">ENQUIRE NOW</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-[#f4f4f4] rounded-r-3xl p-4 sm:h-52 w-full md:w-[40%]">
            <div className="bg-green-800 text-white text-center py-1 rounded-md font-normal text-sm mb-4">
              We Assure You
            </div>
            {[
              {
                title: "INSTANT",
                sub: "Call Back",
                img: "/call_back_icn1.png",
              },
              { title: "FREE", sub: "Site Visit", img: "/car_icn1.png" },
              { title: "UNMATCHED", sub: "Price", img: "/rupees_icn1.png" },
            ].map((item, i) => (
              <div
                className="text-xs sm:text-sm mb-3 flex text-left gap-2"
                key={i}
              >
                <div className="text-primary">
                  <img src={item.img} loading="lazy" alt={item.title} />
                </div>
                <div>
                  <p className="font-bold text-primary leading-4">
                    {item.title}
                  </p>
                  <p className="text-primary text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FORM SECTION */}
          <div className="w-full md:w-[60%] flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="border-2 border-primary rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-xs text-red-600">{formik.errors.name}</p>
            )}

            <div className="flex">
              <div className="flex items-center border-2 border-primary rounded-l bg-gray-200">
                <img
                  src="/Indian_Flag.webp"
                  alt="Indian Flag"
                  className="w-5 h-6 mx-2"
                />
                <select className="px-2 py-2 text-sm bg-transparent focus:outline-none">
                  <option>+91</option>
                </select>
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Mobile Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className="border-2 border-primary border-l-0 rounded-r px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-xs text-red-600">{formik.errors.phone}</p>
            )}

            <label className="text-xs text-black flex items-start gap-2 leading-relaxed">
              <input
                type="checkbox"
                name="consent"
                checked={formik.values.consent}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="accent-primary mt-1"
              />
              <span>
                I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
              </span>
            </label>
            {formik.touched.consent && formik.errors.consent && (
              <p className="text-xs text-red-600">{formik.errors.consent}</p>
            )}

            <div className="text-start mt-2">
              <button
                type="submit"
                disabled={!formik.values.consent || formik.isSubmitting}
                className={`bg-primary text-white px-6 py-2 rounded shadow-md text-sm hover:bg-primary transition-all duration-300 ${
                  !formik.values.consent ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-8 mb-4 hidden  md:block border-2 borderRadius border-primary text-center">
        <div className="mb-3">
          <button className="bg-green-800 text-white px-6 py-2 rounded-b-xl text-sm font-medium hover:bg-primary">
            Get Information On Latest Updtaes
          </button>
        </div>
        <div className="flex justify-between max-w-md mx-auto py-4 flex-wrap gap-6 text-green-800 text-sm font-medium">
          {["Available Units", "Payment Plan", "Floor Plans"].map((text, i) => (
            <div className="flex items-center gap-2" key={i}>
              <span className="w-4 h-4 text-current">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0v7c0 5.6 7 9 7 9s7-3.4 7-9V0H1zm13 7c0 4.2-4.6 7.1-6 7.9V1h6v6z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
