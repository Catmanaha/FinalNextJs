import DebitCreditOverviewBarChart from "@/components/DebitCreditOverviewBarChart";
import { StyledTitle } from "@/components/StyledComponents";

export default function DebitCreditOverview() {
    return (
        <div>
            <StyledTitle>Debit & Credit Overview</StyledTitle>
            <DebitCreditOverviewBarChart />
        </div>
    );
}
