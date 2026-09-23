const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchColleges = async (search) => {
  // const params = new URLSearchParams();

  // if (search) params.set("search", search);
  // if (year) params.set("year", year);
  // if (district) params.set("district", district);
  // if (branch) params.set("branch", branch);
  // if (community) params.set("community", community);

  const res = await fetch(`${BASE_URL}/colleges?${search}`);
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
