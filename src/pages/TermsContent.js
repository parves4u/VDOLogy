import React from "react";

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
    color: '#E5E7EB', // Use the button color for headings to create consistency
  };

  const textStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
    color: '#E5E7EB', // Slightly lighter color for better readability
  };

  const buttonStyle = {
    backgroundColor: '#00DE8D',
    color: '#101828',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    display: 'block', // Make the button a block element for better clickability
    width: '100%',
    maxWidth: '200px',
    margin: '0 auto', // Center the button
  };

  const buttonHoverStyle = {
    backgroundColor: '#00C07D', // Slightly darker shade for hover
    transform: 'scale(1.05)', // Slight scale effect on hover
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>      
      Last Updated: 30/05/2025
      </p>
      <p style={textStyle}>      
      Welcome to VDOLogy. By accessing or using our website and services, you agree to be bound by the following terms and conditions. If you do not agree to these terms, please do not use our services.
      </p>

      <h2 style={headingStyle}>1. Services Offered</h2>
      <p style={textStyle}>
      VDOLogy provides professional video editing and graphic design services to clients worldwide. Services are delivered remotely and tailored to each client’s project requirements.
      </p>

      <h2 style={headingStyle}>2. Client Obligations</h2>
      <p style={textStyle}>
        <ul>
  <li>• Clients must provide clear project briefs, necessary assets, and relevant information in a timely manner.</li>
  <li>• Clients must ensure they hold the rights to all content provided to VDOLogy.</li>
  <li>• Delays in asset delivery may lead to extended deadlines or rescheduling.</li>
  </ul>
      </p>

      <h2 style={headingStyle}>3. Payment Terms</h2>
      <p style={textStyle}>
      <ul>
  <li>• Payment terms will be outlined in the project agreement or invoice.</li>
  <li>• Services may be billed upfront, per milestone, or on a recurring basis depending on the agreement.</li>
  <li>• All fees are non-refundable once work has begun, unless otherwise stated.</li>
  </ul>
      </p>

      <h2 style={headingStyle}>4. Intellectual Property</h2>
      <p style={textStyle}>
      <ul>
  <li>• VDOLogy retains the right to use generic, non-client-specific parts of designs or edits (templates, animations) for future projects.</li>
  <li>• Final project deliverables become the property of the client upon full payment, unless otherwise agreed in writing.</li>
  </ul>
      </p>

      <h2 style={headingStyle}>5. Revisions and Feedback</h2>
      <p style={textStyle}>
      <ul>
  <li>• Each service package includes a set number of revisions. Additional revisions may incur extra charges.</li>
  <li>• Feedback should be provided in a timely manner to avoid delays.</li>
  </ul>
      </p>

      <h2 style={headingStyle}>6. Limitation of Liability</h2>
      <p style={textStyle}>
      <ul>
  <li>• VDOLogy shall not be held liable for any loss or damages resulting from project delays, data loss, or service interruptions.</li>
  <li>• We are not responsible for third-party service failures or legal issues related to client-provided content.</li>
  </ul>
      </p>

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

      {/* <button
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
          e.target.style.transform = buttonHoverStyle.transform;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
          e.target.style.transform = 'scale(1)';
        }}
      >
        Accept
      </button> */}
    </div>
  );
};

export default TermsContent;