import CutoffCalculator from "../components/CutoffCalculator";
import HowFormula from "../components/HowFormula";
import { PageHeading, PagePara } from "../resuableChunks/Typography";

export default function CalculatorPage() {
    return (
        <div className="">
            <div className="intro mb-8 ">
                <PageHeading>Cutoff Calculator</PageHeading>
                <PagePara>Calculate your TNEA aggregate score out of
                    200 based on your HSC board marks.</PagePara>
            </div>
            <CutoffCalculator />
            <HowFormula />
        </div>
    )
}