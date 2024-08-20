"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CommunityRankingTable,
  CommunityRankingTitle,
} from "./_/CommunityRanking";
import { PostRankingTable, PostRankingTitle } from "./_/PostRanking";
import { UsersLineChart } from "./_/UsersLineChart";
import { CommunitiesLineChart } from "./_/CommunitiesLineChart";
import { PostsLineChart } from "./_/PostsLineChart";
import { chartData } from "./_/metricsData";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">推移データ</h2>
        <div className="flex justify-between gap-2">
          <div className="w-full">
            <UsersLineChart data={chartData} />
          </div>
          <div className="w-full">
            <CommunitiesLineChart data={chartData} />
          </div>
          <div className="w-full">
            <PostsLineChart data={chartData} />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">ランキングデータ</h2>
        <Tabs defaultValue="community">
          <TabsList>
            <TabsTrigger value="community">
              <CommunityRankingTitle />
            </TabsTrigger>
            <TabsTrigger value="post">
              <PostRankingTitle />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="community">
            <CommunityRankingTable />
          </TabsContent>
          <TabsContent value="post">
            <PostRankingTable />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default page;
