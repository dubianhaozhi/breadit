import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { postRankingData } from "./metricsData";

export const PostRankingTitle = () => {
  return <>Upvote数が多いPostのランキング</>;
};

export const PostRankingTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Community</TableHead>
          <TableHead>Upvotes</TableHead>
          <TableHead>Author</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {postRankingData.map((item, i) => (
          <TableRow key={i}>
            <TableCell>{item.no}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.community}</TableCell>
            <TableCell>{item.upvotes}</TableCell>
            <TableCell>{item.author}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
