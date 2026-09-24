const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchColleges = async ({ search, district, branch }) => {
  const params = new URLSearchParams();

  if (search) params.set("search", search);
  if (district) params.set("district", district);
  if (branch) params.set("branch", branch);

  const res = await fetch(`${BASE_URL}/colleges?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch colleges");
  const data = await res.json();
  return data.colleges || [];
};

export const fetchYears = async () => {
  const res = await fetch(`${BASE_URL}/years`);
  if (!res.ok) throw new Error("Failed to fetch years");
  const data = await res.json();
  return data.years || [];
};

export const fetchDistricts = async () => {
  const res = await fetch(`${BASE_URL}/districts`);
  if (!res.ok) throw new Error("Failed to fetch districts");
  const data = await res.json();
  return data.districts || [];
};

export const fetchBranches = async () => {
  const res = await fetch(`${BASE_URL}/branches`);
  if (!res.ok) throw new Error("Failed to fetch branches");
  const data = await res.json();
  return data.branches || [];
};


export const fetchAdmissions = async ({ cutoff, community }) => {
  console.log("🔥 fetchAdmissions CALLED");
  console.log("cutoff:", cutoff);
  console.log("community:", community);

  const params = new URLSearchParams();

  if (cutoff) params.set("max_cutoff", cutoff);
  if (community) params.set("cutoff_community", community);

  const url = `${BASE_URL}/admissions?${params.toString()}`;

  console.log("🔥 Admissions URL:", url);

  const res = await fetch(url);

  console.log("🔥 Response status:", res.status);

  if (!res.ok) {
    throw new Error("Failed to fetch admissions");
  }

  const data = await res.json();

  console.log("🔥 Admissions response:", data);

  return data.results || [];
};
