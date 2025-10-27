import { Link, useLocation, useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowIcon } from "./ArrowIcon";

function ProjectDetail() {
  const location = useLocation();
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  const breakpointsType = {
    mobile: {
      640: { slidesPerView: 2, spaceBetween: 16 },
      1024: { slidesPerView: 3, spaceBetween: 16 },
    },
    landscape: {
      640: { slidesPerView: 1.5, spaceBetween: 16 },
      1024: { slidesPerView: 2, spaceBetween: 20 },
    },
  };

  const renderYouTubeEmbed = () => (
    <>
      <h2 className="mb-4 text-xl sm:text-2xl dark:text-white">Demo</h2>
      <div className="relative w-full pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 h-full w-full rounded-lg"
          src="https://www.youtube.com/embed/Co7IYRsKCK0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );

  const renderGallery = (viewType: "mobile" | "landscape") => (
    <>
      <h2 className="mb-4 text-xl sm:text-2xl dark:text-white">Gallery</h2>
      <div className="mb-12 w-full">
        <style>{`
          .swiper-pagination-bullet {
            background: #000 !important;
          }
          .swiper-pagination-bullet-active {
            background: #111 !important;
          }
          .swiper-pagination {
            position: relative !important;
            margin-top: 20px !important;
          }
        `}</style>
        <Swiper
          modules={[Pagination, Mousewheel]}
          slidesPerView={1.2}
          spaceBetween={16}
          pagination={{ clickable: true }}
          mousewheel={{ forceToAxis: true }}
          breakpoints={breakpointsType[viewType]}
        >
          {project?.content.images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center rounded-lg"
            >
              <img
                src={`/projects/${project?.id}/${image}`}
                alt={`${project?.title} ${index + 1}`}
                className="h-auto w-full rounded-lg border-2 border-gray-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );

  const renderContent = () => {
    const imageType = project?.content.image_type;

    if (imageType === "none") return null;
    if (imageType === "mobile" || imageType === "landscape")
      return renderGallery(imageType);
    if (imageType === "video") return renderYouTubeEmbed();

    return null;
  };

  return (
    <div className="flex h-full flex-col items-center pt-20 dark:bg-black">
      <div className="relative flex w-[90%] max-w-4xl flex-col px-4 sm:w-full">
        <Link
          to="/projects"
          state={{ scrollProgress: location.state?.scrollProgress }}
          className="absolute -top-10 left-5 text-xl sm:fixed sm:top-10 sm:left-10 dark:text-white"
        >
          ← back
        </Link>
        <h1 className="mt-5 mb-4 text-xl sm:mt-0 sm:text-3xl dark:text-white">
          {project?.title}
        </h1>
        <p className="mb-4 dark:text-white">{project?.content.overview}</p>
        {(project?.content.github_link || project?.content.website_link) && (
          <>
            <h2 className="mb-2 text-xl sm:text-2xl dark:text-white">Links</h2>
            <div className="flex gap-5">
              {project?.content.website_link && (
                <a
                  href={project.content.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 flex cursor-pointer text-lg underline decoration-transparent transition-colors duration-300 ease-in-out hover:decoration-current dark:text-white"
                >
                  Website
                  {ArrowIcon()}
                </a>
              )}
              {project?.content.github_link && (
                <a
                  href={project.content.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 flex cursor-pointer text-lg underline decoration-transparent transition-colors duration-300 ease-in-out hover:decoration-current dark:text-white"
                >
                  Code
                  {ArrowIcon()}
                </a>
              )}
            </div>
          </>
        )}
        {renderContent()}
      </div>
    </div>
  );
}

export default ProjectDetail;
