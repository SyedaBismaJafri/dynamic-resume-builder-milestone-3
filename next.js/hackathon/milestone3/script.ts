//listing element
document.getElementById('resume form')?.addEventListener('submit', function(event) {

    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if (nameElement && phoneElement && emailElement && educationElement && experienceElement && skillsElement ){
         const name = nameElement.value;
         const phone = nameElement.value;
         const email = nameElement.value ;
         const education = nameElement.value;
         const experience = nameElement.value;
         const skills = nameElement.value;


   //create resume output
   const resumeOutput = `
   <h2>Resume</h2>
   <p><strong>Name:</strong> ${name} </p>
   <p><strong>Email:</strong> ${email} </p>
   <p><strong>Phone Number:</strong> ${phone} </p>

   <h3>Education</h3>
   <p>${education}</p>

   <h3>Experience</h3>
   <p>${experience}</p>

   <h3>Skills</h3>
   <p>${skills}</p>

   `;

  const resumeOutputElement = document.getElementById('resumeOutput')
  if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
  } else {
    console.error('the resume output element is missing')
  } 
} else {
    console.error ('one or more output elements are missing')
  }  
})
