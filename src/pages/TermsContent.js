import React from "react";
import { Helmet } from "react-helmet";

const TermsContent = () => {
  const containerStyle = {
    backgroundColor: '#101828',
    color: 'white',
    padding: '2.5rem',
    borderRadius: '12px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '2rem auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#E5E7EB',
  };

  const textStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
    color: '#E5E7EB',
  };

  // ❌ ফিক্স: 'buttonStyle' এবং 'buttonHoverStyle' মুছে ফেলা হয়েছে কারণ এগুলো ব্যবহার করা হয়নি।

  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Terms & Conditions - VDOLogy</title>
        <meta
          name="description"
          content="Read the terms and conditions for using VDOLogy’s services. Understand your rights and obligations while working with us."
        />
        <meta
          name="keywords"
          content="VDOLogy, Terms and Conditions, Video Editing, Graphic Design, Services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="VDOLogy Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.vdology.com/terms" />
      </Helmet>

      <div style={containerStyle}>
        <p style={textStyle}>Last Updated: 30/05/2025</p>
        <p style={textStyle}>
          Welcome to VDOLogy. By accessing or using our website and services, you agree to be bound by the following terms and conditions. If you do not agree to these terms, please do not use our services.
        </p>

        <h2 style={headingStyle}>1. Services Offered</h2>
        <p style={textStyle}>
          VDOLogy provides professional video editing and graphic design services to clients worldwide. Services are delivered remotely and tailored to each client’s project requirements.
        </p>

        <h2 style={headingStyle}>2. Client Obligations</h2>
        <div style={textStyle}>
          <ul>
            <li>• Clients must provide clear project briefs, necessary assets, and relevant information in a timely manner.</li>
            <li>• Clients must ensure they hold the rights to all content provided to VDOLogy.</li>
            <li>• Delays in asset delivery may lead to extended deadlines or rescheduling.</li>
          </ul>
        </div>

        <h2 style={headingStyle}>3. Payment Terms</h2>
        <div style={textStyle}>
          <ul>
            <li>• Payment terms will be outlined in the project agreement or invoice.</li>
            <li>• Services may be billed upfront, per milestone, or on a recurring basis depending on the agreement.</li>
            <li>• All fees are non-refundable once work has begun, unless otherwise stated.</li>
          </ul>
        </div>

        <h2 style={headingStyle}>4. Intellectual Property</h2>
        <div style={textStyle}>
          <ul>
            <li>• VDOLogy retains the right to use generic, non-client-specific parts of designs or edits (templates, animations) for future projects.</li>
            <li>• Final project deliverables become the property of the client upon full payment, unless otherwise agreed in writing.</li>
          </ul>
        </div>

        <h2 style={headingStyle}>5. Revisions and Feedback</h2>
        <div style={textStyle}>
          <ul>
            <li>• Each service package includes a set number of revisions. Additional revisions may incur extra charges.</li>
            <li>• Feedback should be provided in a timely manner to avoid delays.</li>
          </ul>
        </div>

        <h2 style={headingStyle}>6. Limitation of Liability</h2>
        <div style={textStyle}>
          <ul>
            <li>• VDOLogy shall not be held liable for any loss or damages resulting from project delays, data loss, or service interruptions.</li>
            <li>• We are not responsible for third-party service failures or legal issues related to client-provided content.</li>
          </ul>
        </div>

        <h2 style={headingStyle}>7. Confidentiality</h2>
        <p style={textStyle}>
          All client information and project materials are kept strictly confidential unless permission is granted in writing.
        </p>

        <h2 style={headingStyle}>8. Termination</h2>
        <p style={textStyle}>
          Either party may terminate the agreement with written notice. In case of termination, the client is liable to pay for work completed up to that point.
        </p>

        <h2 style={headingStyle}>9. Jurisdiction</h2>
        <p style={textStyle}>
          These Terms shall be governed by the laws of Dhaka, Bangladesh. International clients agree to settle disputes under Bangladesh’s legal framework.
        </p>

        {/* বাটনটি কমেন্ট করা আছে, তাই এর স্টাইল দরকার নেই */}
      </div>
    </div>
  );
};

export default TermsContent;