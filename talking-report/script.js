// Model report
const modelReport = "The weekly Talk organized by the AWAKE Sociology Association on September 13 2022 was a highly informative and engaging session. The topic of discussion was \"The Drunkenness And The Younger Generation\", and it was moderated by Dilshana P . It is inaugurated by Nishana E P (Assistant Professor Department of Sociology) and felicitated by Vasil C K ( HOD Department of Sociology) and Jagannathan P R (Association Co-ordinator Department of Sociology). the 2nd and 3rd year sociology students who shared their thoughts and opinions about the topic.";

// Get form elements
const form = document.querySelector('form');
const topicInput = document.getElementById('topic');
const dateInput = document.getElementById('date');
const moderatorInput = document.getElementById('moderator');
const inauguratedByInput = document.getElementById('inauguratedBy');
const felicitatedBy1Input = document.getElementById('felicitatedBy1');
const felicitatedBy2Input = document.getElementById('felicitatedBy2');
const reportDiv = document.getElementById('report');

// Submit event listener
form.addEventListener('submit', function(event) {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Get input values
  const topic = topicInput.value;
  const date = dateInput.value;
  const moderator = moderatorInput.value;
  const inauguratedBy = inauguratedByInput.value;
  const felicitatedBy1 = felicitatedBy1Input.value;
  const felicitatedBy2 = felicitatedBy2Input.value;
  
  // Build new report from input values and model report
  const newReport = `The weekly Talk organized by the AWAKE Sociology Association on ${date}. and it was a highly informative and engaging session. The topic of discussion was "${topic}", and it was moderated by ${moderator}. It was inaugurated by ${inauguratedBy}  and felicitated by ${felicitatedBy1} and ${felicitatedBy2} . the 2nd and 3rd year sociology students who shared their thoughts and opinions about the topic.`;
  
  // Update report display
  reportDiv.textContent = newReport;
  
  // Clear input values
  topicInput.value = '';
  moderatorInput.value = '';
  inauguratedByInput.value = '';
  felicitatedBy1Input.value = '';
  felicitatedBy2Input.value = '';
});
