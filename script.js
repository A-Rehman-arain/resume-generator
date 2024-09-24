function handleFormSubmit(event) {
  event.preventDefault();

  const nameElement = document.getElementById("name");
  const emailElement = document.getElementById("email");
  const phoneElement = document.getElementById("phone");
  const educationElement = document.getElementById("education");
  const experienceElement = document.getElementById("experience");
  const skillsElement = document.getElementById("skills");
  const achievementsElement = document.getElementById("achievements");
  const profilePictureInput = document.getElementById("profilepicture");
  const resumeOutput = document.getElementById("resumeOutput");

  if (
    nameElement &&
    emailElement &&
    phoneElement &&
    educationElement &&
    experienceElement &&
    skillsElement &&
    achievementsElement &&
    profilePictureInput &&
    resumeOutput
  ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const achievements = achievementsElement.value;

    const profilePictureFile = profilePictureInput.files[0];
    let profilePictureUrl = "";
    if (profilePictureFile) {
      profilePictureUrl = URL.createObjectURL(profilePictureFile);
    }

    resumeOutput.innerHTML = `
    ${
      profilePictureUrl
        ? `<img src="${profilePictureUrl}" alt="Profile Picture" class="profilePicture" />`
        : ""
    }
    <h2>${name}</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    <h3>Achievements</h3>
    <p>${achievements}</p>
`;

    document.getElementById("Resumeform").style.display = "none";
    document.getElementById("editResume").style.display = "block";
    document.getElementById("downloadResume").style.display = "block";

    document.getElementById("editResume").addEventListener("click", () => {
      document.getElementById("Resumeform").style.display = "block";
      resumeOutput.innerHTML = "";
      document.getElementById("editResume").style.display = "none";
      document.getElementById("downloadResume").style.display = "none";
    });

    document.getElementById("downloadResume").addEventListener("click", () => {
      html2pdf().from(resumeOutput).save();
    });
  }
}

document
  .getElementById("Resumeform")
  .addEventListener("submit", handleFormSubmit);
