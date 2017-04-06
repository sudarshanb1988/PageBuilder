export default {
  displayName: 'Button',
  data: {
    children: [],
    component: 'button',
    settings: {},
  },
  settings: {
    general: [
      {
        component: 'input',
        label: 'Custom class',
        key: 'className',
        required: true
      },
      {
        component: 'input',
        label: 'Label',
        key: 'label',
        required: true
      }
    ],
    advanced_settings: [
      {
        component: 'input',
        label: 'Analytics prefix',
        key: 'analytics_settings',
        help_text: 'Prefix for analytics ID for tracking purposes.'
      }
    ]
  }
};
