export default {
  // 导航菜单
  nav: {
    dashboard: '仪表盘',
    configs: '配置',
    explorer: '资源管理器',
    backend: '后端',
    mounts: '挂载',
    logout: '退出登录'
  },
  // 首页
  home: {
    jobs: '任务',
    notMonitoring: '未监控'
  },
  // 后端状态卡片
  backendStatus: {
    overview: '概览',
    status: '状态: ',
    notMonitoring: '未监控连接状态。点击导航栏图标开始监控。',
    connected: 'rClone 后端已连接并正常工作',
    disconnected: '无法连接到 rclone 后端。连接到 {ipAddress} 时出现问题。',
    currentIp: '当前 IP 地址: ',
    username: '用户名: ',
    connectedButton: '已连接',
    disconnectedButton: '未连接',
    disabledButton: '已禁用'
  },
  // 带宽状态卡片
  bandwidth: {
    title: '带宽',
    modify: '修改',
    currentMaxSpeed: '当前最大速度:  ',
    unlimited: '无限制',
    enterNewMaxSpeed: '输入新的最大速度 (上传:下载)',
    keepEmptyToReset: '保持为空以重置。',
    bandwidthError: '带宽格式应为 1M|2M|1G|1K|1.1K 等。也可以指定为 (上传:下载)',
    set: '设置'
  },
  // 运行任务
  runningJobs: {
    currentJobs: '当前任务',
    noJobs: '目前没有运行中的任务',
    job: '任务',
    status: '状态',
    transferSpeed: '传输速度',
    transferred: '已传输',
    eta: '预计完成时间',
    progress: '进度',
    transferring: '正在传输',
    speed: '速度',
    notConnected: '未连接到 rclone。',
    globalStats: '全局统计',
    bytesTransferred: '已传输字节',
    averageSpeed: '平均速度',
    checks: '检查',
    deletes: '删除',
    runningSince: '运行时间',
    errors: '错误',
    transfers: '传输',
    lastError: '最后错误'
  }
};