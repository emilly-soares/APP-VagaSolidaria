import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-3xl font-bold mb-6">Inscreva-se</p>
        <p className="text-lg mb-6">Fique sabendo sobre as novas vagas</p>
        <div className="flex items-center max-w-md">
          <input
            type="email"
            placeholder="Seu endereço de e-mail"
            className="flex-1 py-3 px-4 rounded-l-full"
          />
          <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-r-full">
            Inscrever
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
