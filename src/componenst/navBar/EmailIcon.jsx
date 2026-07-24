import React from 'react'
import { Mail } from "lucide-react";


const EmailIcon = () => {
  return <a
  href="mailto:nitukumari251001@gmail.com"
  className="contact-icon"
  aria-label="Email Nitu Kumari"
>
  <Mail size={20} />
</a>;
};

export default EmailIcon;