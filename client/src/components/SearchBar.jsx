function SearchBar({ value, onChange }) {
    return (
      <div className="max-w-2xl mx-auto px-4">
        <p className="mb-2">ค้นหาที่เที่ยว</p>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          className="w-full p-2 border-b-2 border-gray-300 text-center"
        />
      </div>
    );
  }
  
  export default SearchBar;
  