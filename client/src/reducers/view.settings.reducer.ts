import { ActionTypes } from '../constants';
import { ViewSettings, ViewSettingsAction, ViewSettingsState } from '../interfaces/view.settings.interface';

const updateViewSettingsAction = (data: ViewSettings): ViewSettingsAction => {
  return {
    type: ActionTypes.UPDATE_VIEW_SETTINGS,
    state: {
      loading: true,
      error: false,
      data,
    },
  };
};

export { updateViewSettingsAction };

const viewSettingsInitState: ViewSettingsState = {
  loading: false,
  error: false,
  data: {
    notificationsCount: 5,
  },
};

const viewSettingsReducer = (
  state: ViewSettingsState = viewSettingsInitState,
  action: ViewSettingsAction,
): ViewSettingsState => {
  switch (action.type) {
    case ActionTypes.UPDATE_VIEW_SETTINGS:
      return { ...state, ...action.state };
    default:
      return { ...state };
  }
};

export default viewSettingsReducer;
