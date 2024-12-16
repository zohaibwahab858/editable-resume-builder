// Listen for form submission
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form elements
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');
    const imageInput = document.getElementById('imageInput');

    // Validate if all required fields are present
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Handle profile image upload
        const imageFile = imageInput.files ? imageInput.files[0] : null; // Get the selected image file
        const reader = new FileReader();

        // Once the image is loaded, update the profile image element
        reader.onloadend = function () {
            const profileImageElement = document.getElementById('profileImage');

            if (profileImageElement) {
                profileImageElement.src = reader.result; // Set the image source to the uploaded image
            }
        };

        // If an image file is selected, read it as a Data URL (base64 encoded)
        if (imageFile) {
            reader.readAsDataURL(imageFile);
        }

        // Create the resume output HTML
        const resumeOutput = `
            <h2>Resume</h2>
            <img id="profileImage" src="${imageFile ? reader.result : ''}" alt="Profile Image" />
            <p><strong>Name:</strong> <span class="editable" contenteditable="true">${name}</span></p>
            <p><strong>Email:</strong> <span class="editable" contenteditable="true">${email}</span></p>
            <p><strong>Phone:</strong> <span class="editable" contenteditable="true">${phone}</span></p>
            <h3>Education</h3>
            <p><span class="editable" contenteditable="true">${education}</span></p>
            <h3>Experience</h3>
            <p><span class="editable" contenteditable="true">${experience}</span></p>
            <h3>Skills</h3>
            <p><span class="editable" contenteditable="true">${skills}</span></p>
        `;

        // Get the resume output element and set its inner HTML
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
    } else {
        console.error('One or more form elements are missing');
    }
});