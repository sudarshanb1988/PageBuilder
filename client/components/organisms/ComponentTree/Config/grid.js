export default {
  displayName: 'Grid',
  contents: ['row', 'column'],
  data: {
    children: [],
    component: 'grid',
    settings: {},
  },
  settings: {
    general: [
      {
        component: 'checkbox',
        label: 'Relaxed',
        key: 'relaxed',
      },
      {
        component: 'select',
        label: 'Celled',
        key: 'celled',
        options: ['globally', 'internally'],
        placeholder: 'Select a value'
      },
      {
        component: 'select',
        label: 'Reversed',
        key: 'reversed',
        options: ['computer', 'computer-vertically', 'mobile', 'mobile-vertically', 'tablet', 'tablet-vertically'],
        placeholder: 'Select a value'
      },
      {
        component: 'checkbox',
        label: 'Centered',
        key: 'centered',
      },
      {
        component: 'checkbox',
        label: 'Streched',
        key: 'streched',
      },
      {
        component: 'checkbox',
        label: 'Container',
        key: 'container',
      },
      {
        component: 'input',
        label: 'Class Name',
        key: 'className',
      },
      {
        component: 'select',
        label: 'Columns',
        key: 'columns',
        options: ['equals', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        placeholder: 'Select a value'
      },
      {
        component: 'select',
        label: 'Divided',
        key: 'divided',
        options: ['horizontally', 'vertically'],
        placeholder: 'Select a value'
      },
      {
        component: 'select',
        label: 'Padded',
        key: 'padded',
        options: ['horizontally', 'vertically'],
        placeholder: 'Select a value'
      },
      {
        component: 'checkbox',
        label: 'Stackable',
        key: 'stackable',
      },
      {
        component: 'select',
        label: 'Text Align',
        key: 'textAlgin',
        options: ['left', 'center', 'right', 'justified'],
        placeholder: 'Select a value'
      },
      {
        component: 'select',
        label: 'Vertical Align',
        key: 'verticalAlign',
        options: ['bottom', 'middle', 'top'],
        placeholder: 'Select a value'
      },
    ]
  }
};
