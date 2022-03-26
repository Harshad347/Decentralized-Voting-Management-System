function VoterRegForm() {
  document.getElementById("voterForm").style.display = "block";
  document.getElementById("voterContent").style.display = "none";
  document.getElementById("candidateForm").style.display = "none";
  document.getElementById("candidateContent").style.display = "none";
  document.getElementById("voteForm").style.display = "none";
  document.getElementById("authorizeForm").style.display = "none";
}

function ShowVoters() {
  document.getElementById("voterForm").style.display = "none";
  document.getElementById("voterContent").style.display = "block";
  document.getElementById("candidateForm").style.display = "none";
  document.getElementById("candidateContent").style.display = "none";
  document.getElementById("voteForm").style.display = "none";
  document.getElementById("authorizeForm").style.display = "none";
}

function CandidateRegForm() {
  document.getElementById("voterForm").style.display = "none";
  document.getElementById("voterContent").style.display = "none";
  document.getElementById("candidateForm").style.display = "block";
  document.getElementById("candidateContent").style.display = "none";
  document.getElementById("voteForm").style.display = "none";
  document.getElementById("authorizeForm").style.display = "none";
}

function ShowCandidates() {
  document.getElementById("voterForm").style.display = "none";
  document.getElementById("voterContent").style.display = "none";
  document.getElementById("candidateForm").style.display = "none";
  document.getElementById("candidateContent").style.display = "block";
  document.getElementById("voteForm").style.display = "none";
  document.getElementById("authorizeForm").style.display = "none";
}

function VoteNow() {
  document.getElementById("candidateForm").style.display = "none";
  document.getElementById("voterForm").style.display = "none";
  document.getElementById("candidateContent").style.display = "block";
  document.getElementById("voterContent").style.display = "none";
  document.getElementById("voteForm").style.display = "block";
  document.getElementById("authorizeForm").style.display = "none";
}

function AuthorizeVoter() {
  document.getElementById("candidateForm").style.display = "none";
  document.getElementById("voterForm").style.display = "none";
  document.getElementById("candidateContent").style.display = "none";
  document.getElementById("voterContent").style.display = "block";
  document.getElementById("voteForm").style.display = "none";
  document.getElementById("authorizeForm").style.display = "block";
}
