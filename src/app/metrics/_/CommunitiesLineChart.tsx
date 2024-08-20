"use client";

import { Trends } from "./Trends";

type Props = {
  data: any;
};
export function CommunitiesLineChart({ data }: Props) {
  return (
    <Trends
      title="コミュニティ数の推移"
      data={data}
      dataKey="communities"
      config={{
        communities: {
          label: "コミュニティ数",
          color: "hsl(var(--chart-2))",
        },
      }}
    />
  );
}
