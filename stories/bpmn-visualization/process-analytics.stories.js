import { createBpmnVisu } from './process-analytics';
import {DEFAULT_VANILLA_CODESANDBOX, previewTemplate} from "storybook-addon-preview";

export default {
  title: 'Process-analytics/Bpmn-visualisation',
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
Overlays.parameters = {
    preview:  [
    {
        tab: "Vanilla",
        template: previewTemplate`            
import {BpmnVisualization} from 'bpmn-visualization';

// // initialize BpmnVisualization and load the diagram
const bpmnVisualization = new BpmnVisualization({container: 'bpmn-container'});
const content = 'yourBPMNContentFile';

bpmnVisualization.load(content);

const overlay = {position: ${"positionOverlay"}, label: ${"labelOverlay"}};
bpmnVisualization.bpmnElementsRegistry.addOverlays('Activity_1', overlay);
`,
        language: "js",
        copy: true,
        codesandbox: DEFAULT_VANILLA_CODESANDBOX(["@egjs/infinitegrid"]),
    },
    {
        tab: "HTML",
        template: "<div id='bpmn-container'></div>",
    },
    {
        tab: "Css",
        template: `
.bpmn-container {
  /* use absolute values for height to ensure that the vertical diagram is not fully displayed when the page is opened. */
  /* width is relative to the window size */
  height: 650px;
  width: 100%;
  margin-top: 1.5em;
  border-style: solid;
  border-color: #B0B0B0;
  border-width: 1px;
  /* This ensures that the parts of the diagram outside of the container are not displayed. */
  ovaerflow: hidden;
  background-color: white;
}`,
    },
]
};
