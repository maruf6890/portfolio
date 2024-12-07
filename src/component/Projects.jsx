import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import ProjectCard from './ProductCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  
  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="web-container border-x py-10 border-x-1 border-slate-600" id="project">
      <SectionTitle title="Project Highlights" subtitle="Discover my projects" />
      <div className="p-5 md:p-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper text-white"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
