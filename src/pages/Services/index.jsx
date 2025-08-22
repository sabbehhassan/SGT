import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import webpic from "../../assets/services_pic/webpic.jpg";
import aipic from "../../assets/services_pic/aipic.jpg";
import apppic from "../../assets/services_pic/apppic.jpg";
import amazonpic from "../../assets/services_pic/amazonpic.jpg";
import walmartpic from "../../assets/services_pic/walmartpic.jpg";
import shopifypic from "../../assets/services_pic/shopifypic.jpg";
import uipic from "../../assets/services_pic/uipic.jpg";
import tradingpic from "../../assets/services_pic/tradingpic.jpg";
import bookkeepingpic from "../../assets/services_pic/bookkeepingpic.jpg";

const ServicesPage = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();

  const services = [
    { id: "web-development", name: "Web Development", image: webpic },
    { id: "ai-ml", name: "AI & ML", image: aipic },
    { id: "app-development", name: "App Development", image: apppic },
    { id: "amazon", name: "Amazon", image: amazonpic },
    { id: "walmart", name: "Walmart", image: walmartpic },
    { id: "shopify", name: "Shopify", image: shopifypic },
    { id: "graphic-design", name: "Graphic, UX/UI Design", image: uipic },
    { id: "trading", name: "Trading", image: tradingpic },
    { id: "bookkeeping", name: "Bookkeeping", image: bookkeepingpic },
  ];

  const itemsPerPageDesktop = 3;
  const totalPagesDesktop = Math.ceil(services.length / itemsPerPageDesktop);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedService, setSelectedService] = useState(serviceId || null);
  const cardsContainerRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);

  const currentServicesDesktop = services.slice(
    (currentPage - 1) * itemsPerPageDesktop,
    currentPage * itemsPerPageDesktop
  );

  useEffect(() => {
    if (serviceId) {
      setSelectedService(serviceId);
      const element = document.getElementById(serviceId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [serviceId]);

  useEffect(() => {
    if (cardsContainerRef.current) {
      const firstCard = cardsContainerRef.current.querySelector("div");
      if (firstCard) setCardHeight(firstCard.offsetHeight);
    }
  }, [currentPage]);

  const selectService = (id) => {
    setSelectedService(id);
    navigate(`/services/${id}`);
  };

  const nextPage = () => {
    if (currentPage < totalPagesDesktop) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="bg-white py-20 px-5 text-center relative">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Comprehensive Website Services to Ignite Your Online Success. Empower
        Your Business with Powerful Online Services from our Website.
      </p>

      {/* Desktop View */}
      <div className="hidden lg:block relative mt-10">
        {/* Left Button */}
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          style={{ height: cardHeight }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-cyan-400 text-white p-3 text-lg rounded-l-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-cyan-500 transition z-10"
        >
          &larr;
        </button>

        {/* Cards Grid */}
        <div ref={cardsContainerRef} className="grid gap-5 grid-cols-3 mx-12">
          {currentServicesDesktop.map((service) => (
            <div
              key={service.id}
              id={service.id}
              onClick={() => selectService(service.id)}
              className={`p-5 border rounded-lg cursor-pointer transition-transform transform ${
                selectedService === service.id
                  ? "bg-cyan-400 scale-105 shadow-lg"
                  : "bg-gray-100"
              }`}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-80 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-bold">{service.name}</h3>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPagesDesktop}
          style={{ height: cardHeight }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-cyan-400 text-white p-3 text-lg rounded-r-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-cyan-500 transition z-10"
        >
          &rarr;
        </button>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden mt-10 overflow-x-auto scroll-smooth snap-x snap-mandatory px-5 hide-scrollbar">
        <div className="flex gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex-shrink-0 w-80 p-5 border rounded-lg cursor-pointer transition-transform transform snap-center"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-80 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-bold">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
