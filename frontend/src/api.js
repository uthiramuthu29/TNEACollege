export const fetchColleges = async (search) =>{
    const res = await fetch(`http://127.0.0.1:8000/colleges?search=${search}`);
    if (!res.ok) throw new Error('Failed to fetch colleges');
    const data = await res.json();
    return data.colleges || [];
}

export const fetchYears = async () =>{
    const res = await fetch(`http://127.0.0.1:8000/years`);
    if (!res.ok) throw new Error('Failed to fetch years');
    const data = await res.json();
    return data.years || [];
}

export const fetchDistricts = async () =>{
    const res = await fetch(`http://127.0.0.1:8000/districts`);
    if (!res.ok) throw new Error('Failed to fetch districts');
    const data = await res.json();
    return data.districts || [];
}

export const fetchBranches = async () =>{
    const res = await fetch(`http://127.0.0.1:8000/branches`);
    if (!res.ok) throw new Error('Failed to fetch branches');
    const data = await res.json();
    return data.branches || [];
}