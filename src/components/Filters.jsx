export function Filters({ filters, onFilterChange }) {
  const statuses = ["", "Alive", "Dead", "unknown"];
  const genders = ["", "Female", "Male", "Genderless", "unknown"];

  return (
    <div className="filters">
      <select
        value={filters.status}
        onChange={(e) => onFilterChange("status", e.target.value)}
        className="filter-select"
      >
        <option value="">All Status</option>
        {statuses
          .filter((status) => status !== "")
          .map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
      </select>

      <select
        value={filters.gender}
        onChange={(e) => onFilterChange("gender", e.target.value)}
        className="filter-select"
      >
        <option value="">All Genders</option>
        {genders
          .filter((gender) => gender !== "")
          .map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
      </select>
    </div>
  );
}
