import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const ImageDisclose = ({ imageUrl, title, description }) => {
  const [expanded, setExpanded] = useState(false);
  const focus = useRef(null);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (expanded && focus.current) {
      focus.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [expanded]);
  return (
    <div
      className={
        expanded
          ? 'relative overflow-hidden transition-max-h'
          : 'bg-red-200 relative overflow-hidden transition-max-h'
      }
      ref={focus}
    >
      <div
        className={
          expanded ? 'absolute top-8 right-8 md:text-white z-10' : 'hidden'
        }
      >
        <button onClick={handleExpand}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className={expanded ? 'hidden md:grid md:h-full' : 'h-full md:h-60'}>
        <Image src={imageUrl} alt={title} height={400} width={800} />
      </div>
      <div
        className={
          expanded
            ? 'md:absolute md:inset-0 md:flex md:items-center md:justify-center md:bg-neutral-800 md:bg-opacity-75 md:backdrop-blur-sm md:p-4 h-full bg-sand p-8'
            : 'absolute inset-0 flex items-center justify-center bg-neutral-300 bg-opacity-70 p-4'
        }
      >
        <div className="text-center grid justify-center gap-y-8">
          <div className="grid gap-4">
            <div
              className={
                expanded
                  ? 'text-2xl md:text-white font-bold'
                  : 'text-2xl md:text-neutral-800 font-bold'
              }
            >
              {title}
            </div>
            <div>
              <button
                onClick={handleExpand}
                className={`border border-gray-800 px-8 p-1 rounded-full text-black ${
                  expanded
                    ? 'hidden'
                    : 'hover:bg-gray-800 hover:bg-opacity-50 hover:text-white'
                }`}
              >
                Read more
              </button>
            </div>
          </div>
          {expanded && (
            <div className="text-left max-w-2xl">
              <p className="md:text-white text-justify">{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageDisclose;
