import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Banking = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Banking Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ServiceCard
          title="Bank of Montreal (BMO)"
          link="https://www22.bmo.com/uiauth/AuthWeb/index.html?TAM_OP=login&ERROR_CODE=0x00000000&URL=%2F&HOSTNAME=www22.bmo.com&AUTHNLEVEL=4&PROTOCOL=https&v=2411202311304#/login/"
          description="Banking services provided by Bank of Montreal (BMO)."
        />
        <ServiceCard
          title="CIBC"
          link="https://www.cibc.com/en/business.html"
          description="Banking services provided by Canadian Imperial Bank of Commerce (CIBC)."
        />
        <ServiceCard
          title="RBC"
          link="https://secure.royalbank.com/statics/login-service-ui/index#/full/signin?_gl=1*k6fmqd*_gcl_au*NjMzNDM0NjY5LjE3MDU2MTg0MDc.*_ga*MTIzMDk4NzU3My4xNzA1NjE4NDA4*_ga_89NPCTDXQR*MTcwNTYxODQwNy4xLjAuMTcwNTYxODQwNy42MC4wLjA.&_ga=2.250853314.575515567.1705618408-1230987573.1705618408&LANGUAGE=ENGLISH"
          description="Banking services provided by Royal Bank of Canada (RBC)."
        />
        <ServiceCard
          title="Scotiabank"
          link="https://uas1.cams.scotiabank.com/aos/sco/login/scologin.bns"
          description="Banking services provided by Scotiabank."
        />
        <ServiceCard
          title="TD Bank"
          link="https://businessbanking.tdcommercialbanking.com/WBB/LoginDisplay"
          description="Banking services provided by TD Bank Group."
        />
      </div>
    </div>
  );
};

export default Banking;
