export default {
  displayName: 'Column',
  contents: ['button', 'image'],
  data: {
    children: [],
    component: 'column',
    settings: {},
  },
  settings: {
    general: [
      {
        component: 'select',
        label: 'Computer',
        key: 'computer',
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
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
        component: 'input',
        label: 'Class Name',
        key: 'className',
      },
      {
        component: 'select',
        label: 'Large Screen',
        key: 'largeScreen',
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        placeholder: 'Select a value'
      },
      {
        component: 'select',
        label: 'Mobile',
        key: 'mobile',
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        placeholder: 'Select a value'
      },
      {
        component: 'select',
        label: 'Wide Screen',
        key: 'widescreen',
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        placeholder: 'Select a value'
      },
      {
        component: 'select',
        label: 'Width',
        key: 'width',
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        placeholder: 'Select a value'
      },
      {
        component: 'select',
        label: 'Tablet',
        key: 'tablet',
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        placeholder: 'Select a value'
      },
      {
        component: 'select',
        label: 'Only',
        key: 'only',
        options: ['computer', 'largeScreen', 'mobile', 'tablet', 'widescreen'],
        placeholder: 'Select a value'
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
