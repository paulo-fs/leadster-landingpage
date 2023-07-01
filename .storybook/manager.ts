import { addons } from '@storybook/manager-api'

addons.setConfig({
  isFullScreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: 'storybook/actions/panel',
  initialActive: 'addons',
  toolbar: {
    addons: { hidden: false },
  },
})
