import React from 'react';

const SocialSection: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Compartilhe suas Conquistas</h2>
        <div className="flex space-x-6">
          <a href="#" className="text-white">
            <i className="fab fa-linkedin-in text-3xl"></i>
          </a>
          <a href="#" className="text-white">
            <i className="far fa-envelope text-3xl"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-whatsapp text-3xl"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-google-drive text-3xl"></i>
          </a>
        </div>
        <button className="bg-yellow-500 text-gray-800 mt-8 px-6 py-3 rounded-full">
          Cadastre-se
        </button>
      </div>
    </section>
  );
};

export default SocialSection;