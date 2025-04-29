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
  dragStartX = 0;
  dragStartY = 0;
  elementStartX = 0;
  elementStartY = 0;
  isDragging = false;

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
    const id = parseInt(event.currentTarget.getAttribute('data-id'), 10);
    this.dragElement = this.placedElements.find(el => el.id === id);
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    const leftMatch = this.dragElement.style.match(/left: (\d+)px/);
    const topMatch = this.dragElement.style.match(/top: (\d+)px/);
    this.elementStartX = leftMatch ? parseInt(leftMatch[1], 10) : 0;
    this.elementStartY = topMatch ? parseInt(topMatch[1], 10) : 0;
    this.isDragging = true;
    window.addEventListener('mousemove', this.handleElementMouseMove.bind(this));
    window.addEventListener('mouseup', this.handleElementMouseUp.bind(this));
  }

  handleElementMouseMove(event) {
    if (!this.isDragging) return;
    const deltaX = event.clientX - this.dragStartX;
    const deltaY = event.clientY - this.dragStartY;
    const newX = this.elementStartX + deltaX;
    const newY = this.elementStartY + deltaY;
    this.dragElement.style = `position: absolute; left: ${newX}px; top: ${newY}px; background: #f3f6f9; border: 1px solid #d8dde6; padding: 4px 8px; border-radius: 4px; cursor: move;`;
    this.placedElements = this.placedElements.map(el => el.id === this.dragElement.id ? this.dragElement : el);
  }

  handleElementMouseUp(event) {
    this.isDragging = false;
    window.removeEventListener('mousemove', this.handleElementMouseMove.bind(this));
    window.removeEventListener('mouseup', this.handleElementMouseUp.bind(this));
  }

  handleSave() {
    // Placeholder for saving configuration logic
    console.log('Saving configuration:', this.placedElements);
    alert('Configuration saved (functionality to be implemented)');
  }
}
