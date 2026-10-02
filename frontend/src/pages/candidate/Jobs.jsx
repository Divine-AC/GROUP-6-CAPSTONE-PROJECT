import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// import Footer from "../../components/common/Footer";
import JobCard from "../../components/jobs/JobCard";
import JobFilter from "../../components/jobs/JobFilter";
import JobSearch from "../../components/jobs/JobSearch";

import { jobs } from "../../data/jobs";
import { useAuth } from "../../context/AuthContext";

const NOW = Date.now();

const initialFilters = {
  category: "all",
  location: "all",
  experience: "all",
  datePosted: "all",
  employmentType: "all",
  workMode: "all",
};

function Jobs() {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated } = useAuth();

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(initialFilters);
  const [page, setPage] = useState(1);

  const [savedJobs, setSavedJobs] = useState(() => {
    try {
      return (
        JSON.parse(
          localStorage.getItem("jrp-saved-jobs")
        ) || []
      );
    } catch {
      return [];
    }
  });

  const pageSize = 10;

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const query = search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.category.toLowerCase().includes(query) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(query)
        );

      const matchesCategory =
        filters.category === "all" ||
        job.category === filters.category;

      const matchesLocation =
        filters.location === "all" ||
        job.location === filters.location;

      const matchesExperience = (() => {
        if (filters.experience === "all") {
          return true;
        }

        if (filters.experience === "0") {
          return job.minExperience === 0;
        }

        if (filters.experience === "1") {
          return job.maxExperience >= 1;
        }

        if (filters.experience === "2-4") {
          return (
            job.maxExperience >= 2 &&
            job.minExperience <= 4
          );
        }

        if (filters.experience === "5") {
          return job.minExperience >= 5;
        }

        return true;
      })();

      const ageHours =
        (NOW - new Date(job.postedAt).getTime()) /
        3600000;

      const matchesDate =
        filters.datePosted === "all" ||
        ageHours <= Number(filters.datePosted);

      const matchesEmployment =
        filters.employmentType === "all" ||
        job.employmentType ===
          filters.employmentType;

      const matchesWorkMode =
        filters.workMode === "all" ||
        job.workMode === filters.workMode;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation &&
        matchesExperience &&
        matchesDate &&
        matchesEmployment &&
        matchesWorkMode
      );
    });
  }, [search, filters]);

  const totalPages = Math.ceil(
    filteredJobs.length / pageSize
  );

  const displayedJobs = filteredJobs.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const updateSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const updateFilters = (filterUpdater) => {
    const nextFilters = filterUpdater(filters);

    /*
      The "Date posted" filter is a protected feature.

      Visitors can browse jobs and use the other filters,
      but they must log in before using a date-based filter.
    */
    if (
      nextFilters.datePosted !== "all" &&
      !isAuthenticated
    ) {
      navigate("/login", {
        state: {
          from:
            location.pathname +
            location.search,
        },
      });

      return;
    }

    setFilters(nextFilters);
    setPage(1);
  };

  const clearFilters = () => {
    setFilters(initialFilters);
    setSearch("");
    setPage(1);
  };

  const toggleSave = (id) => {
    setSavedJobs((previous) => {
      const updated = previous.includes(id)
        ? previous.filter(
            (savedId) => savedId !== id
          )
        : [...previous, id];

      localStorage.setItem(
        "jrp-saved-jobs",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  return (
    <>

      <main className="jobs-page">
        <section className="jobs-hero">
          <div className="jobs-hero-content">
            <span className="section-eyebrow">
              CAREER OPPORTUNITIES
            </span>

            <h1>
              Find work that moves you forward.
            </h1>

            <p>
              Explore illustrative opportunities across
              Nigeria and discover roles that match your
              skills and goals.
            </p>

            <JobSearch
              search={search}
              setSearch={updateSearch}
            />
          </div>
        </section>

        <div className="jobs-container">
          <div className="jobs-page-heading">
            <div>
              <h2>Explore opportunities</h2>

              <p>
                {filteredJobs.length} matching
                opportunities
              </p>
            </div>

            <span className="demo-notice">
              Illustrative demo listings
            </span>
          </div>

          <div className="jobs-layout">
            <aside className="jobs-sidebar">
              <JobFilter
                filters={filters}
                setFilters={updateFilters}
                onClear={clearFilters}
              />
            </aside>

            <section className="jobs-results">
              {displayedJobs.length > 0 ? (
                displayedJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    isSaved={savedJobs.includes(
                      job.id
                    )}
                    onToggleSave={toggleSave}
                  />
                ))
              ) : (
                <div className="jobs-empty">
                  <div className="empty-icon">
                    ⌕
                  </div>

                  <h3>
                    No matching jobs found
                  </h3>

                  <p>
                    Try changing your search or
                    clearing some filters.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {totalPages > 1 && (
                <div className="jobs-pagination">
                  <button
                    type="button"
                    disabled={page === 1}
                    onClick={() =>
                      setPage((previous) =>
                        previous - 1
                      )
                    }
                  >
                    Previous
                  </button>

                  <span>
                    Page {page} of {totalPages}
                  </span>

                  <button
                    type="button"
                    disabled={
                      page === totalPages
                    }
                    onClick={() =>
                      setPage((previous) =>
                        previous + 1
                      )
                    }
                  >
                    Next
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default Jobs;