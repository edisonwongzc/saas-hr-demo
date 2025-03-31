'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/components/icons";

/**
 * 人才盘点页面组件
 * @return {React.ReactElement} 人才盘点页面
 */
export default function TalentAssessmentPage() {
  return (
    <div className="h-full pt-1 px-6 pb-4 space-y-2 bg-[#f8fafc]">
      <div className="mb-1">
        <h1 className="text-[18px] font-bold text-gray-800">人才盘点</h1>
        <p className="text-sm text-gray-500">进行AT会议和人才评估</p>
      </div>

      <Tabs defaultValue="matrix" className="w-full mt-8">
        <TabsList className="w-full flex justify-start space-x-6 border-b border-gray-200 bg-transparent p-0">
          <TabsTrigger 
            value="matrix" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-[#3C5E5C] data-[state=active]:font-medium data-[state=active]:text-gray-900 text-gray-500 rounded-none bg-transparent hover:text-gray-900 data-[state=active]:shadow-none"
          >
            九宫格
          </TabsTrigger>
          <TabsTrigger 
            value="meeting" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-[#3C5E5C] data-[state=active]:font-medium data-[state=active]:text-gray-900 text-gray-500 rounded-none bg-transparent hover:text-gray-900 data-[state=active]:shadow-none"
          >
            AT会议
          </TabsTrigger>
          <TabsTrigger 
            value="analysis" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-[#3C5E5C] data-[state=active]:font-medium data-[state=active]:text-gray-900 text-gray-500 rounded-none bg-transparent hover:text-gray-900 data-[state=active]:shadow-none"
          >
            多人对比分析
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="matrix" className="space-y-4 mt-6">
          <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
              <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">人才九宫格</CardTitle>
              <div className="flex space-x-2">
                <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs px-3 py-1 h-8 rounded-md">
                  筛选
                </Button>
                <Button className="bg-[#3C5E5C] hover:bg-[#2A4A48] text-white text-xs px-3 py-1 h-8 rounded-md">
                  <PlusIcon size={14} className="mr-1" />
                  添加人才
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-red-50 border border-red-100 rounded-lg p-4 h-48 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-800">待观察人才</h3>
                    <span className="text-xs text-gray-500">3人</span>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded p-2 bg-white">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                          <span className="text-sm">张一</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">详情</Button>
                      </div>
                      <div className="flex items-center justify-between rounded p-2 bg-white">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                          <span className="text-sm">李二</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 h-48 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-800">潜力人才</h3>
                    <span className="text-xs text-gray-500">4人</span>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded p-2 bg-white">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                          <span className="text-sm">王三</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 h-48 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-800">明星人才</h3>
                    <span className="text-xs text-gray-500">2人</span>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded p-2 bg-white">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                          <span className="text-sm">赵四</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-sm font-medium mb-4" style={{color: '#3C5E5C'}}>部门人才分布</h3>
                <div className="h-64 border border-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-gray-500">人才分布图表区域</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="meeting" className="space-y-4 mt-6">
          <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
              <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">AT会议</CardTitle>
              <Button className="bg-[#3C5E5C] hover:bg-[#2A4A48] text-white text-xs px-3 py-1 h-8 rounded-md">
                <PlusIcon size={14} className="mr-1" />
                创建会议
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="rounded-md border border-gray-200 p-4">
                  <div className="flex justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-medium mb-1 text-gray-800">2023年Q4研发部AT会议</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>2023-12-10</span>
                        <span>10:00 - 12:00</span>
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">已完成</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">查看记录</Button>
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">导出报告</Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="text-xs text-gray-500">参会人：</div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs text-blue-700 border border-white">张</div>
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs text-green-700 border border-white">李</div>
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-xs text-purple-700 border border-white">王</div>
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-700 border border-white">+2</div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border border-gray-200 p-4">
                  <div className="flex justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-medium mb-1 text-gray-800">2023年Q4产品部AT会议</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>2023-12-12</span>
                        <span>14:00 - 16:00</span>
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">未开始</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">编辑</Button>
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">取消</Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="text-xs text-gray-500">参会人：</div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-xs text-orange-700 border border-white">赵</div>
                      <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-xs text-yellow-700 border border-white">钱</div>
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-xs text-teal-700 border border-white">孙</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analysis" className="space-y-4 mt-6">
          <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
              <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">多人对比分析</CardTitle>
              <div className="flex space-x-2">
                <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs px-3 py-1 h-8 rounded-md">
                  筛选
                </Button>
                <Button className="bg-[#3C5E5C] hover:bg-[#2A4A48] text-white text-xs px-3 py-1 h-8 rounded-md">
                  导出报告
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6 border border-gray-200 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1 flex flex-wrap gap-2 items-center">
                    <div className="text-xs text-gray-500 mr-1">已选员工：</div>
                    <div className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                      张三
                      <svg className="w-3 h-3 ml-1 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                      李四
                      <svg className="w-3 h-3 ml-1 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                      王五
                      <svg className="w-3 h-3 ml-1 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button className="flex-shrink-0 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs px-3 py-1 h-8 rounded-md">
                      <PlusIcon size={14} className="mr-1" />
                      添加员工
                    </Button>
                    <Button className="flex-shrink-0 bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs px-3 py-1 h-8 rounded-md">
                      进行对比
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium mb-2" style={{color: '#3C5E5C'}}>对比维度</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-1 text-gray-800">绩效评分</h4>
                    <div className="h-48 flex items-center justify-center">
                      <p className="text-sm text-gray-500">绩效对比图表</p>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-1 text-gray-800">能力评估</h4>
                    <div className="h-48 flex items-center justify-center">
                      <p className="text-sm text-gray-500">能力雷达图</p>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-1 text-gray-800">发展潜力</h4>
                    <div className="h-48 flex items-center justify-center">
                      <p className="text-sm text-gray-500">潜力趋势图</p>
                    </div>
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