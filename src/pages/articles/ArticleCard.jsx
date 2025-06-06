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
        className="flex flex-col h-[24rem] md:flex-row items-stretch bg-white overflow-hidden mb-8 cursor-pointer transition-all hover:-translate-y-1"
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        <div className="md:w-1/2 w-full h-60 md:h-auto bg-gray-100 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>
        <div className="flex flex-col justify-between p-6 md:w-1/2 w-full">
          <div>
            <h2 className="text-3xl font-medium mb-2 text-black">{title}</h2>
            <p className="text-base text-gray-600 mb-4">{summary}</p>
          </div>
          <div className="flex items-center mt-4">
            {author.image ? (
              <img src={author.image} alt={author.name} className="w-12 h-12 rounded-full object-cover mr-4" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-gray-500 text-xl font-semibold">
                {getInitials(author.name)}
              </div>
            )}
            <div>
              <div className="text-lg text-gray-700 font-medium">{author.name}</div>
              <div className="text-sm text-gray-400">{date}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-[375px] border border-gray-200 bg-white pb-4 font-sans transition-all duration-200 cursor-pointer hover:-translate-y-1"
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="w-full h-40 bg-gray-100 rounded-t-md flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
      <h2 className="text-2xl font-medium mt-5 mb-2 mx-4 text-black">{title}</h2>
      <p className="text-base text-gray-500 mx-4 mb-4">{summary}</p>
      <div className="flex items-center ml-4 mt-2">
        {author.image ? (
          <img src={author.image} alt={author.name} className="w-9 h-9 rounded-full object-cover mr-3" />
        ) : (
          <div className="w-9 h-9 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-gray-500 text-lg">
            {getInitials(author.name)}
          </div>
        )}
        <div>
          <div className="text-base text-gray-500">{author.name}</div>
          <div className="text-sm text-gray-400">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard; 