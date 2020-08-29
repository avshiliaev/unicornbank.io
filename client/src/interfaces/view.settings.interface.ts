// General

export interface ViewSettings {
  notificationsCount: number
}

// View Reducer State
export interface ViewSettingsState {
  loading: boolean
  error: boolean
  data?: ViewSettings
}

export interface ViewSettingsAction {
  type: string
  params?: any
  state: ViewSettingsState
}
