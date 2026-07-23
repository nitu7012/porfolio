import { Download } from "lucide-react";

const ResumeButton = () => {
  return (
    <a
      href="/WebNituResumewe-1.pdf"
      download
      className="resume-btn"
    >
      <Download />
      Download Resume
    </a>
  );
};

export default ResumeButton;