import { createBpmnVisu } from './process-analytics';

export default {
  title: 'Example/Bpmn-visualisation',
  argTypes: {
    labelOverlay: { control: 'text' },
    positionOverlay:
        { control: { type: 'select', options: ["top-left", "top-right", "top-center", "bottom-left", "bottom-right", "bottom-center", "middle-left", "middle-right"] }},
  },
};

const Template = ({ labelOverlay, ...args }) => {
  return createBpmnVisu({ labelOverlay, ...args });
};

export const Default = Template.bind({});

export const Overlays = Template.bind({labelOverlay:'456'});
Overlays.args = {
  labelOverlay: '2568',
  positionOverlay : 'top-right'
};
