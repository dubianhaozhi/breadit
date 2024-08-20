"use client";

import { Trends } from "./Trends";

type Props = {
  data: any;
};
export function PostsLineChart({ data }: Props) {
  return (
    <Trends
      title="ポスト数の推移"
      data={data}
      dataKey="posts"
      config={{
        posts: {
          label: "ポスト数",
          color: "hsl(var(--chart-3))",
        },
      }}
    />
  );
}
