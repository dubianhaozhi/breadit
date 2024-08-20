import { ChartDataPoint } from "./types";

export function calculateMonthOverMonthGrowth(data: ChartDataPoint[]): {
  [key: string]: number;
} {
  if (data.length < 2) {
    throw new Error(
      "At least two months of data are required to calculate growth."
    );
  }

  const currentMonth = data[data.length - 1];
  const previousMonth = data[data.length - 2];

  const calculateGrowth = (current: number, previous: number): number => {
    return Number((((current - previous) / previous) * 100).toFixed(2));
  };

  return {
    users: calculateGrowth(currentMonth.users, previousMonth.users),
    communities: calculateGrowth(
      currentMonth.communities,
      previousMonth.communities
    ),
    posts: calculateGrowth(currentMonth.posts, previousMonth.posts),
  };
}
