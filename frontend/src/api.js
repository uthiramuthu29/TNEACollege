const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const fetchColleges = async (search) => {
  const start = performance.now();

  const res = await fetch(`${BASE_URL}/colleges?search=${search}`);
  if (!res.ok) throw new Error("Failed to fetch colleges");
  const data = await res.json();
  const end = performance.now();

  console.log(
    `fetchColleges took ${((end - start) / 1000).toFixed(2)} seconds`,
  );
  return data.colleges || [];
};

export const fetchYears = async () => {
  const start = performance.now();
  const res = await fetch(`${BASE_URL}/years`);
  if (!res.ok) throw new Error("Failed to fetch years");
  const data = await res.json();
  const end = performance.now();

  console.log(
    `fetchYears took ${((end - start) / 1000).toFixed(2)} seconds`,
  );
  return data.years || [];
};

export const fetchDistricts = async () => {
  const start = performance.now();
  const res = await fetch(`${BASE_URL}/districts`);
  if (!res.ok) throw new Error("Failed to fetch districts");
  const data = await res.json();
  const end = performance.now();

  console.log(
    `fetchDistricts took ${((end - start) / 1000).toFixed(2)} seconds`,
  );
  return data.districts || [];
};

export const fetchBranches = async () => {
  const start = performance.now();
  const res = await fetch(`${BASE_URL}/branches`);
  if (!res.ok) throw new Error("Failed to fetch branches");
  const data = await res.json();
  const end = performance.now();

  console.log(
    `fetchBranches took ${((end - start) / 1000).toFixed(2)} seconds`,
  );
  return data.branches || [];
};
