"use client";

import { Trends } from "./Trends";

type Props = {
  data: any;
};
export function UsersLineChart({ data }: Props) {
  return (
    <Trends
      title="ユーザー数の推移"
      data={data}
      dataKey="users"
      config={{
        users: {
          label: "ユーザー数:",
          color: "hsl(var(--chart-1))",
        },
      }}
    />
  );
}
