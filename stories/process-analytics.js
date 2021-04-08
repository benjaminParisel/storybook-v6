import { BpmnVisualization } from 'bpmn-visualization';

export const createBpmnVisu = ({
  bpmnContent,
}) => {
  const bpmnContainer = document.createElement('div');
  bpmnContainer.id = 'bpmn-container';

  // // initialize BpmnVisualization and load the diagram

  const bpmnVisualization = new BpmnVisualization({ container: 'bpmn-container'});
  bpmnVisualization.load(bpmnContent);

  return bpmnContainer;
};
