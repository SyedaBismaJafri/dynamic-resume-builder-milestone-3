var _a;
//listing element
(_a = document.getElementById('resume form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    //type assertion
    var nameElement = document.getElementById('name');
    var phoneElement = document.getElementById('phone');
    var emailElement = document.getElementById('email');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && phoneElement && emailElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var phone = nameElement.value;
        var email = nameElement.value;
        var education = nameElement.value;
        var experience = nameElement.value;
        var skills = nameElement.value;
        //create resume output
        var resumeOutput = "\n   <h2>Resume</h2>\n   <p><strong>Name:</strong> ".concat(name_1, " </p>\n   <p><strong>Email:</strong> ").concat(email, " </p>\n   <p><strong>Phone Number:</strong> ").concat(phone, " </p>\n\n   <h3>Education</h3>\n   <p>").concat(education, "</p>\n\n   <h3>Experience</h3>\n   <p>").concat(experience, "</p>\n\n   <h3>Skills</h3>\n   <p>").concat(skills, "</p>\n\n   ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output element is missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
