param appName string
param appSettings object
param currentAppSettings object

resource webApp 'Microsoft.Web/sites@2022-03-01' existing = {
  name: appName
}

resource siteconfig 'Microsoft.Web/sites/config@2022-03-01' = {
  parent: webApp
  name: 'appsettings'
  properties: union(currentAppSettings, appSettings)
}
