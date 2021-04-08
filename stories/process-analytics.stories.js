import { createBpmnVisu } from './process-analytics';

export default {
  title: 'Example/createBpmnVisu',
  argTypes: {
    bpmnContent: { control: 'text' },
  },
};

const Template = ({ label, ...args }) => {
  return createBpmnVisu({});
};

export const Default = Template.bind({});
Default.args = {
  bpmnContent: ''
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
