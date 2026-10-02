const APPLICATIONS_KEY = "jrp-applications";

export function getApplications() {
  try {
    return JSON.parse(
      localStorage.getItem(APPLICATIONS_KEY)
    ) || [];
  } catch {
    return [];
  }
}

export function getUserApplications(userId) {
  const applications = getApplications();

  return applications.filter(
    (application) => application.userId === userId
  );
}

export function getApplicationById(applicationId) {
  const applications = getApplications();

  return applications.find(
    (application) => application.id === applicationId
  );
}

export function hasApplied(jobId, userId) {
  const applications = getApplications();

  return applications.some(
    (application) =>
      application.jobId === jobId &&
      application.userId === userId
  );
}

export function createApplication(applicationData) {
  const applications = getApplications();

  const application = {
    id: `application-${Date.now()}`,
    ...applicationData,
    status: "Submitted",
    appliedAt: new Date().toISOString(),
  };

  localStorage.setItem(
    APPLICATIONS_KEY,
    JSON.stringify([
      ...applications,
      application,
    ])
  );

  return application;
}