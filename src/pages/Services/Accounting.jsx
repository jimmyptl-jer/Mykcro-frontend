import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Accounting = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Accounting Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ServiceCard
          title="Quickbooks"
          link="https://quickbooks.intuit.com/ca/sign-in/"
          description="Online accounting software for small businesses."
        />
        <ServiceCard
          title="Sage"
          link="https://id.sage.com/login?state=hKFo2SB3bFkxWnJzQlBlckNibEYwcFNSMFc3Vi1zVzNzVDhOSaFupWxvZ2luo3RpZNkgM3QwLWpTUmc1UXZ1MkdES0lldkdIcnZTMHZWMTJRMEyjY2lk2SAyZ09JMXlnSlFzRUk3WURoZFhINUcwTU03WUVLT3lwUg&client=2gOI1ygJQsEI7YDhdXH5G0MM7YEKOypR&protocol=oauth2&connection=&login_hint=eyJmbG93X2hpbnQiOiJsb2dpbiJ9&prompt=&redirect_uri=https%3A%2F%2Fcentral.na.sageone.com%2Fauth%2Fcloudid%2Fcallback&response_type=code&scope=openid%20profile%20email#/"
          description="Integrated accounting, payroll, and payment system."
        />
        <ServiceCard
          title="Wave"
          link="https://my.waveapps.com/login/"
          description="Free accounting software for small businesses."
        />
      </div>
    </div>
  );
};



export default Accounting;
