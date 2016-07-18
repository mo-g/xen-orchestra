// This file is coded in ES5 and CommonJS to be compatible with
// `create-locale`.

var forEach = require('lodash/forEach')
var isString = require('lodash/isString')

var messages = {
  editableLongClickPlaceholder: 'Long click to edit',
  editableClickPlaceholder: 'Click to edit',

  // ----- Modals -----
  alertOk: 'OK',
  confirmOk: 'OK',
  confirmCancel: 'Cancel',

  // ----- Filters -----
  onError: 'On error',
  successful: 'Successful',

  // ----- Titles -----
  homePage: 'Home',
  dashboardPage: 'Dashboard',
  overviewDashboardPage: 'Overview',
  overviewVisualizationDashboardPage: 'Visualizations',
  overviewStatsDashboardPage: 'Statistics',
  overviewHealthDashboardPage: 'Health',
  selfServicePage: 'Self service',
  selfServiceDashboardPage: 'Dashboard',
  selfServiceAdminPage: 'Administration',
  backupPage: 'Backup',
  jobsPage: 'Jobs',
  updatePage: 'Updates',
  settingsPage: 'Settings',
  settingsServersPage: 'Servers',
  settingsUsersPage: 'Users',
  settingsGroupsPage: 'Groups',
  settingsAclsPage: 'ACLs',
  settingsPluginsPage: 'Plugins',
  aboutPage: 'About',
  newMenu: 'New',
  taskMenu: 'Tasks',
  taskPage: 'Tasks',
  newVmPage: 'VM',
  newSrPage: 'Storage',
  newServerPage: 'Server',
  newImport: 'Import',
  backupOverviewPage: 'Overview',
  backupNewPage: 'New',
  backupRemotesPage: 'Remotes',
  backupRestorePage: 'Restore',
  schedule: 'Schedule',
  newVmBackup: 'New VM backup',
  editVmBackup: 'Edit VM backup',
  backup: 'Backup',
  rollingSnapshot: 'Rolling Snapshot',
  deltaBackup: 'Delta Backup',
  disasterRecovery: 'Disaster Recovery',
  continuousReplication: 'Continuous Replication',
  jobsOverviewPage: 'Overview',
  jobsNewPage: 'New',
  jobsSchedulingPage: 'Scheduling',
  customJob: 'Custom Job',
  userPage: 'User',

  // ----- Sign out -----
  signOut: 'Sign out',

  // ----- Home view ------
  homeFetchingData: 'Fetching data…',
  homeWelcome: 'Welcome on Xen Orchestra!',
  homeWelcomeText: 'Add your XenServer hosts or pools',
  homeHelp: 'Want some help?',
  homeAddServer: 'Add server',
  homeOnlineDoc: 'Online Doc',
  homeProSupport: 'Pro Support',
  homeNoVms: 'There are no VMs!',
  homeNoVmsOr: 'Or…',
  homeImportVm: 'Import VM',
  homeImportVmMessage: 'Import an existing VM in xva format',
  homeRestoreBackup: 'Restore a backup',
  homeRestoreBackupMessage: 'Restore a backup from a remote store',
  homeNewVmMessage: 'This will create a new VM',
  homeFilters: 'Filters',
  homeTypePool: 'Pool',
  homeTypeHost: 'Host',
  homeTypeVm: 'VM',
  homeTypeSr: 'SR',
  homeTypeVdi: 'VDI',
  homeSort: 'Sort',
  homeAllPools: 'Pools',
  homeAllHosts: 'Hosts',
  homeAllTags: 'Tags',
  homeNewVm: 'New VM',
  homeFilterRunningHosts: 'Running hosts',
  homeFilterDisabledHosts: 'Disabled hosts',
  homeFilterRunningVms: 'Running VMs',
  homeFilterNonRunningVms: 'Non running VMs',
  homeFilterPendingVms: 'Pending VMs',
  homeFilterHvmGuests: 'HVM guests',
  homeFilterTags: 'Tags',
  homeSortBy: 'Sort by',
  homeSortByName: 'Name',
  homeSortByPowerstate: 'Power state',
  homeSortByRAM: 'RAM',
  homeSortByvCPUs: 'vCPUs',
  homeSortByCpus: 'CPUs',
  homeDisplayedItems: '{displayed, number}x {icon} (on {total, number})',
  homeSelectedItems: '{selected, number}x {icon} selected (on {total, number})',
  homeMore: 'More',
  homeMigrateTo: 'Migrate to…',
  homeMissingPaths: 'Missing patches',
  highAvailability: 'High Availability',

  // ----- Forms -----
  add: 'Add',
  remove: 'Remove',
  preview: 'Preview',
  item: 'Item',
  noSelectedValue: 'No selected value',
  selectSubjects: 'Choose user(s) and/or group(s)',
  selectObjects: 'Select Object(s)…',
  selectRole: 'Choose a role',
  selectHosts: 'Select Host(s)…',
  selectHostsVms: 'Select object(s)…',
  selectNetworks: 'Select Network(s)…',
  selectPifs: 'Select PIF(s)…',
  selectPools: 'Select Pool(s)…',
  selectRemotes: 'Select Remote(s)…',
  selectResourceSets: 'Select resource set(s)…',
  selectResourceSetsVmTemplate: 'Select template(s)…',
  selectResourceSetsSr: 'Select SR(s)…',
  selectResourceSetsNetwork: 'Select network(s)…',
  selectResourceSetsVdi: 'Select disk(s)…',
  selectSrs: 'Select SR(s)…',
  selectVms: 'Select VM(s)…',
  selectVmTemplates: 'Select VM template(s)…',
  selectTags: 'Select tag(s)…',
  selectVdis: 'Select disk(s)…',
  fillRequiredInformations: 'Fill required informations.',
  fillOptionalInformations: 'Fill informations (optional)',
  selectTableReset: 'Reset',

  // --- Dates/Scheduler ---

  schedulingMonth: 'Month',
  schedulingEveryMonth: 'Every month',
  schedulingEachSelectedMonth: 'Each selected month',
  schedulingMonthDay: 'Day of the month',
  schedulingEveryMonthDay: 'Every day',
  schedulingEachSelectedMonthDay: 'Each selected day',
  schedulingWeekDay: 'Day of the week',
  schedulingEveryWeekDay: 'Every day',
  schedulingEachSelectedWeekDay: 'Each selected day',
  schedulingHour: 'Hour',
  schedulingEveryHour: 'Every hour',
  schedulingEveryNHour: 'Every N hour',
  schedulingEachSelectedHour: 'Each selected hour',
  schedulingMinute: 'Minute',
  schedulingEveryMinute: 'Every minute',
  schedulingEveryNMinute: 'Every N minute',
  schedulingEachSelectedMinute: 'Each selected minute',
  schedulingReset: 'Reset',
  unknownSchedule: 'Unknown',
  backupEditNotFoundTitle: 'Cannot edit backup',
  backupEditNotFoundMessage: 'Missing required info for edition',
  job: 'Job',
  jobId: 'Job ID',
  jobName: 'Name',
  jobStart: 'Start',
  jobEnd: 'End',
  jobDuration: 'Duration',
  jobStatus: 'Status',
  jobAction: 'Action',
  jobTag: 'Tag',
  jobScheduling: 'Scheduling',
  jobState: 'State',
  runJob: 'Run job',
  runJobVerbose: 'One shot running started. See overview for logs.',
  jobStarted: 'Started',
  jobFinished: 'Finished',
  saveBackupJob: 'Save',
  deleteBackupSchedule: 'Remove backup job',
  deleteBackupScheduleQuestion: 'Are you sure you want to delete this backup job?',
  scheduleEnableAfterCreation: 'Enable immediately after creation',
  scheduleEditMessage: 'You are editing Schedule {name} ({id}). Saving will override previous schedule state.',
  jobEditMessage: 'You are editing job {name} ({id}). Saving will override previous job state.',
  noScheduledJobs: 'No scheduled jobs.',
  noJobs: 'No jobs found.',
  noSchedules: 'No schedules found',
  jobActionPlaceHolder: 'Select a xo-server API command',

  // ------ New backup -----
  newBackupSelection: 'Select your backup type:',

  // ------ New Remote -----
  remoteList: 'Remote stores for backup',
  newRemote: 'New File System Remote',
  remoteTypeLocal: 'Local',
  remoteTypeNfs: 'NFS',
  remoteTypeSmb: 'SMB',
  remoteType: 'Type',
  remoteTestTip: 'Test your remote',
  testRemote: 'Test Remote',
  remoteTestFailure: 'Test failed for {name}',
  remoteTestSuccess: 'Test passed for {name}',
  remoteTestError: 'Error',
  remoteTestStep: 'Test Step',
  remoteTestFile: 'Test file',
  remoteTestSuccessMessage: 'The remote appears to work correctly',

  // ------ New Storage -----
  newSrTitle: 'Create a new SR',
  newSrGeneral: 'General',
  newSrTypeSelection: 'Select Strorage Type:',
  newSrSettings: 'Settings',
  newSrUsage: 'Storage Usage',
  newSrSummary: 'Summary',
  newSrHost: 'Host',
  newSrType: 'Type',
  newSrName: 'Name',
  newSrDescription: 'Description',
  newSrServer: 'Server',
  newSrPath: 'Path',
  newSrIqn: 'IQN',
  newSrLun: 'LUN',
  newSrAuth: 'with auth.',
  newSrUsername: 'User Name',
  newSrPassword: 'Password',
  newSrDevice: 'Device',
  newSrInUse: 'in use',
  newSrSize: 'Size',
  newSrCreate: 'Create',

  // ----- Acls, Users, Groups ------
  subjectName: 'Users/Groups',
  objectName: 'Object',
  roleName: 'Role',
  newGroupName: 'New Group Name',
  createGroup: 'Create Group',
  createGroupButton: 'Create',
  deleteGroup: 'Delete Group',
  deleteGroupConfirm: 'Are you sure you want to delete this group?',
  removeUserFromGroup: 'Remove user from Group',
  deleteUserConfirm: 'Are you sure you want to delete this user?',
  deleteUser: 'Delete User',
  unknownUser: 'unknown user',
  noGroupFound: 'No group found',
  groupNameColumn: 'Name',
  groupUsersColumn: 'Users',
  addUserToGroupColumn: 'Add User',
  userNameColumn: 'Email',
  userPermissionColumn: 'Permissions',
  userPasswordColumn: 'Password',
  userName: 'Email',
  userPassword: 'Password',
  createUserButton: 'Create',
  noUserFound: 'No user found',
  userLabel: 'User',
  adminLabel: 'Admin',
  noUserInGroup: 'No user in group',
  countUsers: '{users} user{users, plural, one {} other {s}}',
  selectPermission: 'Select Permission',

  // ----- Plugins ------
  autoloadPlugin: 'Auto-load at server start',
  savePluginConfiguration: 'Save configuration',
  deletePluginConfiguration: 'Delete configuration',
  pluginError: 'Plugin error',
  unknownPluginError: 'Unknown error',
  purgePluginConfiguration: 'Purge plugin configuration',
  purgePluginConfigurationQuestion: 'Are you sure you want to purge this configuration ?',
  editPluginConfiguration: 'Edit',
  cancelPluginEdition: 'Cancel',
  pluginConfigurationSuccess: 'Plugin configuration',
  pluginConfigurationChanges: 'Plugin configuration successfully saved!',

  // ----- VM actions ------
  startVmLabel: 'Start',
  recoveryModeLabel: 'Recovery start',
  suspendVmLabel: 'Suspend',
  stopVmLabel: 'Stop',
  forceShutdownVmLabel: 'Force shutdown',
  rebootVmLabel: 'Reboot',
  forceRebootVmLabel: 'Force reboot',
  deleteVmLabel: 'Delete',
  migrateVmLabel: 'Migrate',
  snapshotVmLabel: 'Snapshot',
  exportVmLabel: 'Export',
  resumeVmLabel: 'Resume',
  copyVmLabel: 'Copy',
  cloneVmLabel: 'Clone',
  fastCloneVmLabel: 'Fast clone',
  convertVmToTemplateLabel: 'Convert to template',
  vmConsoleLabel: 'Console',

  // ----- SR tabs -----
  // ----- SR actions -----
  srRescan: 'Rescan all disks',
  srReconnectAll: 'Connect to all hosts',
  srDisconnectAll: 'Disconnect to all hosts',
  srForget: 'Forget this SR',
  srRemoveButton: 'Remove this SR',
  srNoVdis: 'No VDIs in this storage',
  // ----- Pool tabs -----
  hostsTabName: 'Hosts',
  // ----- Pool advanced tab -----
  poolHaStatus: 'High Availability',
  poolHaEnabled: 'Enabled',
  poolHaDisabled: 'Disabled',
  // ----- Pool host tab -----
  hostNameLabel: 'Name',
  hostDescription: 'Description',
  hostMemory: 'Memory',
  noHost: 'No hosts',
  // ----- Pool network tab -----
  poolNetworkNameLabel: 'Name',
  poolNetworkDescription: 'Description',
  poolNetworkPif: 'PIFs',
  poolNoNetwork: 'No networks',
  poolNetworkMTU: 'MTU',
  poolNetworkPifAttached: 'Connected',
  poolNetworkPifDetached: 'Disconnected',
  // ----- Pool actions ------
  addSrLabel: 'Add SR',
  addVmLabel: 'Add VM',
  addHostLabel: 'Add Host',
  disconnectServer: 'Disconnect',

  // ----- Host actions ------
  startHostLabel: 'Start',
  stopHostLabel: 'Stop',
  enableHostLabel: 'Enable',
  disableHostLabel: 'Disable',
  restartHostAgent: 'Restart toolstack',
  forceRebootHostLabel: 'Force reboot',
  rebootHostLabel: 'Reboot',
  emergencyModeLabel: 'Emergency mode',
  // ----- Host tabs -----
  storageTabName: 'Storage',
  patchesTabName: 'Patches',
    // ----- host stat tab -----
  statLoad: 'Load average',
    // ----- host advanced tab -----
  hardwareHostSettingsLabel: 'Hardware',
  hostAddress: 'Address',
  hostStatus: 'Status',
  hostBuildNumber: 'Build number',
  hostIscsiName: 'iSCSI name',
  hostXenServerVersion: 'Version',
  hostStatusEnabled: 'Enabled',
  hostStatusDisabled: 'Disabled',
  hostPowerOnMode: 'Power on mode',
  hostStartedSince: 'Host uptime',
  hostStackStartedSince: 'Toolstack uptime',
  hostCpusModel: 'CPU model',
  hostCpusNumber: 'Core (socket)',
  hostManufacturerinfo: 'Manufacturer info',
  hostBiosinfo: 'BIOS info',
  licenseHostSettingsLabel: 'Licence',
  hostLicenseType: 'Type',
  hostLicenseSocket: 'Socket',
  hostLicenseExpiry: 'Expiry',
  // ----- Host net tabs -----
  networkCreateButton: 'Add a network',
  pifDeviceLabel: 'Device',
  pifNetworkLabel: 'Network',
  pifVlanLabel: 'VLAN',
  pifAddressLabel: 'Address',
  pifMacLabel: 'MAC',
  pifMtuLabel: 'MTU',
  pifStatusLabel: 'Status',
  pifStatusConnected: 'Connected',
  pifStatusDisconnected: 'Disconnected',
  pifNoInterface: 'No physical interface detected',
  // ----- Host storage tabs -----
  addSrDeviceButton: 'Add a storage',
  srNameLabel: 'Name',
  srType: 'Type',
  pdbStatus: 'Status',
  pbdStatusConnected: 'Connected',
  pbdStatusDisconnected: 'Disconnected',
  srShared: 'Shared',
  srNotShared: 'Not shared',
  pbdNoSr: 'No storage detected',
  // ----- Host patch tabs -----
  patchNameLabel: 'Name',
  patchUpdateButton: 'Install all patches',
  patchDescription: 'Description',
  patchApplied: 'Applied date',
  patchSize: 'Size',
  patchStatus: 'Status',
  patchStatusApplied: 'Applied',
  patchStatusNotApplied: 'Missing patches',
  patchNothing: 'No patch detected',
  patchReleaseDate: 'Release date',
  patchGuidance: 'Guidance',
  patchAction: 'Action',
  hostAppliedPatches: 'Applied patches',
  hostMissingPatches: 'Missing patches',
  hostUpToDate: 'Host up-to-date!',
  // ----- Pool patch tabs -----
  refreshPatches: 'Refresh patches',
  installPoolPatches: 'Install pool patches',

  // ----- VM tabs -----
  generalTabName: 'General',
  statsTabName: 'Stats',
  consoleTabName: 'Console',
  snapshotsTabName: 'Snapshots',
  logsTabName: 'Logs',
  advancedTabName: 'Advanced',
  networkTabName: 'Network',
  disksTabName: 'Disk{disks, plural, one {} other {s}}',

  powerStateHalted: 'halted',
  powerStateRunning: 'running',
  powerStateSuspended: 'suspended',

  // ----- VM home -----
  vmStatus: 'No Xen tools detected',
  vmName: 'No IPv4 record',
  vmDescription: 'No IP record',
  vmSettings: 'Started {ago}',
  vmCurrentStatus: 'Current status:',
  vmNotRunning: 'Not running',

  // ----- VM general tab -----
  noToolsDetected: 'No Xen tools detected',
  noIpv4Record: 'No IPv4 record',
  noIpRecord: 'No IP record',
  started: 'Started {ago}',
  paraVirtualizedMode: 'Paravirtualization (PV)',
  hardwareVirtualizedMode: 'Hardware virtualization (HVM)',

  // ----- VM stat tab -----
  statsCpu: 'CPU usage',
  statsMemory: 'Memory usage',
  statsNetwork: 'Network throughput',
  useStackedValuesOnStats: 'Stacked values',
  statDisk: 'Disk throughput',
  statLastTenMinutes: 'Last 10 minutes',
  statLastTwoHours: 'Last 2 hours',
  statLastWeek: 'Last week',
  statLastYear: 'Last year',

  // ----- VM console tab -----
  copyToClipboardLabel: 'Copy',
  ctrlAltDelButtonLabel: 'Ctrl+Alt+Del',
  tipLabel: 'Tip:',
  tipConsoleLabel: 'non-US keyboard could have issues with console: switch your own layout to US.',

  // ----- VM disk tab -----
  vdiAction: 'Action',
  vdiAttachDeviceButton: 'Attach disk',
  vbdCreateDeviceButton: 'New disk',
  vdiBootOrder: 'Boot order',
  vdiNameLabel: 'Name',
  vdiNameDescription: 'Description',
  vdiTags: 'Tags',
  vdiSize: 'Size',
  vdiSr: 'SR',
  vdiVm: 'VM',
  vdbBootableStatus: 'Boot flag',
  vdbStatus: 'Status',
  vbdStatusConnected: 'Connected',
  vbdStatusDisconnected: 'Disconnected',
  vbdNoVbd: 'No disks',

  // ----- VM network tab -----
  vifCreateDeviceButton: 'New device',
  vifNoInterface: 'No interface',
  vifDeviceLabel: 'Device',
  vifMacLabel: 'MAC address',
  vifMtuLabel: 'MTU',
  vifNetworkLabel: 'Network',
  vifStatusLabel: 'Status',
  vifStatusConnected: 'Connected',
  vifStatusDisconnected: 'Disconnected',
  vifIpAddresses: 'IP addresses',
  vifMacAutoGenerate: 'Auto-generated if empty',

  // ----- VM snapshot tab -----
  noSnapshots: 'No snapshots',
  snapshotCreateButton: 'New snapshot',
  tipCreateSnapshotLabel: 'Just click on the snapshot button to create one!',
  snapshotDate: 'Creation date',
  snapshotName: 'Name',
  snapshotAction: 'Action',

  // ----- VM log tab -----
  logRemoveAll: 'Remove all logs',
  noLogs: 'No logs so far',
  logDate: 'Creation date',
  logName: 'Name',
  logContent: 'Content',
  logAction: 'Action',

  // ----- VM advanced tab -----
  vmRemoveButton: 'Remove',
  vmConvertButton: 'Convert',
  xenSettingsLabel: 'Xen settings',
  guestOsLabel: 'Guest OS',
  miscLabel: 'Misc',
  uuid: 'UUID',
  virtualizationMode: 'Virtualization mode',
  cpuWeightLabel: 'CPU weight',
  defaultCpuWeight: 'Default',
  pvArgsLabel: 'PV args',
  xenToolsStatus: 'Xen tools status',
  xenToolsStatusValue: {
    defaultMessage: '{status}',
    description: 'status can be `not-installed`, `unknown`, `out-of-date` & `up-to-date`'
  },
  osName: 'OS name',
  osKernel: 'OS kernel',
  autoPowerOn: 'Auto power on',
  ha: 'HA',
  originalTemplate: 'Original template',
  unknownOsName: 'Unknown',
  unknownOsKernel: 'Unknown',
  unknownOriginalTemplate: 'Unknown',
  vmLimitsLabel: 'VM limits',
  vmCpuLimitsLabel: 'CPU limits',
  vmMemoryLimitsLabel: 'Memory limits (min/max)',
  vmMaxVcpus: 'vCPUs max:',
  vmMaxRam: 'Memory max:',

  // ----- VM placeholders -----

  vmHomeNamePlaceholder: 'Long click to add a name',
  vmHomeDescriptionPlaceholder: 'Long click to add a description',
  vmViewNamePlaceholder: 'Click to add a name',
  vmViewDescriptionPlaceholder: 'Click to add a description',

  // ----- Dashboard -----
  poolPanel: 'Pool{pools, plural, one {} other {s}}',
  hostPanel: 'Host{hosts, plural, one {} other {s}}',
  vmPanel: 'VM{vms, plural, one {} other {s}}',
  memoryStatePanel: 'RAM Usage',
  cpuStatePanel: 'CPUs Usage',
  vmStatePanel: 'VMs Power state',
  taskStatePanel: 'Pending tasks',
  usersStatePanel: 'Users',
  srStatePanel: 'Storage state',
  ofUsage: '{usage} (of {total})',
  noSrs: 'No storage',
  srName: 'Name',
  srPool: 'Pool',
  srHost: 'Host',
  srFormat: 'Type',
  srSize: 'Size',
  srUsage: 'Usage',
  srUsed: 'used',
  srFree: 'free',
  srUsageStatePanel: 'Storage Usage',
  srTopUsageStatePanel: 'Top 5 SR Usage (in %)',
  vmsStates: '{running} running ({halted} halted)',

  // --- Stats board --
  weekHeatmapData: '{value} {date, date, medium}',
  weekHeatmapNoData: 'No data.',
  weeklyHeatmap: 'Weekly Heatmap',
  weeklyCharts: 'Weekly Charts',
  weeklyChartsScaleInfo: 'Synchronize scale:',
  statsDashboardGenericErrorTitle: 'Stats error',
  statsDashboardGenericErrorMessage: 'There is no stats available for:',
  noSelectedMetric: 'No selected metric',
  statsDashboardSelectObjects: 'Select',
  metricsLoading: 'Loading…',

  // ----- Visualizations -----
  comingSoon: 'Coming soon!',

  // ----- Health -----
  orphanedVdis: 'Orphaned VDIs',
  orphanedVms: 'Orphaned VMs',
  noOrphanedObject: 'No orphans',
  removeAllOrphanedObject: 'Remove all orphaned VDIs',
  vmNameLabel: 'Name',
  vmNameDescription: 'Description',
  vmContainer: 'Resident on',
  alarmMessage: 'Alarms',
  noAlarms: 'No alarms',
  alarmDate: 'Date',
  alarmContent: 'Content',
  alarmObject: 'Issue on',
  alarmPool: 'Pool',
  alarmRemoveAll: 'Remove all alarms',

  // ----- New VM -----
  newVmCreateNewVmOn: 'Create a new VM on {select}',
  newVmCreateNewVmOn2: 'Create a new VM on {select1} or {select2}',
  newVmCreateNewVmNoPermission: 'You have no permission to create a VM',
  newVmInfoPanel: 'Infos',
  newVmNameLabel: 'Name',
  newVmTemplateLabel: 'Template',
  newVmDescriptionLabel: 'Description',
  newVmPerfPanel: 'Performances',
  newVmVcpusLabel: 'vCPUs',
  newVmRamLabel: 'RAM',
  newVmInstallSettingsPanel: 'Install settings',
  newVmIsoDvdLabel: 'ISO/DVD',
  newVmNetworkLabel: 'Network',
  newVmPvArgsLabel: 'PV Args',
  newVmPxeLabel: 'PXE',
  newVmInterfacesPanel: 'Interfaces',
  newVmMacLabel: 'MAC',
  newVmAddInterface: 'Add interface',
  newVmDisksPanel: 'Disks',
  newVmSrLabel: 'SR',
  newVmBootableLabel: 'Bootable',
  newVmSizeLabel: 'Size',
  newVmAddDisk: 'Add disk',
  newVmSummaryPanel: 'Summary',
  newVmCreate: 'Create',
  newVmReset: 'Reset',
  newVmSelectTemplate: 'Select template',
  newVmSshKey: 'SSH key',
  newVmConfigDrive: 'Config drive',
  newVmCustomConfig: 'Custom config',
  newVmBootAfterCreate: 'Boot VM after creation',
  newVmMacPlaceholder: 'Auto-generated if empty',
  newVmCpuWeightLabel: 'CPU weight',
  newVmCpuWeightQuarter: 'Quarter (1/4)',
  newVmCpuWeightHalf: 'Half (1/2)',
  newVmCpuWeightNormal: 'Normal',
  newVmCpuWeightDouble: 'Double (x2)',
  newVmCloudConfig: 'Cloud config',
  newVmCreateVms: 'Create VMs',
  newVmCreateVmsConfirm: 'Are you sure you want to create {nbVms} VMs?',
  newVmMultipleVms: 'Multiple VMs:',
  newVmSelectResourceSet: 'Select a resource set:',
  newVmMultipleVmsPattern: 'Name pattern:',
  newVmMultipleVmsPatternPlaceholder: 'e.g.: \\{name\\}_%',
  newVmFirstIndex: 'First index:',

  // ----- Self -----
  resourceSets: 'Resource sets',
  noResourceSets: 'No resource sets.',
  resourceSetName: 'Resource set name',
  resourceSetCreation: 'Creation and edition',
  saveResourceSet: 'Save',
  resetResourceSet: 'Reset',
  editResourceSet: 'Edit',
  deleteResourceSet: 'Delete',
  deleteResourceSetWarning: 'Delete resource set',
  deleteResourceSetQuestion: 'Are you sure you want to delete this resource set?',
  resourceSetMissingObjects: 'Missing objects:',
  resourceSetVcpus: 'vCPUs',
  resourceSetMemory: 'Memory',
  resourceSetStorage: 'Storage',
  unknownResourceSetValue: 'Unknown',
  availableHosts: 'Available hosts',
  excludedHosts: 'Excluded hosts',
  noHostsAvailable: 'No hosts available.',
  availableHostsDescription: 'VMs created from this resource set shall run on the following hosts.',
  maxCpus: 'Maximum CPUs',
  maxRam: 'Maximum RAM (GiB)',
  maxDiskSpace: 'Maximum disk space',
  noResourceSetLimits: 'No limits.',
  totalResource: 'Total:',
  remainingResource: 'Remaining:',
  usedResource: 'Used:',

  // ---- VM import ---
  importVmsList: 'Try dropping some backups here, or click to select backups to upload. Accept only .xva files.',
  noSelectedVms: 'No selected VMs.',
  vmImportToPool: 'To Pool:',
  vmImportToSr: 'To SR:',
  vmsToImport: 'VMs to import',
  importVmsCleanList: 'Reset',
  vmImportSuccess: 'VM import success',
  vmImportFailed: 'VM import failed',
  startVmImport: 'Import starting…',
  startVmExport: 'Export starting…',

  // ---- Tasks ---
  noTasks: 'No pending tasks',
  xsTasks: 'Currently, there are not any pending XenServer tasks',

  // ---- Backup views ---
  listRemote: 'List Remote',
  simpleBackup: 'simple',
  delta: 'delta',
  restoreBackups: 'Restore Backups',
  noRemotes: 'No remotes',
  remoteEnabled: 'enabled',
  remoteError: 'error',
  noBackup: 'No backup available',
  backupVmNameColumn: 'VM Name',
  backupTagColumn: 'Backup Tag',
  lastBackupColumn: 'Last Backup',
  availableBackupsColumn: 'Available Backups',
  restoreColumn: 'Restore',
  restoreTip: 'Restore VM',
  importBackupTitle: 'Import VM',
  importBackupMessage: 'Starting your backup import',

  // ----- Modals -----
  emergencyShutdownHostsModalTitle: 'Emergency shutdown Host{nHosts, plural, one {} other {s}}',
  emergencyShutdownHostsModalMessage: 'Are you sure you want to shutdown {nHosts} Host{nHosts, plural, one {} other {s}}?',
  stopHostModalTitle: 'Shutdown host',
  stopHostModalMessage: 'This will shutdown your host. Do you want to continue?',
  restartHostModalTitle: 'Restart host',
  restartHostModalMessage: 'This will restart your host. Do you want to continue?',
  restartHostsAgentsModalTitle: 'Restart Host{nHosts, plural, one {} other {s}} agent{nHosts, plural, one {} other {s}}',
  restartHostsAgentsModalMessage: 'Are you sure you want to restart {nHosts} Host{nHosts, plural, one {} other {s}} agent{nHosts, plural, one {} other {s}}?',
  restartHostsModalTitle: 'Restart Host{nHosts, plural, one {} other {s}}',
  restartHostsModalMessage: 'Are you sure you want to restart {nHosts} Host{nHosts, plural, one {} other {s}}?',
  startVmsModalTitle: 'Start VM{vms, plural, one {} other {s}}',
  startVmsModalMessage: 'Are you sure you want to start {vms} VM{vms, plural, one {} other {s}}?',
  stopHostsModalTitle: 'Stop Host{nHosts, plural, one {} other {s}}',
  stopHostsModalMessage: 'Are you sure you want to stop {nHosts} Host{nHosts, plural, one {} other {s}}?',
  stopVmsModalTitle: 'Stop VM{vms, plural, one {} other {s}}',
  stopVmsModalMessage: 'Are you sure you want to stop {vms} VM{vms, plural, one {} other {s}}?',
  restartVmModalTitle: 'Restart VM',
  restartVmModalMessage: 'Are you sure you want to restart {name}?',
  stopVmModalTitle: 'Stop VM',
  stopVmModalMessage: 'Are you sure you want to stop {name}?',
  restartVmsModalTitle: 'Restart VM{vms, plural, one {} other {s}}',
  restartVmsModalMessage: 'Are you sure you want to restart {vms} VM{vms, plural, one {} other {s}}?',
  snapshotVmsModalTitle: 'Snapshot VM{vms, plural, one {} other {s}}',
  snapshotVmsModalMessage: 'Are you sure you want to snapshot {vms} VM{vms, plural, one {} other {s}}?',
  deleteVmModalTitle: 'Delete VM',
  deleteVmsModalTitle: 'Delete VM{vms, plural, one {} other {s}}',
  deleteVmModalMessage: 'Are you sure you want to delete this VM? ALL VM DISKS WILL BE REMOVED',
  deleteVmsModalMessage: 'Are you sure you want to delete {vms} VM{vms, plural, one {} other {s}}? ALL VM DISKS WILL BE REMOVED',
  migrateVmModalTitle: 'Migrate VM',
  migrateVmSelectHost: 'Select a destination host:',
  migrateVmSelectMigrationNetwork: 'Select a migration network:',
  migrateVmSelectSrs: 'For each VDI, select an SR:',
  migrateVmSelectNetworks: 'For each VIF, select a network:',
  migrateVmsSelectSr: 'Select a destination SR:',
  migrateVmsSelectSrIntraPool: 'Select a destination SR for local disks:',
  migrateVmsSelectNetwork: 'Select a network on which to connect each VIF:',
  migrateVmsSmartMapping: 'Smart mapping',
  migrateVmName: 'Name',
  migrateVmSr: 'SR',
  migrateVmVif: 'VIF',
  migrateVmNetwork: 'Network',
  migrateVmNoTargetHost: 'No target host',
  migrateVmNoTargetHostMessage: 'A target host is required to migrate a VM',
  importBackupModalTitle: 'Import a {name} Backup',
  importBackupModalStart: 'Start VM after restore',
  importBackupModalSelectBackup: 'Select your backup…',
  removeAllOrphanedModalWarning: 'Are you sure you want to remove all orphaned VDIs?',
  removeAllLogsModalTitle: 'Remove all logs',
  removeAllLogsModalWarning: 'Are you sure you want to remove all logs?',
  definitiveMessageModal: 'This operation is definitive.',
  existingSrModalTitle: 'Previous SR Usage',
  existingSrModalText: 'This path has been previously used as a Storage by a XenServer host. All data will be lost if you choose to continue the SR creation.',
  existingLunModalTitle: 'Previous LUN Usage',
  existingLunModalText: 'This LUN has been previously used as a Storage by a XenServer host. All data will be lost if you choose to continue the SR creation.',
  alreadyRegisteredModal: 'Replace current registration?',
  alreadyRegisteredModalText: 'Your XO appliance is already registered to {email}, do you want to forget and replace this registration ?',
  trialReadyModal: 'Ready for trial?',
  trialReadyModalText: 'During the trial period, XOA need to have a working internet connection. This limitation does not apply for our paid plans!',

  // ----- Servers -----
  serverHost: 'Host',
  serverUsername: 'Username',
  serverPassword: 'Password',
  serverAction: 'Action',
  serverReadOnly: 'Read Only',

  // ----- Copy VM -----
  copyVm: 'Copy VM',
  copyVmConfirm: 'Are you sure you want to copy this VM to {SR}?',
  copyVmName: 'Name',
  copyVmNamePattern: 'Name pattern',
  copyVmNamePlaceholder: 'If empty: name of the copied VM',
  copyVmNamePatternPlaceholder: 'e.g.: "\\{name\\}_COPY"',
  copyVmSelectSr: 'Select SR',
  copyVmCompress: 'Use compression',
  copyVmsNoTargetSr: 'No target SR',
  copyVmsNoTargetSrMessage: 'A target SR is required to copy a VM',

  // ----- Network -----
  newNetworkCreate: 'Create network',
  newNetworkInterface: 'Interface',
  newNetworkName: 'Name',
  newNetworkDescription: 'Description',
  newNetworkVlan: 'VLAN',
  newNetworkDefaultVlan: 'No VLAN if empty',
  newNetworkMtu: 'MTU',
  newNetworkDefaultMtu: 'Default: 1500',
  deleteNetwork: 'Delete network',
  deleteNetworkConfirm: 'Are you sure you want to delete this network?',

  // ----- About View -----
  xenOrchestra: 'Xen Orchestra',
  xenOrchestraServer: 'server',
  xenOrchestraWeb: 'web client',
  noProSupport: 'No pro support provided!',
  noProductionUse: 'Use in production at your own risks',
  downloadXoa: 'You can download our turnkey appliance at',
  bugTracker: 'Bug Tracker',
  bugTrackerText: 'Issues? Report it!',
  community: 'Community',
  communityText: 'Join our community forum!',
  freeTrial: 'Free Trial for Premium Edition!',
  freeTrialNow: 'Request your trial now!',
  issues: 'Any issue?',
  issuesText: 'Problem? Contact us!',
  documentation: 'Documentation',
  documentationText: 'Read our official doc',
  proSupportIncluded: 'Pro support included',
  xoAccount: 'Acces your XO Account',
  openTicket: 'Report a problem',
  openTicketText: 'Problem? Open a ticket !',

  // ----- Upgrade Panel -----
  upgradeNeeded: 'Upgrade needed',
  upgradeNow: 'Upgrade now!',
  or: 'Or',
  tryIt: 'Try it for free!',
  availableIn: 'This feature is available starting from {plan} Edition',

  // ----- Updates View -----
  updateTitle: 'Updates',
  registration: 'Registration',
  trial: 'Trial',
  settings: 'Settings',
  update: 'Update',
  upgrade: 'Upgrade',
  noUpdaterCommunity: 'No updater available for Community Edition',
  noUpdaterSubscribe: 'Please consider subscribe and try it with all features for free during 15 days on',
  noUpdaterWarning: 'Manual update could break your current installation due to dependencies issues, do it with caution',
  currentVersion: 'Current version:',
  register: 'Register',
  trialRegistration: 'Please, take time to register in order to enjoy your trial.',
  trialStartButton: 'Start trial',
  trialAvailableUntil: 'You can use a trial version until {date, date, medium}. Upgrade your appliance to get it.',
  trialConsumed: 'Your trial has been ended. Contact us or downgrade to Free version',
  trialLocked: 'Your xoa-updater service appears to be down. Your XOA cannot run fully without reaching this service.',
  noUpdateInfo: 'No update information available',
  waitingUpdateInfo: 'Update information may be available',
  upToDate: 'Your XOA is up-to-date',
  mustUpgrade: 'You need to update your XOA (new version is available)',
  registerNeeded: 'Your XOA is not registered for updates',
  updaterError: 'Can\'t fetch update information',
  promptUpgradeReloadTitle: 'Upgrade successful',
  promptUpgradeReloadMessage: 'Your XOA has successfully upgraded, and your browser must reload the application. Do you want to reload now ?',

  // ----- OS Disclaimer -----
  disclaimerTitle: 'Xen Orchestra from the sources',
  disclaimerText1: 'You are using XO from the sources! That\'s great for a personal/non-profit usage.',
  disclaimerText2: 'If you are a company, it\'s better to use it with our appliance + pro support included:',
  disclaimerText3: 'This version is not bundled with any support nor updates. Use it with caution for critical tasks.',

  // ----- PIF -----
  connectPif: 'Connect PIF',
  connectPifConfirm: 'Are you sure you want to connect this PIF?',
  disconnectPif: 'Disconnect PIF',
  disconnectPifConfirm: 'Are you sure you want to disconnect this PIF?',
  deletePif: 'Delete PIF',
  deletePifConfirm: 'Are you sure you want to delete this PIF?',

  // ----- User -----
  username: 'Username',
  password: 'Password',
  language: 'Language',
  oldPasswordPlaceholder: 'Old password',
  newPasswordPlaceholder: 'New password',
  confirmPasswordPlaceholder: 'Confirm new password',
  confirmationPasswordError: 'Confirmation password incorrect',
  confirmationPasswordErrorBody: 'Password does not match the confirm password.',
  pwdChangeSuccess: 'Password changed',
  pwdChangeSuccessBody: 'Your password has been successfully changed.',
  pwdChangeError: 'Incorrect password',
  pwdChangeErrorBody: 'The old password provided is incorrect. Your password has not been changed.',
  changePasswordOk: 'OK',

  // ----- Usage -----
  others: 'Others'
}
forEach(messages, function (message, id) {
  if (isString(message)) {
    messages[id] = {
      id,
      defaultMessage: message
    }
  } else if (!message.id) {
    message.id = id
  }
})

module.exports = messages
