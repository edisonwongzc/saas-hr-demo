'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusIcon, SearchIcon } from "@/components/icons";

/**
 * 人才识别页面组件
 * @return {React.ReactElement} 人才识别页面
 */
export default function TalentIdentificationPage() {
  return (
    <div className="h-full pt-1 px-6 pb-4 space-y-2 bg-[#f8fafc]">
      <div className="mb-1">
        <h1 className="text-[18px] font-bold text-gray-800">人才识别</h1>
        <p className="text-sm text-gray-500">识别和管理关键人才和后备人才</p>
      </div>

      <Tabs defaultValue="succession" className="w-full mt-8">
        <TabsList className="w-full flex justify-start space-x-6 border-b border-gray-200 bg-transparent p-0">
          <TabsTrigger 
            value="succession" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-[#3C5E5C] data-[state=active]:font-medium data-[state=active]:text-gray-900 text-gray-500 rounded-none bg-transparent hover:text-gray-900 data-[state=active]:shadow-none"
          >
            继任者计划
          </TabsTrigger>
          <TabsTrigger 
            value="nomination" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-[#3C5E5C] data-[state=active]:font-medium data-[state=active]:text-gray-900 text-gray-500 rounded-none bg-transparent hover:text-gray-900 data-[state=active]:shadow-none"
          >
            继任者提名
          </TabsTrigger>
          <TabsTrigger 
            value="pool" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-[#3C5E5C] data-[state=active]:font-medium data-[state=active]:text-gray-900 text-gray-500 rounded-none bg-transparent hover:text-gray-900 data-[state=active]:shadow-none"
          >
            后备人才库
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="succession" className="space-y-4 mt-6">
          <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
              <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">继任者计划管理</CardTitle>
              <div className="flex space-x-2">
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
                  <input 
                    type="text"
                    placeholder="搜索岗位..."
                    className="pl-8 h-8 text-xs rounded-md border border-gray-300 bg-white focus:border-[#3C5E5C] focus:ring-1 focus:ring-[#3C5E5C]"
                  />
                </div>
                <Button className="bg-[#3C5E5C] hover:bg-[#2A4A48] text-white text-xs px-3 py-1 h-8 rounded-md">
                  <PlusIcon size={14} className="mr-1" />
                  添加计划
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="rounded-md border border-gray-200">
                <div className="bg-gray-50 p-4 grid grid-cols-5 gap-2 text-xs font-medium text-gray-700">
                  <div>岗位名称</div>
                  <div>部门</div>
                  <div>在任者</div>
                  <div>继任者数量</div>
                  <div>继任就绪度</div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  <div className="p-4 grid grid-cols-5 gap-2 text-sm hover:bg-gray-50">
                    <div className="text-gray-800">技术总监</div>
                    <div className="text-gray-600">研发部</div>
                    <div className="text-gray-800">张三</div>
                    <div className="text-gray-600">2</div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[80%]"></div>
                      </div>
                      <span className="text-gray-700 text-xs">80%</span>
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-5 gap-2 text-sm hover:bg-gray-50">
                    <div className="text-gray-800">产品总监</div>
                    <div className="text-gray-600">产品部</div>
                    <div className="text-gray-800">李四</div>
                    <div className="text-gray-600">1</div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-yellow-500 h-full w-[50%]"></div>
                      </div>
                      <span className="text-gray-700 text-xs">50%</span>
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-5 gap-2 text-sm hover:bg-gray-50">
                    <div className="text-gray-800">财务总监</div>
                    <div className="text-gray-600">财务部</div>
                    <div className="text-gray-800">王五</div>
                    <div className="text-gray-600">0</div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full w-[10%]"></div>
                      </div>
                      <span className="text-gray-700 text-xs">10%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-sm font-medium mb-4" style={{color: '#3C5E5C'}}>关键岗位继任计划完成率</h3>
                <div className="h-64 border border-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-gray-500">继任计划完成率图表区域</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="nomination" className="space-y-4 mt-6">
          <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
              <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">继任者提名管理</CardTitle>
              <Button className="bg-[#3C5E5C] hover:bg-[#2A4A48] text-white text-xs px-3 py-1 h-8 rounded-md">
                <PlusIcon size={14} className="mr-1" />
                添加提名
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="rounded-md border border-gray-200 p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-sm font-medium mb-1 text-gray-800">技术总监 - 继任者提名</h3>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-gray-500">当前职位持有人: 张三</div>
                        <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">研发部</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">查看详情</Button>
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">编辑</Button>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-xs font-medium mb-2 text-gray-700">提名的继任者</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-gray-50 p-2 rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-medium">赵</div>
                          <div>
                            <div className="text-sm font-medium text-gray-800">赵六</div>
                            <div className="text-xs text-gray-500">研发部 | 技术经理</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">就绪度 85%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center bg-gray-50 p-2 rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-medium">钱</div>
                          <div>
                            <div className="text-sm font-medium text-gray-800">钱七</div>
                            <div className="text-xs text-gray-500">研发部 | 高级工程师</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">就绪度 60%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border border-gray-200 p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-sm font-medium mb-1 text-gray-800">产品总监 - 继任者提名</h3>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-gray-500">当前职位持有人: 李四</div>
                        <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">产品部</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">查看详情</Button>
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">编辑</Button>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-xs font-medium mb-2 text-gray-700">提名的继任者</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-gray-50 p-2 rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-medium">孙</div>
                          <div>
                            <div className="text-sm font-medium text-gray-800">孙八</div>
                            <div className="text-xs text-gray-500">产品部 | 产品经理</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">就绪度 50%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pool" className="space-y-4 mt-6">
          <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
              <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">后备人才库</CardTitle>
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
              <div className="rounded-md border border-gray-200">
                <div className="bg-gray-50 p-4 grid grid-cols-6 gap-2 text-xs font-medium text-gray-700">
                  <div>姓名</div>
                  <div>当前职位</div>
                  <div>部门</div>
                  <div>后备方向</div>
                  <div>就绪程度</div>
                  <div>操作</div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  <div className="p-4 grid grid-cols-6 gap-2 text-sm hover:bg-gray-50">
                    <div className="text-gray-800 flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-medium">赵</div>
                      <span>赵六</span>
                    </div>
                    <div className="text-gray-600">技术经理</div>
                    <div className="text-gray-600">研发部</div>
                    <div className="text-gray-800">技术总监</div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[85%]"></div>
                      </div>
                      <span className="text-gray-700 text-xs">85%</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">查看</Button>
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">评估</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 grid grid-cols-6 gap-2 text-sm hover:bg-gray-50">
                    <div className="text-gray-800 flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-medium">钱</div>
                      <span>钱七</span>
                    </div>
                    <div className="text-gray-600">高级工程师</div>
                    <div className="text-gray-600">研发部</div>
                    <div className="text-gray-800">技术总监</div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-[60%]"></div>
                      </div>
                      <span className="text-gray-700 text-xs">60%</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">查看</Button>
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">评估</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 grid grid-cols-6 gap-2 text-sm hover:bg-gray-50">
                    <div className="text-gray-800 flex items-center gap-2">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-medium">孙</div>
                      <span>孙八</span>
                    </div>
                    <div className="text-gray-600">产品经理</div>
                    <div className="text-gray-600">产品部</div>
                    <div className="text-gray-800">产品总监</div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-[50%]"></div>
                      </div>
                      <span className="text-gray-700 text-xs">50%</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">查看</Button>
                      <Button variant="ghost" size="sm" className="text-xs h-7 text-[#3C5E5C]">评估</Button>
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