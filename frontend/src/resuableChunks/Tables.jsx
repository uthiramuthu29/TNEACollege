import { useSelector } from "react-redux";
import { formatCutoff, getTotalInitialSeats } from "../utils";

export function CutoffTable({ college }) {
  return (
    <table className="cutoff-table w-full mt-2.5 bg-gray-100 rounded-lg ">
      <thead>
        <tr>
          <th>Dept</th>
          <th>OC</th>
          <th>BC</th>
          <th>BCM</th>
          <th>MBC</th>
          <th>SC</th>
          <th>ST</th>
        </tr>
      </thead>
      <tbody>
        {college.branches &&
          college.branches.map((branch, index) => (
            <tr key={branch.branch_code || index}>
              <td>{branch.branch_code}</td>
              <td>{formatCutoff(branch.oc_cutoff)}</td>
              <td>{formatCutoff(branch.bc_cutoff)}</td>
              <td>{formatCutoff(branch.bcm_cutoff)}</td>
              <td>{formatCutoff(branch.mbc_cutoff)}</td>
              <td>{formatCutoff(branch.sc_cutoff)}</td>
              <td>{formatCutoff(branch.st_cutoff)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export function BranchTable({ college, community: propCommunity }) {
  const { cutoff, community: reduxCommunity } = useSelector(
    (state) => state.cutoff
  );
  const community = propCommunity || reduxCommunity;
  const isCutoffMode = Boolean(cutoff && community);
  const isCommunityNotOC = community?.toLowerCase() !== "oc";
  const communityCutoffKey = community
    ? `${community.toLowerCase()}_cutoff`
    : null;

  return (
    <table className="branch-table w-full mt-2.5 bg-gray-100 rounded-lg ">
      <thead>
        <tr>
          <th className="text-left">Branch</th>
          {isCutoffMode && (
            <>
              <th className="text-center">OC Cutoff</th>
              {isCommunityNotOC && (
                <th className="text-center">{community.toUpperCase()} Cutoff</th>
              )}
            </>
          )}
          <th>Seats</th>
        </tr>
      </thead>
      <tbody>
        {college.branches &&
          college.branches.map((branch, index) => (
            <tr key={branch.branch_code || index}>
              <td className="text-left!">{branch.branch_name}</td>
              {isCutoffMode && (
                <>
                  <td className="text-center font-medium">
                    {formatCutoff(branch.oc_cutoff)}
                  </td>
                  {isCommunityNotOC && (
                    <td className="text-center font-medium">
                      {formatCutoff(branch[communityCutoffKey])}
                    </td>
                  )}
                </>
              )}
              <td className="text-center">{getTotalInitialSeats(branch)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
