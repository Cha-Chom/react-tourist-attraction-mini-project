function TripItem({ trip }) {
    return (
      <div className="">
        {/* Main Photo */}
        <div className="">
          <img
            src={trip.photos[0]}
            alt={trip.title}
            className="w-100"
          />
        </div>
  
        {/* Info */}
        <div className="">
          <div>
            <a
              href={trip.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              {trip.title}
            </a>
            <p className="">
              {trip.description.length > 100
                ? `${trip.description.slice(0, 100)} ...`
                : trip.description}
            </p>
          </div>
  
          <a
            href={trip.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            อ่านต่อ
          </a>
  
          {/* Tags */}
          <div className="">
            {trip.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2"
              >
                {tag}
              </span>
            ))}
          </div>
  
          {/* Thumbnails */}
          <div className="">
            {trip.photos.slice(1, 4).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-24 h-24"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default TripItem;
  