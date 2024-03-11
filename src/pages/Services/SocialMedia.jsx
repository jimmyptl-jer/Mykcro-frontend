import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const SocialMedia = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Social Media Platforms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ServiceCard
          title="Facebook"
          link="https://www.facebook.com/login/"
          description="Connect with friends and family on Facebook."
        />
        <ServiceCard
          title="Instagram"
          link="https://www.instagram.com"
          description="Share photos and videos with your followers on Instagram."
        />
        <ServiceCard
          title="TikTok"
          link="https://www.tiktok.com/login"
          description="Create and discover short videos on TikTok."
        />
        <ServiceCard
          title="Twitter"
          link="https://twitter.com/i/flow/login"
          description="Join the conversation on Twitter."
        />
      </div>
    </div>
  );
};

export default SocialMedia;
