// Dummy array to store uploaded materials
let materials = [];

// Function to handle file upload
function handleFileUpload(event) {
    event.preventDefault();
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (file) {
        materials.push(file);
        updateMaterialList();
        fileInput.value = ''; // Reset file input
    }
}

// Function to update the material list
function updateMaterialList() {
    const materialList = document.getElementById('material-list');
    materialList.innerHTML = ''; // Clear previous list

    materials.forEach((file, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', URL.createObjectURL(file));
        link.setAttribute('target', '_blank');
        link.textContent = `Material ${index + 1}`;
        listItem.appendChild(link);
        materialList.appendChild(listItem);
    });
}

// Event listener for form submission
const form = document.getElementById('upload-form');
form.addEventListener('submit', handleFileUpload);
