import { LightningElement, track } from 'lwc';

export default class SalesforceLwcCustomerScreen extends LightningElement {
  @track pdfUrl = null;
  @track formFields = [];

  connectedCallback() {
    // For demo, set a sample PDF URL and form fields
    this.pdfUrl = 'https://example.com/sample.pdf'; // Replace with actual document URL
    this.formFields = [
      {
        id: 1,
        label: 'Full Name',
        type: 'text',
        value: '',
        isInput: true,
        style: 'position: absolute; left: 50px; top: 100px; width: 200px;'
      },
      {
        id: 2,
        label: 'Date of Birth',
        type: 'date',
        value: '',
        isInput: true,
        style: 'position: absolute; left: 50px; top: 150px; width: 200px;'
      },
      {
        id: 3,
        label: 'Signature',
        type: 'text',
        value: '',
        isInput: true,
        style: 'position: absolute; left: 50px; top: 200px; width: 200px;'
      }
    ];
  }

  handleFieldChange(event) {
    const fieldId = parseInt(event.target.dataset.id, 10);
    const fieldIndex = this.formFields.findIndex(f => f.id === fieldId);
    if (fieldIndex !== -1) {
      this.formFields[fieldIndex].value = event.target.value;
      this.formFields = [...this.formFields];
    }
  }

  handleSubmit() {
    // Placeholder for form submission logic
    alert('Form submitted (functionality to be implemented)');
  }
}
