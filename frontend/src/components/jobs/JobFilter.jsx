
import {
  categories,
  states,
  experienceOptions,
  dateOptions,
} from "../../data/jobs";

function JobFilter({ filters, setFilters, onClear }) {
  const updateFilter = (name, value) => {
    setFilters((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <section className="job-filter">
      <div className="filter-heading">
        <div>
          <h3>Filter jobs</h3>
          <p>Choose your preferences</p>
        </div>

        <button type="button" onClick={onClear} className="clear-filters">
          Clear all
        </button>
      </div>

      <label htmlFor="category">Job category</label>
      <select
        id="category"
        value={filters.category}
        onChange={(e) => updateFilter("category", e.target.value)}
      >
        <option value="all">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <label htmlFor="location">Location</label>
      <select
        id="location"
        value={filters.location}
        onChange={(e) => updateFilter("location", e.target.value)}
      >
        <option value="all">All Nigerian states</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state === "Abuja" ? "Abuja (FCT)" : `${state} State`}
          </option>
        ))}
      </select>

      <label htmlFor="experience">Experience</label>
      <select
        id="experience"
        value={filters.experience}
        onChange={(e) => updateFilter("experience", e.target.value)}
      >
        {experienceOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <label htmlFor="datePosted">Date posted</label>
      <select
        id="datePosted"
        value={filters.datePosted}
        onChange={(e) => updateFilter("datePosted", e.target.value)}
      >
        {dateOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <label htmlFor="employmentType">Employment type</label>
      <select
        id="employmentType"
        value={filters.employmentType}
        onChange={(e) => updateFilter("employmentType", e.target.value)}
      >
        <option value="all">All employment types</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>

      <label htmlFor="workMode">Work mode</label>
      <select
        id="workMode"
        value={filters.workMode}
        onChange={(e) => updateFilter("workMode", e.target.value)}
      >
        <option value="all">All work modes</option>
        <option value="On-site">On-site</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
      </select>
    </section>
  );
}

export default JobFilter;