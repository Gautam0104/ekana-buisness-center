import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import EnquiryFormModal from "./EnquiryFormModal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

export default function EnquiryForm() {
  const navigate = useNavigate();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const initialValues = {
    name: "",
    phone: "",
    consent: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
      .required("Mobile number is required"),
    consent: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const templateParams = {
      name: values.name,
      phone: values.phone,
    };

    emailjs
      .send(
        "service_daeykci", // Replace with your EmailJS service ID
        "template_2n8xz18", // Replace with your EmailJS template ID
        templateParams,
        "hyKKlCXmQROMX6XFo" // Replace with your EmailJS public key
      )
      .then(
        () => {
          navigate("/thank-you");
          resetForm();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-white shadow-md flex flex-col items-center">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-2 rounded-bl-lg bg-primary text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {isModalOpen && <EnquiryFormModal closeModal={handleCloseModal} />}
          </div>
        </div>
      )}

      <div className="w-full max-w-sm flex gap-[1px] items-center text-white shadow">
        <button onClick={handleOpenModal} className="text-xs font-normal bg-primary px-4 py-3 w-1/2">
          Organize Site Visit
        </button>
        <span className="text-xs font-normal bg-primary px-4 py-3 w-1/2">
          <a href="tel:+91 7042412266">+91 7042412266</a>
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between w-full max-w-sm px-4">
        <button
          onClick={handleOpenModal}
          className="bg-primary text-white text-sm font-medium py-2 px-6 rounded-lg shadow-md hover:bg-sky-800 transition"
        >
          Request Call Back
        </button>

        <a
          href="https://wa.me/917042412266"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#61D72D] p-2 rounded-full shadow-md hover:bg-green-600 transition">
            <FaWhatsapp className="w-5 h-5 text-white" />
          </div>
        </a>
      </div>

      <div className="mt-6 w-full max-w-sm bg-white px-4">
        <h2 className="text-center text-xl font-bold text-primary">
          Enquire Now
        </h2>
        <hr className="border-t-4 border-gray-300 w-20 mx-auto my-2" />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className="w-full mt-4 px-3 py-2 border-2 border-primary rounded-md focus:outline-none"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm mt-1"
              />

              <div className="flex mt-4 border-2 border-primary rounded-md overflow-hidden">
                <div className="relative bg-gray-200 flex items-center">
                  <div className="absolute bg-gray-200 flex inset-y-0 left-0 items-center pl-2 pointer-events-none">
                    <img
                      src="/Indian_Flag.webp"
                      className="w-5 h-5"
                      alt="Indian Flag"
                      loading="lazy"
                    />
                    <span className="ml-2 text-sm">+91</span>
                  </div>
                  <select className="appearance-none bg-transparent px-2 py-2 pl-8 text-sm focus:outline-none">
                    <option value="+91">+91</option>
                  </select>
                </div>
                <Field
                  name="phone"
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-2 focus:outline-none"
                />
              </div>
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600 text-sm mt-1"
              />

              <div className="mt-4 text-sm text-gray-700">
                <label className="flex items-start space-x-2">
                  <Field type="checkbox" name="consent" className="mt-1" />
                  <span className="text-xs tracking-wide leading-4">
                    I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                  </span>
                </label>
                <ErrorMessage
                  name="consent"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !initialValues.consent}
                  className="bg-primary text-white font-semibold py-2 px-10 rounded-lg shadow-md hover:bg-sky-800 transition"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
