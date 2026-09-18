export const fetchColleges = async (search) =>{
    const res = await fetch(`http://127.0.0.1:8000/colleges?search=${search}`);
    if (!res.ok) throw new Error('Failed to fetch colleges');
    const data = await res.json();
    return data.colleges || [];
}