function TripItem({ trip, onTagClick }) {
    return (
      <div className="flex flex-col md:flex-row gap-7 my-5 max-w-4xl mx-auto px-4">
        {/* Main Photo */}
        <div className="flex flex-col md:w-1/2 gap-2">
          <img
            src={trip.photos[0]}
            alt={trip.title}
            className="h-full object-cover rounded-2xl"
          />
        </div>
  
        {/* Info */}
        <div className="flex flex-col md:w-2/3 md:ml-4 gap-1">
          <div>
            <a
              href={trip.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-gray-800 hover:underline underline-offset-2"
            >
              {trip.title}
            </a>
            <p className="mt-2 text-gray-600 line-clamp-1">
              {trip.description.length > 100
                ? `${trip.description.slice(0, 100)} ...`
                : trip.description}
            </p>
          </div>
  
          <a
            href={trip.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline underline-offset-2"
          >
            อ่านต่อ
          </a>
  
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
          <span className="text-gray-500 text-sm">หมวด</span>
            {trip.tags.map((tag, index) => (
              <span
                key={index}
                onClick={() => onTagClick(tag)}
                className="text-gray-500 text-sm underline underline-offset-2 
                            cursor-pointer hover:text-blue-500 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
  
          {/* Thumbnails */}
          <div className="flex overflow-x-auto mt-4 space-x-2">
            {trip.photos.slice(1, 4).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-24 h-24 flex-shrink-0 object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default TripItem;
  