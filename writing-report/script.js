const modelReport = "AWAKE Sociology Celebrated “International Day for the Preservation of the Ozone Layer” from September 15, 2022, with a write-up by Arshida CT (2nd-year Sociology). The whole students shared the write-up on social media. The department gets good feedback from the college.";

function generateReport(title, date, writer, department) {
  const newReport = `${department} Celebrated " ${title} " on ${date}, with a write-up by ${writer}. The whole students shared the write-up on social media. The department gets good feedback from the college.`;
  return newReport;
}

const generateReportBtn = document.getElementById("generate-report");
const reportOutput = document.getElementById("report-output");

generateReportBtn.addEventListener("click", function() {
  const titleInput = document.getElementById("title");
  const dateInput = document.getElementById("date");
  const writerInput = document.getElementById("writer");
  const departmentInput = document.getElementById("department");
  // const feedbackInput = document.getElementById("feedback");

  const titleValue = titleInput.value.trim();
  const dateValue = dateInput.value.trim();
  const writerValue = writerInput.value.trim();
  const departmentValue = departmentInput.value.trim();
  // const feedbackValue = feedbackInput.value.trim();

  if (titleValue === "" || dateValue === "" || writerValue === "" || departmentValue === "" ) {
    reportOutput.innerText = "Please fill in all fields";
    return;
  }

  const newProgramReport = generateReport(titleValue, dateValue, writerValue, departmentValue);
  reportOutput.innerText = newProgramReport;
});
