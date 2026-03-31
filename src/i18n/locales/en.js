export default {
  // 导航菜单
  nav: {
    dashboard: 'Dashboard',
    configs: 'Configs',
    explorer: 'Explorer',
    backend: 'Backend',
    mounts: 'Mounts',
    logout: 'Log Out'
  },
  // 首页
  home: {
    jobs: 'Jobs',
    notMonitoring: 'Not Monitoring'
  },
  // 后端状态卡片
  backendStatus: {
    overview: 'Overview',
    status: 'Status: ',
    notMonitoring: 'Not monitoring connectivity status. Tap the icon in navbar to start.',
    connected: 'rClone Backend is connected and working as expected',
    disconnected: 'Cannot connect to rclone backend. There is a problem with connecting to {ipAddress}.',
    currentIp: 'Current IP Address: ',
    username: 'Username: ',
    connectedButton: 'CONNECTED',
    disconnectedButton: 'DISCONNECTED',
    disabledButton: 'DISABLED'
  },
  // 带宽状态卡片
  bandwidth: {
    title: 'Bandwidth',
    modify: 'Modify',
    currentMaxSpeed: 'Current Max speed:  ',
    unlimited: 'Unlimited',
    enterNewMaxSpeed: 'Enter new max speed (upload:download)',
    keepEmptyToReset: 'Keep empty to reset.',
    bandwidthError: 'The bandwidth should be of the form 1M|2M|1G|1K|1.1K etc. Can also be specified as (upload:download)',
    set: 'Set'
  },
  // 运行任务
  runningJobs: {
    currentJobs: 'Current Jobs',
    noJobs: 'No jobs running at the moment',
    job: 'Job',
    status: 'Status',
    transferSpeed: 'Transfer Speed',
    transferred: 'Transferred',
    eta: 'ETA',
    progress: 'Progress',
    transferring: 'Transferring',
    speed: 'Speed',
    notConnected: 'Not connected to rclone.',
    globalStats: 'Global Stats',
    bytesTransferred: 'Bytes Transferred',
    averageSpeed: 'Average Speed',
    checks: 'Checks',
    deletes: 'Deletes',
    runningSince: 'Running since',
    errors: 'Errors',
    transfers: 'Transfers',
    lastError: 'Last Error'
  }
};