export const getHighestCutoff = (college) => {
    if (!college.branches || college.branches.length === 0) return 0;
  
    const cutoffs = college.branches.map((branch) => branch.oc_cutoff || 0);
    return Math.max(...cutoffs);
  };