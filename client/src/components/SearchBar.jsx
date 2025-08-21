function SearchBar({ value, onChange }) {
    return (
      <div>
        <p>ค้นหาที่เที่ยว</p>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          className="text-center p-5"
        />
      </div>
    );
  }
  
  export default SearchBar;
  