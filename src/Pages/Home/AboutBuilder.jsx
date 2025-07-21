import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';

// Define validation schema
const enquirySchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  message: yup.string().required('Message is required'),
});

export default function AboutBuilder() {
  const formRef = useRef();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: enquirySchema,
    onSubmit: (values, { setSubmitting }) => {
      emailjs.sendForm(
        'service_daeykci', 
        'template_2n8xz18', 
        formRef.current,
        'hyKKlCXmQROMX6XFo'
      )
      .then((result) => {
        console.log(result.text);
        navigate('/thank-you');
      }, (error) => {
        console.log(error.text);
      })
      .finally(() => {
        setSubmitting(false);
      });
    },
  });

  return (
    <section id="builder" className="bg-white px-6 py-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 sm:mb-6">ABOUT BUILDER</h2>
          <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed mb-4 md:mb-8">
            Eldeco Group has been a leading name in North India’s real estate sector since 1985, known for its consistent track record in timely and high-quality project delivery. Operating across 20 cities, the Group has completed over 200 diverse developments, including townships, high-rises, malls, and office complexes with more than <strong>30 projects</strong> currently underway. To date, it has delivered over 30 million sq. ft. of built-up space, earning the trust of 30,000+ satisfied customers.
          </p>

          <div className="grid grid-cols-2 gap-0 text-center font-medium text-gray-800 border-t pt-3 sm:pt-6">
            <div className="flex items-center justify-center gap-2 p-6">
              <p className="text-green-700 text-lg font-bold">200+</p>
              <p>Projects</p>
            </div>
            <div className="flex items-center justify-center gap-2 p-6 border-l-2 border-primary pl-6">
              <p className="text-green-700 text-lg font-bold">35+</p>
              <p>Years</p>
            </div>
            <div className="flex items-center justify-center gap-2 p-6 border-t border-primary col-span-1">
              <p className="text-green-700 text-lg font-bold">30000+</p>
              <p>Homes</p>
            </div>
            <div className="flex items-center justify-center gap-2 p-6 border-t border-primary border-l-2 pl-6">
              <p className="text-green-700 text-lg font-bold">20+</p>
              <p>Cities</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-6">ENQUIRE NOW</h2>
          <div className="bg-white p-4 md:p-8">
            <form ref={formRef} onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className={`w-full border ${formik.errors.name && formik.touched.name ? 'border-red-500' : 'border-gray-400'} px-4 py-3 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-green-700`}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
                )}
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className={`w-full border ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-400'} px-4 py-3 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-green-700`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                )}
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Number"
                  className={`w-full border ${formik.errors.phone && formik.touched.phone ? 'border-red-500' : 'border-gray-400'} px-4 py-3 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-green-700`}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
                )}
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Enter Message"
                  rows={3}
                  className={`w-full border ${formik.errors.message && formik.touched.message ? 'border-red-500' : 'border-gray-400'} px-4 py-3 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-green-700`}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.errors.message && formik.touched.message && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="bg-green-800 text-white w-full py-3 tracking-wide text-sm font-medium hover:bg-green-900 transition disabled:opacity-50"
              >
                {formik.isSubmitting ? 'SUBMITTING...' : 'SUBMIT NOW'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}