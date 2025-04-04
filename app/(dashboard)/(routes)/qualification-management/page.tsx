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
    <div className="h-full pt-1 px-6 pb-4 space-y-2 bg-[#f4f7fa]">
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
              <div className="space-y-0 divide-y divide-gray-200">
                <div className="py-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-800">P5 高级工程师</h3>
                      <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-sm rounded-md">技术类</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 mb-1.5">需要5年以上相关经验，具备系统设计能力和团队协作领导力</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">更新于: 2023-06-05</div>
                      <div>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">编辑</Button>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">查看详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-800">P4 工程师</h3>
                      <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-sm rounded-md">技术类</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 mb-1.5">需要3年以上相关经验，能够独立完成开发任务和技术问题排查</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">更新于: 2023-05-20</div>
                      <div>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">编辑</Button>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">查看详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-800">P6 技术专家</h3>
                      <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-sm rounded-md">技术类</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 mb-1.5">需要8年以上相关经验，精通多项技术栈，能够主导大型技术方案设计</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">更新于: 2023-07-15</div>
                      <div>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">编辑</Button>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">查看详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-800">P3 初级工程师</h3>
                      <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-sm rounded-md">技术类</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 mb-1.5">需要1-2年相关经验，能够在指导下完成开发任务和Bug修复</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">更新于: 2023-04-10</div>
                      <div>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">编辑</Button>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">查看详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-800">P5 产品经理</h3>
                      <div className="px-2 py-0.5 bg-green-100 text-green-700 text-sm rounded-md">产品类</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 mb-1.5">需要5年以上产品经验，熟悉用户调研、需求分析和产品生命周期管理</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">更新于: 2023-08-01</div>
                      <div>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">编辑</Button>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">查看详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-800">P4 UI设计师</h3>
                      <div className="px-2 py-0.5 bg-purple-100 text-purple-700 text-sm rounded-md">设计类</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 mb-1.5">需要3年以上设计经验，精通Figma等设计工具，有良好的用户体验设计能力</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">更新于: 2023-06-18</div>
                      <div>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">编辑</Button>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">查看详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-800">P6 架构师</h3>
                      <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-sm rounded-md">技术类</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 mb-1.5">需要10年以上开发和架构设计经验，具备跨业务领域的技术整合能力</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">更新于: 2023-09-12</div>
                      <div>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">编辑</Button>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">查看详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-800">P4 数据分析师</h3>
                      <div className="px-2 py-0.5 bg-orange-100 text-orange-700 text-sm rounded-md">数据类</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 mb-1.5">需要3年以上数据分析经验，熟悉SQL、Python等工具，具备数据可视化能力</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">更新于: 2023-05-05</div>
                      <div>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">编辑</Button>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">查看详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-800">P5 项目经理</h3>
                      <div className="px-2 py-0.5 bg-amber-100 text-amber-700 text-sm rounded-md">管理类</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 mb-1.5">需要5年以上项目管理经验，熟悉敏捷开发，具备良好的团队协调和风险管理能力</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">更新于: 2023-07-25</div>
                      <div>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">编辑</Button>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">查看详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-800">P3 测试工程师</h3>
                      <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-sm rounded-md">技术类</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 mb-1.5">需要2年以上测试经验，熟悉自动化测试框架，具备缺陷分析和测试用例设计能力</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">更新于: 2023-03-30</div>
                      <div>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">编辑</Button>
                        <Button size="sm" variant="ghost" className="text-sm h-6 text-[#3C5E5C]">查看详情</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="process" className="space-y-4 mt-6">
          <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
              <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">任职资格认证流程</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 mr-3">当前认证周期：2023 Q4</span>
                </div>
                <div className="text-sm font-medium text-gray-500">共有8名员工参与认证</div>
              </div>
              
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="min-w-[1400px] divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                        头像
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        申请人工号
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        申请人姓名
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        近三年挑战级别
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        近三年绩效结果
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        近三年远景精神
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        当前技术职级认证时间
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        当前技术职级
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden shadow-md mx-auto">
                          <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=300&auto=format&fit=crop&q=60" alt="员工头像" className="h-10 w-10 object-cover" />
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">EMP001</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">李十三</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">高级</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">A/A+/A</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">4.5/4.8/4.6</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">2022-12-15</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">P5</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-left">
                        <span className="text-sm text-[#3C5E5C] cursor-pointer hover:underline">查看个人详情</span>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden shadow-md mx-auto">
                          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=60" alt="员工头像" className="h-10 w-10 object-cover" />
                  </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">EMP031</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">赵六</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">中级</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">B+/A/B+</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">4.0/4.2/4.1</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">2022-06-20</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">P4</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-left">
                        <span className="text-sm text-[#3C5E5C] cursor-pointer hover:underline">查看个人详情</span>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden shadow-md mx-auto">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60" alt="员工头像" className="h-10 w-10 object-cover" />
                </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">EMP015</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">吴十</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">初级</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">B/B+/B</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">3.8/4.0/3.9</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">2022-03-10</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">P3</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-left">
                        <span className="text-sm text-[#3C5E5C] cursor-pointer hover:underline">查看个人详情</span>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden shadow-md mx-auto">
                          <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&auto=format&fit=crop&q=60" alt="员工头像" className="h-10 w-10 object-cover" />
                  </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">EMP051</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">张伟</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">高级</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">A/A/A+</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">4.6/4.7/4.8</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">2022-09-05</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">P5</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-left">
                        <span className="text-sm text-[#3C5E5C] cursor-pointer hover:underline">查看个人详情</span>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden shadow-md mx-auto">
                          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60" alt="员工头像" className="h-10 w-10 object-cover" />
                  </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">EMP038</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">李娜</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">中级</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">A-/A/A-</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">4.2/4.3/4.1</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">2022-11-20</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">P4</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-left">
                        <span className="text-sm text-[#3C5E5C] cursor-pointer hover:underline">查看个人详情</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                          头像
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                          员工姓名
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                          员工ID
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                          所在部门
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                          当前岗位
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                          认证状态
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                          操作
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden shadow-md mx-auto">
                            <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=300&auto=format&fit=crop&q=60" alt="员工头像" className="h-10 w-10 object-cover" />
                      </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">李十三</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">EMP001</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">研发部</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">高级工程师</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full inline-block">P5 资格认证通过</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-left">
                          <span className="text-sm text-[#3C5E5C] cursor-pointer hover:underline">查看个人详情</span>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden shadow-md mx-auto">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60" alt="员工头像" className="h-10 w-10 object-cover" />
                    </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">吴十</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">EMP015</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">研发部</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">工程师</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="px-2 py-1 bg-amber-100 text-amber-700 text-sm rounded-full inline-block">P4 资格认证中</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-left">
                          <span className="text-sm text-[#3C5E5C] cursor-pointer hover:underline">查看个人详情</span>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden shadow-md mx-auto">
                            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=60" alt="员工头像" className="h-10 w-10 object-cover" />
                  </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">赵六</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">EMP031</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">产品部</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">产品经理</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="px-2 py-1 bg-red-100 text-red-700 text-sm rounded-full inline-block">P4 资格认证未通过</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-left">
                          <span className="text-sm text-[#3C5E5C] cursor-pointer hover:underline">查看个人详情</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-medium" style={{color: '#3C5E5C'}}>人岗匹配分析</h3>
                    <Button variant="outline" className="text-sm h-8 text-gray-600 border-gray-300 bg-transparent">
                      筛选
                    </Button>
                  </div>
                  <div className="h-[420px] p-4 relative">
                    <div className="absolute right-6 top-6 flex flex-col gap-2 z-10">
                      <button className="w-8 h-8 rounded-md bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-md bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                      </button>
                    </div>
                    <div className="h-full flex items-center justify-center">
                      <svg width="100%" height="100%" viewBox="0 0 700 400">
                        <defs>
                          <pattern id="avatar1" patternUnits="userSpaceOnUse" width="40" height="40">
                            <image href="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=300&auto=format&fit=crop&q=60" width="40" height="40" />
                          </pattern>
                          <pattern id="avatar2" patternUnits="userSpaceOnUse" width="60" height="60">
                            <image href="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=60" width="60" height="60" />
                          </pattern>
                          <pattern id="avatar3" patternUnits="userSpaceOnUse" width="80" height="80">
                            <image href="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60" width="80" height="80" />
                          </pattern>
                        </defs>

                        {/* 背景和边框 */}
                        <rect x="60" y="20" width="600" height="340" fill="white" stroke="#E5E7EB" strokeWidth="1" />

                        {/* X轴 */}
                        <line x1="60" y1="360" x2="660" y2="360" stroke="#94A3B8" strokeWidth="1" />
                        <text x="680" y="360" fontSize="12" fill="#64748B">挑战者级别</text>
                        
                        {/* X轴刻度 */}
                        <g className="text-xs fill-gray-500">
                          <text x="100" y="380" textAnchor="middle">13</text>
                          <text x="180" y="380" textAnchor="middle">14</text>
                          <text x="260" y="380" textAnchor="middle">15</text>
                          <text x="340" y="380" textAnchor="middle">16</text>
                          <text x="420" y="380" textAnchor="middle">17</text>
                          <text x="500" y="380" textAnchor="middle">18</text>
                          <text x="580" y="380" textAnchor="middle">19+</text>
                        </g>

                        {/* Y轴 */}
                        <line x1="60" y1="20" x2="60" y2="360" stroke="#94A3B8" strokeWidth="1" />
                        <text x="30" y="10" fontSize="12" fill="#64748B">专业任职级别</text>

                        {/* Y轴刻度 */}
                        <g className="text-xs fill-gray-500">
                          <text x="40" y="340" textAnchor="end">T3</text>
                          <text x="40" y="280" textAnchor="end">T4</text>
                          <text x="40" y="220" textAnchor="end">T5</text>
                          <text x="40" y="160" textAnchor="end">T6</text>
                          <text x="40" y="100" textAnchor="end">T7</text>
                        </g>

                        {/* 网格线 */}
                        <g stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4">
                          <line x1="60" y1="340" x2="660" y2="340" />
                          <line x1="60" y1="280" x2="660" y2="280" />
                          <line x1="60" y1="220" x2="660" y2="220" />
                          <line x1="60" y1="160" x2="660" y2="160" />
                          <line x1="60" y1="100" x2="660" y2="100" />
                          
                          <line x1="100" y1="20" x2="100" y2="360" />
                          <line x1="180" y1="20" x2="180" y2="360" />
                          <line x1="260" y1="20" x2="260" y2="360" />
                          <line x1="340" y1="20" x2="340" y2="360" />
                          <line x1="420" y1="20" x2="420" y2="360" />
                          <line x1="500" y1="20" x2="500" y2="360" />
                          <line x1="580" y1="20" x2="580" y2="360" />
                        </g>

                        {/* 气泡 */}
                        <g>
                          {/* T5级别气泡组 */}
                          <circle cx="340" cy="220" r="35" fill="#ec693d" stroke="#ffffff" strokeWidth="2" />
                          <text x="340" y="220" dy="0.3em" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="12">12人</text>
                          
                          <circle cx="420" cy="220" r="28" fill="#6930ee" stroke="#ffffff" strokeWidth="2" />
                          <text x="420" y="220" dy="0.3em" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="12">8人</text>
                          
                          {/* T4级别气泡组 */}
                          <circle cx="180" cy="280" r="32" fill="#dcd152" stroke="#ffffff" strokeWidth="2" />
                          <text x="180" y="280" dy="0.3em" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="12">10人</text>
                          
                          <circle cx="260" cy="280" r="25" fill="#5ab049" stroke="#ffffff" strokeWidth="2" />
                          <text x="260" y="280" dy="0.3em" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="12">6人</text>
                          
                          {/* T6级别气泡组 */}
                          <circle cx="500" cy="160" r="30" fill="#c868b5" stroke="#ffffff" strokeWidth="2" />
                          <text x="500" y="160" dy="0.3em" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="12">9人</text>
                          
                          {/* T3级别气泡组 */}
                          <circle cx="340" cy="340" r="22" fill="#f1ab64" stroke="#ffffff" strokeWidth="2" />
                          <text x="340" y="340" dy="0.3em" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="12">5人</text>
                          
                          {/* T7级别气泡组 */}
                          <circle cx="580" cy="100" r="20" fill="#ec693d" stroke="#ffffff" strokeWidth="2" />
                          <text x="580" y="100" dy="0.3em" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="12">4人</text>
                        </g>
                      </svg>
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