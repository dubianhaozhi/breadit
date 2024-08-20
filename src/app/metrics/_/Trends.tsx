"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/Chart";
import { calculateMonthOverMonthGrowth } from "./utils";

type Props = {
  title: string;
  data: any;
  dataKey: string;
  config: ChartConfig;
};
export function Trends({ title, data, dataKey, config }: Props) {
  const growthRate = calculateMonthOverMonthGrowth(data)[dataKey];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{`${data.at(0).month} - ${
          data.at(-1).month
        }`}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey={dataKey}
              type="linear"
              stroke={`var(--color-${dataKey})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending {growthRate >= 0 ? "up" : "down"} by{" "}
          {Math.abs(calculateMonthOverMonthGrowth(data)[dataKey])}% this month{" "}
          {growthRate >= 0 ? (
            <TrendingUp className="h-4 w-4" color="green" />
          ) : (
            <TrendingDown className="h-4 w-4" color="red" />
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last {data.length} months
        </div>
      </CardFooter>
    </Card>
  );
}
