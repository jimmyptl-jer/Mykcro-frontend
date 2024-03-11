import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Marketing = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Marketing Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ServiceCard
          title="Canva"
          link="https://www.canva.com/login"
          description="Design anything with Canva's easy-to-use platform."
        />
        <ServiceCard
          title="Constant Contact"
          link="https://login.constantcontact.com/login/login.sdo?goto=https%3A%2F%2Fgo.constantcontact.com%2Fprocessing_login.jsp%3Fcc%3DGOO-251182%26gad_source%3D1%26gclid%3DCj0KCQiAtaOtBhCwARIsAN_x-3INU53PZycbMle7ZjChSWgXb1Sk7C4Pv2ErZX64EF5Pfeg2Dm94UncaAu8nEALw_wcB%26gclsrc%3Daw.ds%26pn%3Dsearch&partner_name=search"
          description="Email marketing platform for small businesses."
        />
        <ServiceCard
          title="GoDaddy"
          link="https://sso.godaddy.com/?realm=idp&app=venture-redirector&path=/"
          description="Domain registration and web hosting services."
        />
        <ServiceCard
          title="Klayvio"
          link="https://www.klaviyo.com/login"
          description="E-commerce marketing automation platform."
        />
        <ServiceCard
          title="Mailchimp"
          link="https://login.mailchimp.com/"
          description="Marketing automation platform and email marketing service."
        />
        <ServiceCard
          title="Squarespace"
          link="https://login.squarespace.com/api/1/login/oauth/provider/authorize?client_id=wAHMs0yNCd2CyyoI0Eclva4GmZ1qqRPx&redirect_uri=https%3A%2F%2Fwww.squarespace.com%2Foauth-connect&state=v1.local.sQBgdBAL7G9aMVWUflLz3ulOLM_1tS55JWFWzzyH5gfBZ_oEM_wDMEoiDHBaOUuVohh29kqZxMQilq8JF1F7x_eWL8eUFAdqvbLDbw_tsmDmJv23XByCcV0v-hSlMpSmZY2-3j31BDR6gJe4SOt7GSvPrthdeQp5Fc6N1t8eniitPPE1JPgMa-SY-WOGPkRkybi6hbcW3zBoDnGWx1pRTIK_Qm7sF0YnJQbO9nHkjuAtDW0EfcrU7l_8aSyhfclehZ869vWfi7n7TfIz_Aiizb-LmEQ1HfqMbpuQmeafv5cnq5jDX9zt1KlladkhX4gMxB4M__3Rvts6HwiyrQI4rD8x-CTYzovKgr-yFqnDpMWVzzKV-yz0gT7A1Gsza-x80qgHtw&overrideLocale=en-US&options=%7B%22isCloseVisible%22%3Atrue%2C%22isCreateAccountViewActive%22%3Afalse%7D#/"
          description="Website builder and hosting service."
        />
        <ServiceCard
          title="Wix"
          link="https://users.wix.com/signin/?forceRender=true"
          description="Website builder and hosting service."
        />
      </div>
    </div>
  );
};

export default Marketing;
