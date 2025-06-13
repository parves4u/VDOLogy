import React from 'react';
import TermsContent from './TermsContent';
import BreadCrumb from '../components/Breadcrumb/BreadCrumb';
import InnerPageLayout from '../components/Layout/InnerPageLayout';
import TermsContentPrivacy from './TermsContentPrivacy';

const PrivacyPolicy = () => {
    return (
        <div>
            <InnerPageLayout>
                <BreadCrumb
                    pageTitle="Privacy Policy"
                    currentPage="Privacy Policy"
                    href="/terms-and-privacy"
                />
                <TermsContentPrivacy/>
            </InnerPageLayout>
        </div>
    );
};

export default PrivacyPolicy;