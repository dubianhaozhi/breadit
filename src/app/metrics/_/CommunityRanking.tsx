import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { communityRankingData } from "./metricsData";

export const CommunityRankingTitle = () => {
  return <>Post数が多いCommunityのランキング</>;
};

export const CommunityRankingTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Posts</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {communityRankingData.map((item, i) => (
          <TableRow key={i}>
            <TableCell>{item.no}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.posts}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
