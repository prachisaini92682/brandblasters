import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | BrandBlasters",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in Touch with Us"
        description="Feel free to reach out to us with any questions, feedback, or inquiries. We're here to assist you on your digital marketing journey."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
