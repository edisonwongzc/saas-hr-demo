'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon, EditIcon } from "@/components/icons";
import { useState } from "react";

/**
 * 人才标准页面组件
 * @return {React.ReactElement} 人才标准页面
 */
export default function TalentStandardsPage() {
  const [showPositions, setShowPositions] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("高级开发工程师");
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  
  const positions = [
    "高级开发工程师",
    "技术专家",
    "架构师",
    "产品经理",
    "UI设计师",
    "技术总监"
  ];
  
  const togglePositions = () => {
    setShowPositions(!showPositions);
  };
  
  const selectPosition = (position: string) => {
    setSelectedPosition(position);
    setShowPositions(false);
  };
  
  const toggleEmployeeSelection = (employeeName: string) => {
    if (selectedEmployees.includes(employeeName)) {
      setSelectedEmployees(selectedEmployees.filter(name => name !== employeeName));
    } else {
      setSelectedEmployees([...selectedEmployees, employeeName]);
    }
  };
  
  const openComparisonModal = () => {
    if (selectedEmployees.length > 0) {
      setShowComparisonModal(true);
    }
  };
  
  const closeComparisonModal = () => {
    setShowComparisonModal(false);
  };
  
  return (
    <div className="h-full pt-1 px-6 pb-4 space-y-2 bg-[#F3F7FA]">
      <div className="mb-1">
        <h1 className="text-[18px] font-bold text-gray-800">人才标准</h1>
        <p className="text-sm text-gray-500">管理能力库、岗位模型和人才履历</p>
      </div>

      <Tabs defaultValue="ability" className="w-full mt-8">
        <TabsList className="w-full flex justify-start space-x-6 border-b border-gray-200 bg-transparent p-0">
          <TabsTrigger 
            value="ability" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-[#3C5E5C] data-[state=active]:font-medium data-[state=active]:text-gray-900 text-gray-500 rounded-none bg-transparent hover:text-gray-900 data-[state=active]:shadow-none"
          >
            能力库&能力模型
          </TabsTrigger>
          <TabsTrigger 
            value="profile" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-[#3C5E5C] data-[state=active]:font-medium data-[state=active]:text-gray-900 text-gray-500 rounded-none bg-transparent hover:text-gray-900 data-[state=active]:shadow-none"
          >
            人才履历
          </TabsTrigger>
          <TabsTrigger 
            value="matching" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-[#3C5E5C] data-[state=active]:font-medium data-[state=active]:text-gray-900 text-gray-500 rounded-none bg-transparent hover:text-gray-900 data-[state=active]:shadow-none"
          >
            人岗匹配
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="ability" className="space-y-6 mt-6">
          {/* 能力库管理模块 */}
          <div className="space-y-4">
            <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
                <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">能力库管理</CardTitle>
                <div className="flex space-x-2">
                  <Button className="bg-[#426966] hover:bg-[#2A4A48] text-white text-xs px-3 py-1 h-8 rounded-md">
                    <PlusIcon size={14} className="mr-1" />
                    创建
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg border border-gray-200 p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-sm text-gray-800 mb-2">领导力能力库</h3>
                        <p className="text-sm text-gray-600 mb-3">包含决策力、影响力、战略思维等核心领导力要素</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <EditIcon size={14} />
                      </button>
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-gray-500">
                      <span>共15项能力</span>
                      <span>2025/03/31 02:54</span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-sm text-gray-800 mb-2">专业能力库</h3>
                        <p className="text-sm text-gray-600 mb-3">包含各专业领域的技能和知识体系</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <EditIcon size={14} />
                      </button>
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-gray-500">
                      <span>共32项能力</span>
                      <span>2025/03/30 15:42</span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-sm text-gray-800 mb-2">通用能力库</h3>
                        <p className="text-sm text-gray-600 mb-3">包含沟通、协作、创新等通用能力要素</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <EditIcon size={14} />
                      </button>
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-gray-500">
                      <span>共8项能力</span>
                      <span>2025/03/29 10:28</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 岗位模型管理模块 */}
          <div className="space-y-4">
            <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
                <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">岗位模型管理</CardTitle>
                <div className="flex space-x-2">
                  <Button className="bg-[#426966] hover:bg-[#2A4A48] text-white text-xs px-3 py-1 h-8 rounded-md">
                    <PlusIcon size={14} className="mr-1" />
                    创建
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg border border-gray-200 p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-sm text-gray-800 mb-2">技术岗位模型</h3>
                        <p className="text-sm text-gray-600 mb-3">包含技术岗位的专业能力和晋升标准</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <EditIcon size={14} />
                      </button>
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-gray-500">
                      <span>共12个岗位</span>
                      <span>2025/03/28 14:30</span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-sm text-gray-800 mb-2">管理岗位模型</h3>
                        <p className="text-sm text-gray-600 mb-3">包含管理岗位的领导力要求和决策能力要求</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <EditIcon size={14} />
                      </button>
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-gray-500">
                      <span>共8个岗位</span>
                      <span>2025/03/27 09:15</span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-sm text-gray-800 mb-2">业务岗位模型</h3>
                        <p className="text-sm text-gray-600 mb-3">包含业务岗位的专业技能和市场洞察能力</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <EditIcon size={14} />
                      </button>
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-gray-500">
                      <span>共10个岗位</span>
                      <span>2025/03/26 16:45</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 岗位图谱模块 */}
          <div className="space-y-4">
            <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
                <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">岗位图谱</CardTitle>
                <div className="flex space-x-2">
                  <Button className="bg-[#426966] hover:bg-[#2A4A48] text-white text-xs px-3 py-1 h-8 rounded-md">
                    <PlusIcon size={14} className="mr-1" />
                    创建
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[300px] bg-gray-50 rounded-lg flex items-center justify-start p-4 border border-gray-200">
                  <p className="text-gray-400">岗位图谱展示区域</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4 mt-6">
          {/* 人才履历模块 */}
          <div className="space-y-4">
            <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
                <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">人才履历</CardTitle>
                <div className="flex space-x-2">
                  <Button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs py-1 h-8 rounded-md px-3">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    点评
                  </Button>
                  <Button className="bg-[#3C5E5C] hover:bg-[#2A4A48] text-white text-xs py-1 h-8 rounded-md px-3">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    编辑信息
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="rounded-lg p-6 mb-4 bg-white">
                  <div className="flex items-start">
                    <div className="mr-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-[#f0f5f5] border-2 border-white shadow-sm relative">
                        <img src="/avatar.png" alt="员工头像" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-semibold text-gray-800">张三</h3>
                            <span className="px-3 py-1 bg-[#E5EEEE] text-[#3C5E5C] text-xs font-medium rounded-full flex items-center">
                              <span className="mr-1 w-2 h-2 rounded-full bg-[#3C5E5C]"></span>
                              在线
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm mt-1">高级开发工程师</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-8 mt-5">
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wider">最后登录时间</p>
                          <p className="text-sm text-gray-800 mt-1">几秒前</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wider">最后活动时间</p>
                          <p className="text-sm text-gray-800 mt-1">2天前</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wider">员工ID</p>
                          <p className="text-sm text-gray-800 mt-1">#EMP07</p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <p className="text-gray-500 text-xs mb-2">职业发展阶段</p>
                        <div className="flex items-center">
                          <div className="flex-1 relative">
                            <div className="h-2 bg-gray-200 rounded-full">
                              <div className="absolute top-0 left-0 h-2 bg-[#3C5E5C] rounded-full w-2/5"></div>
                            </div>
                            <div className="flex justify-between mt-2 text-xs">
                              <div className="text-gray-500">入职</div>
                              <div className="text-[#3C5E5C] font-medium -ml-3">胜任</div>
                              <div className="text-gray-500">精通</div>
                              <div className="text-gray-500">专家</div>
                              <div className="text-gray-500">领导者</div>
                            </div>
                          </div>
                          <div className="ml-4 px-3 py-1 rounded-md bg-[#3C5E5C] text-white text-xs">
                            40%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8 mb-6">
                    <Button variant="ghost" className="flex-1 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50 font-medium">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                      </svg>
                      个人信息
                    </Button>
                    <Button variant="ghost" className="flex-1 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50 font-medium">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      能力评估
                    </Button>
                    <Button variant="ghost" className="flex-1 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50 font-medium">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      工作履历
                    </Button>
                    <Button variant="ghost" className="flex-1 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50 font-medium">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 20v-6M6 20V10M18 20V4"></path>
                      </svg>
                      绩效信息
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg p-6 mb-4 bg-white border-t border-gray-200 mt-2">
                  <h3 className="font-semibold text-base text-gray-800 mb-4">个人履历详情</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">教育背景</p>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-800">计算机科学与技术 - 硕士</p>
                            <p className="text-sm text-gray-500">清华大学 (2014 - 2017)</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">软件工程 - 学士</p>
                            <p className="text-sm text-gray-500">北京大学 (2010 - 2014)</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">专业证书</p>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-800">高级系统架构师认证</p>
                            <p className="text-sm text-gray-500">2022年获得</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">项目管理专业认证(PMP)</p>
                            <p className="text-sm text-gray-500">2020年获得</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">员工潜力</p>
                        <div className="flex items-center mt-1">
                          <div className="w-32 mr-3">
                            <div className="bg-gray-200 h-2 rounded-full relative">
                              <div className="absolute top-0 left-0 h-2 bg-[#3C5E5C] rounded-full w-[85%]"></div>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-[#3C5E5C]">高潜力人才</span>
                          <span className="ml-2 px-2 py-0.5 bg-[#E5EEEE] text-[#3C5E5C] text-xs rounded">85%</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">推荐晋升路径：技术专家 → 架构师 → 技术总监</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">工作经历</p>
                        <div className="space-y-3">
                          <div className="border-l-2 border-[#3C5E5C] pl-3 py-1">
                            <p className="text-sm font-medium text-gray-800">高级开发工程师</p>
                            <p className="text-sm text-gray-500">本公司 (2020 - 至今)</p>
                          </div>
                          <div className="border-l-2 border-gray-300 pl-3 py-1">
                            <p className="text-sm font-medium text-gray-800">开发工程师</p>
                            <p className="text-sm text-gray-500">某科技公司 (2017 - 2020)</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">职位详情</p>
                        <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <p className="text-xs text-gray-500">职级</p>
                              <p className="text-sm font-medium text-gray-800">P6</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">直接上级</p>
                              <p className="text-sm font-medium text-gray-800">李四（技术总监）</p>
                            </div>
                            <div className="col-span-2">
                              <p className="text-xs text-gray-500">汇报关系</p>
                              <p className="text-sm font-medium text-gray-800">研发部 → 产品技术中心</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">专业技能</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">React</span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Node.js</span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">微服务架构</span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">云原生</span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">系统设计</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg p-6 mb-4 bg-white border-t border-gray-200 mt-2">
                  <h3 className="font-semibold text-base text-gray-800 mb-4">职责与培训</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">主要职责</p>
                      <ul className="list-disc pl-4 text-sm space-y-2 text-gray-700">
                        <li>负责核心模块的架构设计与实现</li>
                        <li>指导初级开发人员技术成长</li>
                        <li>参与技术评审与技术选型</li>
                        <li>负责系统性能优化与稳定性保障</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">培训记录</p>
                      <div className="space-y-3">
                        <div className="flex items-center border-l-2 border-green-500 pl-3">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800">高级管理培训</p>
                            <p className="text-xs text-gray-500">2023年12月</p>
                          </div>
                          <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            90分（优秀）
                          </div>
                        </div>
                        <div className="flex items-center border-l-2 border-green-500 pl-3">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800">微服务架构实践</p>
                            <p className="text-xs text-gray-500">2022年6月</p>
                          </div>
                          <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            95分（优秀）
                          </div>
                        </div>
                        <div className="flex items-center border-l-2 border-blue-500 pl-3">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800">团队领导力</p>
                            <p className="text-xs text-gray-500">2021年3月</p>
                          </div>
                          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                            88分（良好）
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg p-6 mb-4 bg-white border-t border-gray-200 mt-2">
                  <h3 className="font-semibold text-base text-gray-800 mb-4">绩效详情</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-20 text-sm font-medium text-gray-700">2023年</div>
                      <div className="flex-1 mr-4 relative">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="absolute top-0 left-0 h-2 bg-green-500 rounded-full w-[95%]"></div>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold min-w-[36px] text-center">
                        A+
                      </div>
                      <div className="text-xs text-gray-500 ml-2">95%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-sm font-medium text-gray-700">2022年</div>
                      <div className="flex-1 mr-4 relative">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="absolute top-0 left-0 h-2 bg-green-500 rounded-full w-[85%]"></div>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold min-w-[36px] text-center">
                        A
                      </div>
                      <div className="text-xs text-gray-500 ml-2">85%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-sm font-medium text-gray-700">2021年</div>
                      <div className="flex-1 mr-4 relative">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full w-[75%]"></div>
                        </div>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold min-w-[36px] text-center">
                        B+
                      </div>
                      <div className="text-xs text-gray-500 ml-2">75%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-sm font-medium text-gray-700">2020年</div>
                      <div className="flex-1 mr-4 relative">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full w-[70%]"></div>
                        </div>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold min-w-[36px] text-center">
                        B
                      </div>
                      <div className="text-xs text-gray-500 ml-2">70%</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg p-6 mb-4 bg-white border-t border-gray-200 mt-2">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-base text-gray-800">能力评估与岗位匹配</h3>
                    <div className="flex space-x-2">
                      <div className="border border-gray-300 rounded-md px-3 py-1 h-8 flex items-center text-gray-800 text-xs">
                        <span>张三</span>
                      </div>
                      <div className="relative">
                        <div
                          className="border border-gray-300 rounded-md px-3 py-1 h-8 flex items-center justify-between text-gray-800 text-xs min-w-[120px] cursor-pointer"
                          onClick={togglePositions}
                        >
                          <span>{selectedPosition}</span>
                          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </div>
                        {showPositions && (
                          <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                            <ul className="py-1 max-h-[200px] overflow-y-auto">
                              {positions.map((position) => (
                                <li
                                  key={position}
                                  className="px-3 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                                  onClick={() => selectPosition(position)}
                                >
                                  {position}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs px-3 py-1 h-8 rounded-md">
                        进行对比
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-5">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-3">综合得分</h4>
                        <div className="flex flex-col">
                          <div className="flex items-center mb-2">
                            <div className="text-3xl font-semibold text-gray-800 mr-3">4.2</div>
                            <div className="flex text-yellow-400">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" opacity="0.3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            </div>
                            <div className="ml-2 px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-xs">
                              优秀
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mb-4">员工与岗位匹配度达到84%，表现优秀</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-semibold text-sm text-gray-800">岗位适配度</h4>
                          <div className="text-xs text-gray-500 flex items-center">
                            <div className="flex items-center mr-3">
                              <div className="w-3 h-3 bg-[#4f46e5] mr-1 rounded-sm"></div>
                              <span>张三</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-[#06b6d4] mr-1 rounded-sm"></div>
                              <span>岗位要求</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-gray-700">沟通能力</span>
                              <div className="flex items-center">
                                <span className="text-sm font-semibold">4.0</span>
                                <span className="text-xs text-gray-500 ml-1">/5.0</span>
                                <button className="ml-2 text-gray-400 hover:text-gray-700">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full relative">
                              <div className="absolute top-0 left-0 h-2 bg-[#4f46e5] rounded-full w-[80%]"></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-gray-700">技术知识</span>
                              <div className="flex items-center">
                                <span className="text-sm font-semibold">5.0</span>
                                <span className="text-xs text-gray-500 ml-1">/5.0</span>
                                <button className="ml-2 text-gray-400 hover:text-gray-700">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full relative">
                              <div className="absolute top-0 left-0 h-2 bg-[#4f46e5] rounded-full w-[100%]"></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-gray-700">团队协作</span>
                              <div className="flex items-center">
                                <span className="text-sm font-semibold">3.0</span>
                                <span className="text-xs text-gray-500 ml-1">/5.0</span>
                                <button className="ml-2 text-gray-400 hover:text-gray-700">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full relative">
                              <div className="absolute top-0 left-0 h-2 bg-[#4f46e5] rounded-full w-[60%]"></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-gray-700">按期交付</span>
                              <div className="flex items-center">
                                <span className="text-sm font-semibold">5.0</span>
                                <span className="text-xs text-gray-500 ml-1">/5.0</span>
                                <button className="ml-2 text-gray-400 hover:text-gray-700">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full relative">
                              <div className="absolute top-0 left-0 h-2 bg-[#4f46e5] rounded-full w-[100%]"></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-gray-700">解决问题</span>
                              <div className="flex items-center">
                                <span className="text-sm font-semibold">4.0</span>
                                <span className="text-xs text-gray-500 ml-1">/5.0</span>
                                <button className="ml-2 text-gray-400 hover:text-gray-700">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full relative">
                              <div className="absolute top-0 left-0 h-2 bg-[#4f46e5] rounded-full w-[80%]"></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-gray-700">远景精神</span>
                              <div className="flex items-center">
                                <span className="text-sm font-semibold">5.0</span>
                                <span className="text-xs text-gray-500 ml-1">/5.0</span>
                                <button className="ml-2 text-gray-400 hover:text-gray-700">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full relative">
                              <div className="absolute top-0 left-0 h-2 bg-[#4f46e5] rounded-full w-[100%]"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <p className="text-xs text-gray-500">
                            <span className="font-semibold text-gray-700">分析结果：</span>
                            员工在技术知识、按期交付和远景精神方面表现突出，团队协作需要进一步提升。
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center items-center">
                      <div className="w-full max-w-[380px] aspect-square relative">
                        <div className="absolute inset-0">
                          <svg viewBox="0 0 500 500" className="w-full h-full">
                            <g transform="translate(250, 250)">
                              {/* 背景网格 - 刻度线 */}
                              <polygon points="0,-120 104,-60 104,60 0,120 -104,60 -104,-60" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                              <polygon points="0,-96 83.1,-48 83.1,48 0,96 -83.1,48 -83.1,-48" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                              <polygon points="0,-72 62.4,-36 62.4,36 0,72 -62.4,36 -62.4,-36" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                              <polygon points="0,-48 41.6,-24 41.6,24 0,48 -41.6,24 -41.6,-24" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                              <polygon points="0,-24 20.8,-12 20.8,12 0,24 -20.8,12 -20.8,-12" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                              
                              {/* 坐标轴 */}
                              <line x1="0" y1="0" x2="0" y2="-120" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="0" y1="0" x2="104" y2="-60" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="0" y1="0" x2="104" y2="60" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="0" y1="0" x2="0" y2="120" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="0" y1="0" x2="-104" y2="60" stroke="#d1d5db" strokeWidth="1" />
                              <line x1="0" y1="0" x2="-104" y2="-60" stroke="#d1d5db" strokeWidth="1" />
                              
                              {/* 岗位要求多边形 */}
                              <path 
                                d="M0,-96 L83.1,-48 L83.1,48 L0,96 L-83.1,48 L-83.1,-48 Z" 
                                fill="#e9c46a" 
                                fillOpacity="0.1" 
                                stroke="#e9c46a" 
                                strokeWidth="2" 
                              />
                              
                              {/* 员工能力多边形 */}
                              <path 
                                d="M0,-96 L83.1,-48 L62.4,36 L0,96 L-83.1,48 L-83.1,-48 Z" 
                                fill="#a8dadc" 
                                fillOpacity="0.2" 
                                stroke="#a8dadc" 
                                strokeWidth="2" 
                              />
                              
                              {/* 标签和数值 */}
                              <g>
                                {/* 沟通能力 */}
                                <text x="0" y="-160" textAnchor="middle" fontSize="14" fill="#4b5563" fontWeight="500">沟通能力</text>
                                <text x="0" y="-140" textAnchor="middle" fontSize="16" fontWeight="bold">
                                  <tspan fill="#4f46e5">4.0</tspan>
                                  <tspan fill="#06b6d4" opacity="0.6">/5.0</tspan>
                                </text>
                                
                                {/* 技术知识 */}
                                <text x="150" y="-60" textAnchor="start" fontSize="14" fill="#4b5563" fontWeight="500">技术知识</text>
                                <text x="150" y="-40" textAnchor="start" fontSize="16" fontWeight="bold">
                                  <tspan fill="#4f46e5">5.0</tspan>
                                  <tspan fill="#06b6d4" opacity="0.6">/5.0</tspan>
                                </text>
                                
                                {/* 团队协作 */}
                                <text x="150" y="70" textAnchor="start" fontSize="14" fill="#4b5563" fontWeight="500">团队协作</text>
                                <text x="150" y="90" textAnchor="start" fontSize="16" fontWeight="bold">
                                  <tspan fill="#4f46e5">3.0</tspan>
                                  <tspan fill="#06b6d4" opacity="0.6">/5.0</tspan>
                                </text>
                                
                                {/* 按期交付 */}
                                <text x="0" y="160" textAnchor="middle" fontSize="14" fill="#4b5563" fontWeight="500">按期交付</text>
                                <text x="0" y="180" textAnchor="middle" fontSize="16" fontWeight="bold">
                                  <tspan fill="#4f46e5">5.0</tspan>
                                  <tspan fill="#06b6d4" opacity="0.6">/5.0</tspan>
                                </text>
                                
                                {/* 解决问题 */}
                                <text x="-150" y="70" textAnchor="end" fontSize="14" fill="#4b5563" fontWeight="500">解决问题</text>
                                <text x="-150" y="90" textAnchor="end" fontSize="16" fontWeight="bold">
                                  <tspan fill="#4f46e5">4.0</tspan>
                                  <tspan fill="#06b6d4" opacity="0.6">/5.0</tspan>
                                </text>
                                
                                {/* 远景精神 */}
                                <text x="-150" y="-60" textAnchor="end" fontSize="14" fill="#4b5563" fontWeight="500">远景精神</text>
                                <text x="-150" y="-40" textAnchor="end" fontSize="16" fontWeight="bold">
                                  <tspan fill="#4f46e5">5.0</tspan>
                                  <tspan fill="#06b6d4" opacity="0.6">/5.0</tspan>
                                </text>
                              </g>
                              
                              {/* 员工能力点 */}
                              <circle cx="0" cy="-96" r="5" fill="#4f46e5" stroke="#fff" strokeWidth="1.5" />
                              <circle cx="83.1" cy="-48" r="5" fill="#4f46e5" stroke="#fff" strokeWidth="1.5" />
                              <circle cx="62.4" cy="36" r="5" fill="#4f46e5" stroke="#fff" strokeWidth="1.5" />
                              <circle cx="0" cy="96" r="5" fill="#4f46e5" stroke="#fff" strokeWidth="1.5" />
                              <circle cx="-83.1" cy="48" r="5" fill="#4f46e5" stroke="#fff" strokeWidth="1.5" />
                              <circle cx="-83.1" cy="-48" r="5" fill="#4f46e5" stroke="#fff" strokeWidth="1.5" />
                              
                              {/* 岗位要求点 */}
                              <circle cx="0" cy="-96" r="5" fill="#06b6d4" stroke="#fff" strokeWidth="1.5" />
                              <circle cx="83.1" cy="-48" r="5" fill="#06b6d4" stroke="#fff" strokeWidth="1.5" />
                              <circle cx="83.1" cy="48" r="5" fill="#06b6d4" stroke="#fff" strokeWidth="1.5" />
                              <circle cx="0" cy="96" r="5" fill="#06b6d4" stroke="#fff" strokeWidth="1.5" />
                              <circle cx="-83.1" cy="48" r="5" fill="#06b6d4" stroke="#fff" strokeWidth="1.5" />
                              <circle cx="-83.1" cy="-48" r="5" fill="#06b6d4" stroke="#fff" strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                        
                        {/* 缩放和控制按钮 */}
                        <div className="absolute bottom-3 right-3 flex space-x-2">
                          <button className="p-1.5 bg-white rounded-md shadow-md text-gray-600 hover:text-gray-900 transition-colors border border-gray-100">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M15 3h6v6M14 10l7-7M10 21H3v-7M3 14l7 7" />
                            </svg>
                          </button>
                          <button className="p-1.5 bg-white rounded-md shadow-md text-gray-600 hover:text-gray-900 transition-colors border border-gray-100">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 8v8M8 12h8" />
                            </svg>
                          </button>
                          <button className="p-1.5 bg-white rounded-md shadow-md text-gray-600 hover:text-gray-900 transition-colors border border-gray-100">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M8 12h8" />
                            </svg>
                          </button>
                        </div>
                        
                        {/* 旋转按钮 */}
                        <div className="absolute top-3 right-3">
                          <button className="p-1.5 bg-white rounded-full shadow-md text-gray-600 hover:text-gray-900 transition-colors border border-gray-100">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="matching" className="space-y-6 mt-6">
          {/* 岗位信息模块 */}
          <div className="space-y-4">
            <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
                <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">关键岗位信息</CardTitle>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Button 
                      onClick={togglePositions}
                      className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs px-3 py-1 h-8 rounded-md flex items-center"
                    >
                      <span>切换岗位</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </Button>
                    {showPositions && (
                      <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 max-h-[200px] overflow-y-auto">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {positions.map((position) => (
                            <button
                              key={position}
                              className={`w-full text-left px-4 py-2 text-sm ${position === selectedPosition ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} hover:bg-gray-100`}
                              role="menuitem"
                              onClick={() => selectPosition(position)}
                            >
                              {position}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-sm font-medium" style={{color: '#3C5E5C'}}>岗位基本信息</h3>
                  <div className="rounded-lg p-6 bg-white">
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <p className="text-gray-500 text-sm mb-1">目标岗位:</p>
                        <p className="text-sm text-gray-800">IT开发平台架构师</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">所属部门:</p>
                        <p className="text-sm text-gray-800">智慧运营技术部</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">所属体系:</p>
                        <p className="text-sm text-gray-800">智慧运营技术体系</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">发展通道:</p>
                        <p className="text-sm text-gray-800">T 专业</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">岗位称谓:</p>
                        <p className="text-sm text-gray-800">18 ~ 19级</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">岗位序列:</p>
                        <p className="text-sm text-gray-800">IT开发序列</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">专业任职等级:</p>
                        <p className="text-sm text-gray-800">T5 领域架构级</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">当前持有人:</p>
                        <p className="text-sm text-gray-800">赛讯 90689</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium" style={{color: '#3C5E5C'}}>岗位能力要求</h3>
                    <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs px-4 py-1 h-8 rounded-md">
                      查看完整岗位说明书
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-lg p-4">
                      <h4 className="text-sm font-medium mb-1" style={{color: '#3C5E5C'}}>硬性能力要求</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 mr-2"></div>
                          <p className="text-sm text-gray-700">熟悉大型分布式系统架构设计</p>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 mr-2"></div>
                          <p className="text-sm text-gray-700">精通至少一种主流编程语言(Java/Go/Python)</p>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 mr-2"></div>
                          <p className="text-sm text-gray-700">熟悉微服务架构和云原生技术</p>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 mr-2"></div>
                          <p className="text-sm text-gray-700">具备系统性能调优和问题排查能力</p>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-4">
                      <h4 className="text-sm font-medium mb-1" style={{color: '#3C5E5C'}}>软性能力要求</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 mr-2"></div>
                          <p className="text-sm text-gray-700">技术领导力和团队协作能力</p>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 mr-2"></div>
                          <p className="text-sm text-gray-700">优秀的沟通和表达能力</p>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 mr-2"></div>
                          <p className="text-sm text-gray-700">问题分析和解决能力</p>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-gray-500 mt-1.5 mr-2"></div>
                          <p className="text-sm text-gray-700">持续学习和自我提升能力</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 岗位匹配人才模块 */}
          <div className="space-y-4">
            <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
                <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">岗位匹配人才</CardTitle>
                <div className="flex space-x-2">
                  <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs px-3 py-1 h-8 rounded-md">
                    筛选条件
                  </Button>
                  <Button 
                    className="bg-[#3C5E5C] hover:bg-[#2A4A48] text-white text-xs px-3 py-1 h-8 rounded-md"
                    onClick={openComparisonModal}
                    disabled={selectedEmployees.length === 0}
                  >
                    进行对比 ({selectedEmployees.length})
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-3">当前岗位：IT开发平台架构师</span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">匹配度 ≥ 75%</span>
                  </div>
                  <div className="text-sm text-gray-500">共找到15名匹配人才</div>
                </div>
                
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          选择
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          员工
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          当前岗位
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          所在部门
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          工作年限
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          匹配度
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          操作
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-gray-300 text-[#3C5E5C] focus:ring-[#3C5E5C]"
                            checked={selectedEmployees.includes("张三")}
                            onChange={() => toggleEmployeeSelection("张三")}
                          />
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                              <img src="/avatar.png" alt="员工头像" className="h-10 w-10 object-cover" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">张三</div>
                              <div className="text-xs text-gray-500">员工ID: EMP07</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">高级开发工程师</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">研发部</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">5年</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-medium flex items-center">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">90%</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Button variant="ghost" className="text-xs h-7 text-[#3C5E5C]">查看详情</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-gray-300 text-[#3C5E5C] focus:ring-[#3C5E5C]"
                            checked={selectedEmployees.includes("李四")}
                            onChange={() => toggleEmployeeSelection("李四")}
                          />
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                              <img src="/avatar.png" alt="员工头像" className="h-10 w-10 object-cover" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">李四</div>
                              <div className="text-xs text-gray-500">员工ID: EMP12</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">系统架构师</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">架构组</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">7年</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-medium flex items-center">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">85%</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Button variant="ghost" className="text-xs h-7 text-[#3C5E5C]">查看详情</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-gray-300 text-[#3C5E5C] focus:ring-[#3C5E5C]"
                            checked={selectedEmployees.includes("王五")}
                            onChange={() => toggleEmployeeSelection("王五")}
                          />
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                              <img src="/avatar.png" alt="员工头像" className="h-10 w-10 object-cover" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">王五</div>
                              <div className="text-xs text-gray-500">员工ID: EMP23</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">技术专家</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">技术部</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">6年</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-medium flex items-center">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">80%</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Button variant="ghost" className="text-xs h-7 text-[#3C5E5C]">查看详情</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <input 
                            type="checkbox" 
                            className="h-4 w-4 rounded border-gray-300 text-[#3C5E5C] focus:ring-[#3C5E5C]"
                            checked={selectedEmployees.includes("赵六")}
                            onChange={() => toggleEmployeeSelection("赵六")}
                          />
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                              <img src="/avatar.png" alt="员工头像" className="h-10 w-10 object-cover" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">赵六</div>
                              <div className="text-xs text-gray-500">员工ID: EMP31</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">高级开发工程师</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">平台部</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">4年</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-medium flex items-center">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">75%</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Button variant="ghost" className="text-xs h-7 text-[#3C5E5C]">查看详情</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-gray-500">显示 1-4 条，共 15 条</div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" className="h-8 w-8 p-0 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </Button>
                    <Button variant="outline" className="h-8 w-8 p-0 bg-gray-100 flex items-center justify-center">1</Button>
                    <Button variant="outline" className="h-8 w-8 p-0 flex items-center justify-center">2</Button>
                    <Button variant="outline" className="h-8 w-8 p-0 flex items-center justify-center">3</Button>
                    <Button variant="outline" className="h-8 w-8 p-0 flex items-center justify-center">4</Button>
                    <Button variant="outline" className="h-8 w-8 p-0 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 员工对比弹窗 */}
          {showComparisonModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg w-11/12 max-w-5xl max-h-[90vh] overflow-hidden shadow-xl">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">员工与岗位匹配度对比</h2>
                  <button 
                    className="text-gray-500 hover:text-gray-700" 
                    onClick={closeComparisonModal}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                  <div className="mb-4">
                    <h3 className="font-medium text-gray-700 mb-2">目标岗位：IT开发平台架构师</h3>
                    <p className="text-sm text-gray-600">所选员工与目标岗位的匹配情况对比分析</p>
                  </div>
                  
                  {/* 图表区域 */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="h-64 flex items-center justify-center border border-gray-200 rounded-lg bg-white">
                      <p className="text-gray-500">匹配度雷达图展示区域</p>
                    </div>
                  </div>
                  
                  {/* 详细匹配情况表格 */}
                  <table className="min-w-full border border-gray-200 divide-y divide-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">能力维度</th>
                        {selectedEmployees.includes("张三") && (
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">张三</th>
                        )}
                        {selectedEmployees.includes("李四") && (
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">李四</th>
                        )}
                        {selectedEmployees.includes("王五") && (
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">王五</th>
                        )}
                        {selectedEmployees.includes("赵六") && (
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">赵六</th>
                        )}
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">岗位要求</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">技术专业能力</td>
                        {selectedEmployees.includes("张三") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[95%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">95%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("李四") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[90%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">90%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("王五") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[85%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">85%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("赵六") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[80%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">80%</span>
                            </div>
                          </td>
                        )}
                        <td className="px-4 py-3 text-sm text-gray-700">特级（专家级）</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">架构设计能力</td>
                        {selectedEmployees.includes("张三") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[85%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">85%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("李四") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[95%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">95%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("王五") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-yellow-500 h-full w-[75%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">75%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("赵六") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-yellow-500 h-full w-[70%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">70%</span>
                            </div>
                          </td>
                        )}
                        <td className="px-4 py-3 text-sm text-gray-700">特级（领域级）</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">团队管理能力</td>
                        {selectedEmployees.includes("张三") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-yellow-500 h-full w-[75%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">75%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("李四") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-yellow-500 h-full w-[70%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">70%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("王五") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[80%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">80%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("赵六") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-red-500 h-full w-[65%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">65%</span>
                            </div>
                          </td>
                        )}
                        <td className="px-4 py-3 text-sm text-gray-700">高级</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">沟通协作能力</td>
                        {selectedEmployees.includes("张三") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[90%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">90%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("李四") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-yellow-500 h-full w-[75%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">75%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("王五") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[85%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">85%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("赵六") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[85%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">85%</span>
                            </div>
                          </td>
                        )}
                        <td className="px-4 py-3 text-sm text-gray-700">高级</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">问题解决能力</td>
                        {selectedEmployees.includes("张三") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[95%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">95%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("李四") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[90%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">90%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("王五") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-green-500 h-full w-[85%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">85%</span>
                            </div>
                          </td>
                        )}
                        {selectedEmployees.includes("赵六") && (
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                <div className="bg-yellow-500 h-full w-[75%]"></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">75%</span>
                            </div>
                          </td>
                        )}
                        <td className="px-4 py-3 text-sm text-gray-700">特级</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="mt-6 flex justify-end">
                    <Button 
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 mr-2 px-4 py-2 rounded"
                      onClick={closeComparisonModal}
                    >
                      关闭
                    </Button>
                    <Button className="bg-[#3C5E5C] hover:bg-[#2A4A48] text-white px-4 py-2 rounded">
                      导出匹配报告
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 人才横向对比模块 */}
          <div className="space-y-4">
            <Card className="shadow-sm border-none bg-white rounded-lg overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-100">
                <CardTitle style={{color: '#3C5E5C'}} className="text-sm font-medium">人才横向对比</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-base text-gray-800">人才横向对比</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">对同级或相似岗位的多名员工进行横向能力对比，了解团队差异和互补性</p>
                  
                  <div className="mb-6 border border-gray-200 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 flex flex-wrap gap-2 items-center">
                        <div className="text-xs text-gray-500 mr-1">已选员工：</div>
                        <div className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                          Jay
                          <svg className="w-3 h-3 ml-1 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </div>
                        <div className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                          Caicai Yang
                          <svg className="w-3 h-3 ml-1 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </div>
                        <div className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                          Anders
                          <svg className="w-3 h-3 ml-1 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </div>
                        <div className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                          Anthony
                          <svg className="w-3 h-3 ml-1 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button className="flex-shrink-0 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs px-3 py-1 h-8 rounded-md">
                          <PlusIcon size={14} className="mr-1" />
                          添加对比员工
                        </Button>
                        <Button className="flex-shrink-0 bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs px-3 py-1 h-8 rounded-md">
                          进行对比
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* 表格式人才对比视图 */}
                  <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            员工
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            教育
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            工作兴趣
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                                <img src="/avatar.png" alt="员工头像" className="h-10 w-10 object-cover" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Anders Wahlström</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm text-gray-900">B.S.</div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm text-gray-900">-</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                                <img src="/avatar.png" alt="员工头像" className="h-10 w-10 object-cover" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Anthony Chong</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm text-gray-900">B.A.</div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm text-gray-900">-</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                                <img src="/avatar.png" alt="员工头像" className="h-10 w-10 object-cover" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Edward Huntington</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm text-gray-900">B.S.</div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm text-gray-900">-</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                                <img src="/avatar.png" alt="员工头像" className="h-10 w-10 object-cover" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Hans Visser</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm text-gray-900">MBA</div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm text-gray-900">-</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 text-sm text-gray-500">
                    <button className="text-[#3C5E5C] font-medium hover:underline">查看更多</button>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-sm text-gray-800">能力对比结果</h3>
                  </div>
                  
                  <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            员工
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            能力
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                                <img src="/avatar.png" alt="员工头像" className="h-10 w-10 object-cover" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Anders Wahlström</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="space-y-2">
                              <div>
                                <div className="text-xs text-gray-500">主动倾听（熟练）</div>
                                <div className="text-xs text-gray-500">冲突管理（熟练）</div>
                                <div className="text-xs text-gray-500">核心价值观（熟练）</div>
                                <div className="text-xs text-gray-500">客户关注点（专家）</div>
                                <div className="text-xs text-gray-500">优先级设定（专家）</div>
                                <div className="text-xs text-gray-500">问题解决（熟练）</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                                <img src="/avatar.png" alt="员工头像" className="h-10 w-10 object-cover" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Anthony Chong</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="space-y-2">
                              <div>
                                <div className="text-xs text-gray-500">主动倾听（熟练）</div>
                                <div className="text-xs text-gray-500">冲突管理（熟练）</div>
                                <div className="text-xs text-gray-500">核心价值观（高级）</div>
                                <div className="text-xs text-gray-500">客户关注点（专家）</div>
                                <div className="text-xs text-gray-500">领域专长（熟练）</div>
                                <div className="text-xs text-gray-500">更多 (4)</div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mt-6 mb-2 flex justify-end">
                  <Button className="bg-[#3C5E5C] hover:bg-[#2A4A48] text-white text-xs px-3 py-1 h-8 rounded-md">
                    导出对比报告
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 