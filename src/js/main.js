function VoterRegForm() {
  document.getElementById("voterForm").style.display = "block";
  document.getElementById("candidateForm").style.display = "none";
  document.getElementById("voteForm").style.display = "none";
  document.getElementById("authorizeForm").style.display = "none";
  document.getElementById("electionStateForm1").style.display = "none";
  document.getElementById("electionStateForm2").style.display = "none";
  document.getElementById("electionResult").style.display = "none";
}

function CandidateRegForm() {
  document.getElementById("voterForm").style.display = "none";
  document.getElementById("candidateForm").style.display = "block";
  document.getElementById("voteForm").style.display = "none";
  document.getElementById("authorizeForm").style.display = "none";
  document.getElementById("electionStateForm1").style.display = "none";
  document.getElementById("electionStateForm2").style.display = "none";
  document.getElementById("electionResult").style.display = "none";
}

function VoteNow() {
  document.getElementById("candidateForm").style.display = "none";
  document.getElementById("voterForm").style.display = "none";
  document.getElementById("voteForm").style.display = "block";
  document.getElementById("authorizeForm").style.display = "none";
  document.getElementById("electionStateForm1").style.display = "none";
  document.getElementById("electionStateForm2").style.display = "none";
  document.getElementById("electionResult").style.display = "none";
}

function AuthorizeVoter() {
  document.getElementById("candidateForm").style.display = "none";
  document.getElementById("voterForm").style.display = "none";
  document.getElementById("voteForm").style.display = "none";
  document.getElementById("authorizeForm").style.display = "block";
  document.getElementById("electionStateForm1").style.display = "none";
  document.getElementById("electionStateForm2").style.display = "none";
  document.getElementById("electionResult").style.display = "none";
}

function AboutElection() {
  document.getElementById("candidateForm").style.display = "none";
  document.getElementById("voterForm").style.display = "none";
  document.getElementById("voteForm").style.display = "none";
  document.getElementById("authorizeForm").style.display = "none";
  document.getElementById("electionStateForm1").style.display = "block";
  document.getElementById("electionStateForm2").style.display = "none";
  document.getElementById("electionResult").style.display = "none";
}

function ChangeThePhase() {
  document.getElementById("candidateForm").style.display = "none";
  document.getElementById("voterForm").style.display = "none";
  document.getElementById("voteForm").style.display = "none";
  document.getElementById("authorizeForm").style.display = "none";
  document.getElementById("electionStateForm1").style.display = "none";
  document.getElementById("electionStateForm2").style.display = "block";
  document.getElementById("electionResult").style.display = "none";
}

function SeeResults() {
  document.getElementById("candidateForm").style.display = "none";
  document.getElementById("voterForm").style.display = "none";
  document.getElementById("voteForm").style.display = "none";
  document.getElementById("authorizeForm").style.display = "none";
  document.getElementById("electionStateForm1").style.display = "none";
  document.getElementById("electionStateForm2").style.display = "none";
  document.getElementById("electionResult").style.display = "block";
}
