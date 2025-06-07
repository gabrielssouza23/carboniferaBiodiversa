import React from 'react';
import { useNavigate } from 'react-router-dom';

function getInitials(name) {
  if (!name) return '';
  const words = name.trim().split(' ');
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function ArticleCard({ image, title, summary, author, date, link, featured }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  if (featured) {
    return (
      <div
        className="flex flex-col md:flex-row items-stretch bg-transparent overflow-hidden mb-8 cursor-pointer transition-all hover:-translate-y-1 rounded-lg min-w-[220px] max-w-full"
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        <div className="w-full md:w-1/2 h-36 xs:h-44 sm:h-56 md:h-auto bg-gray-100 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>
        <div className="flex flex-col justify-between p-3 sm:p-5 md:p-6 w-full md:w-1/2">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 text-black">{title}</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 line-clamp-3">{summary}</p>
          </div>
          <div className="flex items-center mt-4">
            {author.image ? (
              <img src={author.image} alt={author.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-4" />
            ) : (
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-gray-500 text-lg sm:text-xl font-semibold">
                {getInitials(author.name)}
              </div>
            )}
            <div>
              <div className="text-base sm:text-lg text-gray-700 font-medium">{author.name}</div>
              <div className="text-xs sm:text-sm text-gray-400">{date}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full lg:max-w-[460px] min-w-[220px] border border-gray-200 bg-transparent pb-3 sm:pb-4 font-sans transition-all duration-200 cursor-pointer hover:-translate-y-1 rounded-lg flex flex-col"
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="w-full h-44 xs:h-40 bg-gray-100 rounded-t-md flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-medium mt-4 mb-2 mx-3 sm:mx-4 text-black">{title}</h2>
      <p className="text-xs sm:text-sm md:text-base text-gray-500 mx-3 sm:mx-4 mb-3 sm:mb-4 line-clamp-5">{summary}</p>
      <div className="flex items-center ml-3 sm:ml-4 mt-2">
        {author.image ? (
          <img src={author.image} alt={author.name} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover mr-3" />
        ) : (
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-gray-500 text-base sm:text-lg">
            {getInitials(author.name)}
          </div>
        )}
        <div>
          <div className="text-sm sm:text-base text-gray-500">{author.name}</div>
          <div className="text-xs sm:text-sm text-gray-400">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard; 