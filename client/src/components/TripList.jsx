import { useEffect, useState } from "react";
import { getTrips } from "../api/tripService";
import SearchBar from "./SearchBar";
import TripItem from "./TripItem";

function TripList() {
  const [trips, setTrips] = useState([]);
  const [keyword, setKeyword] = useState("");

    const handleTagClick = (tag) => {
    const words = keyword.split(" ").filter(Boolean);
    
    if (words.includes(tag)) return;
    
    const newKeyword = [...words, tag].join(" ");
    setKeyword(newKeyword);
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrips(keyword);
        setTrips(data);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <div className="">
        
      <SearchBar value={keyword} onChange={setKeyword} />
      
      <div className="">
        {trips.map((trip) => (
          <TripItem key={trip.eid} trip={trip} onTagClick={handleTagClick} />
        ))}
      </div>
    
    </div>
  );
}

export default TripList;
