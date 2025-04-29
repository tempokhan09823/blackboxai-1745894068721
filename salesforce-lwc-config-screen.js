import { LightningElement, track } from 'lwc';

export default class SalesforceLwcConfigScreen extends LightningElement {
  @track pdfUrl = null;
  @track placedElements = [];

  formElements = [
    { name: 'text', label: 'Text Box' },
    { name: 'textarea', label: 'Text Area' },
    { name: 'number', label: 'Number' },
    { name: 'currency', label: 'Currency' },
    { name: 'dropdown', label: 'Dropdown' },
    { name: 'radio', label: 'Radio Group' },
    { name: 'checkbox', label: 'Checkbox' },
    { name: 'checkboxgroup', label: 'Checkbox Group' },
    { name: 'date', label: 'Date Picker' },
    { name: 'signature', label: 'Signature Field' }
  ];

  dragElement = null;

  handleUploadFinished(event) {
    const uploadedFiles = event.detail.files;
    if (uploadedFiles.length > 0) {
      // For demo, use local file URL (in real Salesforce, file handling differs)
      this.pdfUrl = URL.createObjectURL(uploadedFiles[0]);
      this.placedElements = [];
    }
  }

  handleDragStart(event) {
    this.dragElement = event.target.textContent;
    event.dataTransfer.setData('text/plain', this.dragElement);
  }

  handleDragOver(event) {
    event.preventDefault();
  }

  handleDrop(event) {
    event.preventDefault();
    const elementType = event.dataTransfer.getData('text/plain');
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newElement = {
      id: Date.now(),
      label: elementType,
      style: `position: absolute; left: ${x}px; top: ${y}px; background: #f3f6f9; border: 1px solid #d8dde6; padding: 4px 8px; border-radius: 4px; cursor: move;`
    };

    this.placedElements = [...this.placedElements, newElement];
  }

  handleElementMouseDown(event) {
    // Placeholder for drag move functionality of placed elements
  }

  handleSave() {
    // Placeholder for saving configuration logic
    alert('Configuration saved (functionality to be implemented)');
  }
}
