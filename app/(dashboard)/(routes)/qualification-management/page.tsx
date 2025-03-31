'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/components/icons";

/**
 * 任职资格管理页面组件
 * @return {React.ReactElement} 任职资格管理页面
 */
export default function QualificationManagementPage() {
  return (
    <div className="h-full pt-1 px-6 pb-4 space-y-2 bg-[#f8fafc]">
      <div className="mb-1">
        <h1 className="text-[18px] font-bold text-gray-800">任职资格管理</h1>
        <p className="text-sm text-gray-500">定义和管理岗位任职资格标准</p>
      </div>

      <Tabs defaultValue="standard" className="w-full mt-8">
        <TabsList className="w-full flex justify-start space-x-6 border-b border-gray-200 bg-transparent p-0">
          <TabsTrigger 
            value="standard" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-[#3C5E5C] data-[state=active]:font-medium data-[state=active]:text-gray-900 text-gray-500 rounded-none bg-transparent hover:text-gray-900 data-[state=active]:shadow-none"
          >
            任职资格标准
          </TabsTrigger>
          <TabsTrigger 
            value="process" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-[#3C5E5C] data-[state=active]:font-medium data-[state=active]:text-gray-900 text-gray-500 rounded-none bg-transparent hover:text-gray-900 data-[state=active]:shadow-none"
          >
            认证流程
          </TabsTrigger>
          <TabsTrigger 
            value="result" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-[#3C5E5C] data-[state=active]:font-medium data-[state=active]:text-gray-900 text-gray-500 rounded-none bg-transparent hover:text-gray-900 data-[state=active]:shadow-none"
          >
            结果应用
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="standard" className="space-y-4 mt-6">
          <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
              <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">任职资格标准管理</CardTitle>
              <Button className="bg-[#3C5E5C] hover:bg-[#2A4A48] text-white text-xs px-3 py-1 h-8 rounded-md">
                <PlusIcon size={14} className="mr-1" />
                添加标准
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="rounded-md border border-gray-200 p-4">
                  <h3 className="text-sm font-medium mb-2 text-gray-800">P5 高级工程师</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">技术类</div>
                    <div className="text-xs text-gray-500">更新于: 2023-06-05</div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">需要5年以上相关经验，具备系统设计能力和团队协作领导力</p>
                  <div className="flex justify-end">
                    <Button size="sm" variant="ghost" className="text-xs h-7 text-[#3C5E5C]">编辑</Button>
                    <Button size="sm" variant="ghost" className="text-xs h-7 text-[#3C5E5C]">查看详情</Button>
                  </div>
                </div>
                
                <div className="rounded-md border border-gray-200 p-4">
                  <h3 className="text-sm font-medium mb-2 text-gray-800">P4 工程师</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">技术类</div>
                    <div className="text-xs text-gray-500">更新于: 2023-05-20</div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">需要3年以上相关经验，能够独立完成开发任务和技术问题排查</p>
                  <div className="flex justify-end">
                    <Button size="sm" variant="ghost" className="text-xs h-7 text-[#3C5E5C]">编辑</Button>
                    <Button size="sm" variant="ghost" className="text-xs h-7 text-[#3C5E5C]">查看详情</Button>
                  </div>
                </div>
              </div>
              
              <Button className="mt-4 border border-dashed border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-xs h-9 w-full rounded-md">
                + 添加新任职资格标准
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="process" className="space-y-4 mt-6">
          <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
              <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">任职资格认证流程</CardTitle>
              <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs px-3 py-1 h-8 rounded-md">
                设置提醒
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <h3 className="text-sm font-medium text-gray-800">当前认证周期: 2023 Q4</h3>
              </div>
              
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
                
                <div className="relative pl-10 pb-8">
                  <div className="absolute left-2 top-2 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">1</div>
                  <div className="rounded-md border border-gray-200 p-4">
                    <h4 className="text-sm font-medium mb-2 text-gray-800">申请阶段</h4>
                    <p className="text-sm text-gray-600 mb-3">员工提交认证申请和相关材料</p>
                    <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full inline-block">已完成</div>
                  </div>
                </div>
                
                <div className="relative pl-10 pb-8">
                  <div className="absolute left-2 top-2 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">2</div>
                  <div className="rounded-md border border-gray-200 p-4">
                    <h4 className="text-sm font-medium mb-2 text-gray-800">评审阶段</h4>
                    <p className="text-sm text-gray-600 mb-3">部门主管进行初审和评估</p>
                    <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full inline-block">进行中</div>
                  </div>
                </div>
                
                <div className="relative pl-10">
                  <div className="absolute left-2 top-2 h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm">3</div>
                  <div className="rounded-md border border-gray-200 p-4">
                    <h4 className="text-sm font-medium mb-2 text-gray-800">决议阶段</h4>
                    <p className="text-sm text-gray-600 mb-3">评审委员会做出最终决定</p>
                    <div className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full inline-block">待开始</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="result" className="space-y-4 mt-6">
          <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
              <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">任职资格结果应用</CardTitle>
              <Button className="bg-[#3C5E5C] hover:bg-[#2A4A48] text-white text-xs px-3 py-1 h-8 rounded-md">
                导出报告
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="rounded-md border border-gray-200 divide-y">
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-medium">李</div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">李十三</h3>
                        <p className="text-xs text-gray-500">研发部 | 高级工程师</p>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">P5 资格认证通过</div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-medium">吴</div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">吴十</h3>
                        <p className="text-xs text-gray-500">研发部 | 工程师</p>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">P4 资格认证中</div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-medium">赵</div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">赵六</h3>
                        <p className="text-xs text-gray-500">产品部 | 产品经理</p>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">P4 资格认证未通过</div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-4" style={{color: '#3C5E5C'}}>人岗匹配分析</h3>
                  <div className="h-[300px] border border-gray-200 rounded-md flex items-center justify-center">
                    <p className="text-sm text-gray-500">人岗匹配雷达图展示区域</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 