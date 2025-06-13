import React from "react";

const TermsContentPrivacy = () => {
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
      At VDOLogy, we are committed to protecting your privacy and ensuring transparency regarding how your personal information is collected, used, and stored.
      This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
      </p>

      <h2 style={headingStyle}>1. Information We Collect</h2>
      <p style={textStyle}>
      <ul>
  <li>We may collect the following types of information:</li>
  <li>a. Personal Information</li>
  <li>• Name, email address, phone number, billing address, company name (if applicable)</li>
  <li>b. Project Information</li>
  <li>• Project briefs, design requirements, video footage, images, logos, and other assets provided for service delivery</li>
  <li>c. Payment Information</li>
  <li>• Invoices, transaction details (handled via secure third-party payment gateways; we do not store your full payment details)</li>
  <li>d. Technical Information</li>
  <li>• IP address, browser type, referring pages, and other analytics for improving user experience</li>
  </ul>
      </p>

      <h2 style={headingStyle}>2. How We Use Your Information</h2>
      <p style={textStyle}>
        <ul>
  <li>We use your information for the following purposes:</li>
  <li>• To communicate with you regarding projects or inquiries</li>
  <li>• To provide and deliver video editing and graphic design services</li>
  <li>• To process payments and send invoices</li>
  <li>• To manage revisions, project files, and delivery</li>
  <li>• To send service updates or respond to feedback</li>
  <li>• To analyze website performance and improve services</li>
  </ul>
      </p>

      <h2 style={headingStyle}>3. Data Sharing and Disclosure</h2>
      <p style={textStyle}>
      <ul>
  <li>We do not sell, trade, or rent your personal data to third parties. However, we may share your data:</li>
  <li>• With service providers (e.g., cloud storage, payment processors) under strict confidentiality agreements.</li>
  <li>• If required by law, legal proceedings, or regulatory authorities.</li>
  <li>• To enforce our Terms and Conditions or protect our rights.</li>
  </ul>
      </p>

      <h2 style={headingStyle}>4. Data Security</h2>
      <p style={textStyle}>
      <ul>
  <li>We implement appropriate technical and organizational measures to protect your personal information:</li>
  <li>• Secure hosting and cloud storage.</li>
  <li>• Access control and authentication.</li>
  <li>• Encryption of sensitive data during transfer.</li>
  Despite our best efforts, no method of transmission over the internet or electronic storage is 100% secure.
  </ul>
      </p>

      <h2 style={headingStyle}>5. Data Retention</h2>
      <p style={textStyle}>
      <ul>
  <li>We retain your personal and project-related information only as long as necessary:</li>
  <li>• For the duration of the project and service relationship.</li>
  <li>• To comply with legal or tax obligations.</li>
  <li>• For backup and dispute resolution purposes.</li>
  </ul>
      </p>

      <h2 style={headingStyle}>6. Your Rights</h2>
      <p style={textStyle}>
      <ul>
  <li>• Request access to your personal data</li>
  <li>• Request correction of inaccurate data</li>
  <li>• Request deletion of your data (subject to legal or contractual obligations)</li>
  <li>• Withdraw consent (where applicable)</li>
  </ul>
   To exercise any of these rights, please contact us at: info@vdology.com
      </p>

      <h2 style={headingStyle}>7. Cookies and Tracking Technologies</h2>
      <p style={textStyle}>
      Our website may use cookies or similar technologies to enhance user experience. Cookies help us:
      <ul>
  <li>• Understand site traffic and user behavior</li>
  <li>• Improve site functionality</li>
  You can disable cookies in your browser settings, though this may affect your browsing experience.
  </ul>
      </p>

      <h2 style={headingStyle}>8. Third-Party Links</h2>
      <p style={textStyle}>
      Our website may contain links to external sites. We are not responsible for the content or privacy practices of these third-party websites.
      </p>

      <h2 style={headingStyle}>9. Children’s Privacy</h2>
      <p style={textStyle}>
      Our services are not directed to individuals under the age of 13. We do not knowingly collect data from children.
      </p>

      <h2 style={headingStyle}>10. Changes to This Policy</h2>
      <p style={textStyle}>
      We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
      </p>

      <h2 style={headingStyle}>11. Contact Us</h2>
      <p style={textStyle}>
      If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact us at:
     <ul>
  <li>VDOLogy</li>
  <li>Email: info@vdology.com</li>
  <li>Location: Dhaka, Bangladesh</li>
  </ul>
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

export default TermsContentPrivacy;