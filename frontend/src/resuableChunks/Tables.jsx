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

export function BranchTable({ college }) {
    return (
      <table className="branch-table w-full mt-2.5 bg-gray-100 rounded-lg ">
        <thead>
          <tr>
            <th className="text-left" >Branch</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          {college.branches &&
            college.branches.map((branch, index) => (
              <tr key={branch.branch_code || index}>
                <td className="text-left!">{branch.branch_name}</td>
                <td className="">{getTotalInitialSeats(branch)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
