pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract Election {
    struct Voter {
        string name;
        uint256 voterId;
        address accountAddress;
        bool voted;
        bool exists;
    }

    struct Candidate {
        string name;
        string party;
        uint256 noOfVotes;
        bool exists;
    }

    mapping(uint256 => Voter) public voters;
    uint256 public voterCount = 0;

    mapping(uint256 => Candidate) public candidates;
    uint256 public candidateCount = 0;

    uint256 public electionState;

    address adminAddress;

    constructor() public {
        adminAddress = msg.sender;
    }

    modifier onlyOwner() {
        require(
            msg.sender == adminAddress,
            "You dont have rights to perform ADMIN operations !"
        );
        _;
    }

    function startRegistartionPhase() public onlyOwner {
        electionState = 1;
    }

    function startVotingPhase() public onlyOwner {
        electionState = 2;
    }

    function endVotingPhase() public onlyOwner {
        electionState = 3;
    }

    function registerVoter(string memory _name, uint256 _voterId)
        public
        returns (uint256)
    {
        require(electionState == 1, "This is not Registration Phase.");
        address _accountAddress = msg.sender;
        require(
            _accountAddress != adminAddress,
            "You cannot use owner address to register."
        );
        require(
            checkIfAddressExist(_accountAddress),
            "This Account Address is already registered"
        );
        require(
            checkIfVoterIdExist(_voterId),
            "This Voter Id is already registered."
        );
        voterCount++;
        voters[voterCount] = Voter(
            _name,
            _voterId,
            _accountAddress,
            false,
            true
        );
        emit VoterCreated(_name, _voterId, _accountAddress);
    }

    function registerCandidate(string memory _name, string memory _party)
        public
        onlyOwner
        returns (uint256)
    {
        require(electionState == 1, "This is not Registration Phase.");
        require(checkIfPartyExist(_party), "This Party is already registered.");
        candidateCount++;
        candidates[candidateCount] = Candidate(_name, _party, 0, true);
        emit CandidateCreated(_name, _party);
    }

    function vote(uint256 _voterId, uint256 _candidateId) public {
        require(electionState == 2, "This is not Voting Phase.");
        require(
            !checkIfVoterIdExist(_voterId),
            "You are not registered to vote."
        );
        require(
            _candidateId > 0 && _candidateId <= candidateCount,
            "Candidate selection is invalid."
        );
        require(
            voters[_voterId].accountAddress == msg.sender,
            "Please vote with registered Account Address."
        );
        require(!voters[_voterId].voted, "You have already Voted.");
        candidates[_candidateId].noOfVotes++;
        voters[_voterId].voted = true;
        emit VoterVoted(_voterId, _candidateId);
    }

    function checkIfVoterIdExist(uint256 _inputVoterId) private returns (bool) {
        for (uint256 i = 1; i <= voterCount; i++) {
            uint256 idVoter = voters[i].voterId;
            if (
                keccak256(abi.encodePacked(idVoter)) ==
                keccak256(abi.encodePacked(_inputVoterId))
            ) {
                return false;
                break;
            }
        }
        return true;
    }

    function checkIfAddressExist(address _inputAccountAddress)
        private
        returns (bool)
    {
        for (uint256 i = 1; i <= voterCount; i++) {
            address addressAccount = voters[i].accountAddress;
            if (
                keccak256(abi.encodePacked(addressAccount)) ==
                keccak256(abi.encodePacked(_inputAccountAddress))
            ) {
                return false;
                break;
            }
        }
        return true;
    }

    function checkIfPartyExist(string memory _inputParty)
        private
        returns (bool)
    {
        for (uint256 i = 1; i <= candidateCount; i++) {
            string memory partyName = candidates[i].party;
            if (
                keccak256(abi.encodePacked(partyName)) ==
                keccak256(abi.encodePacked(_inputParty))
            ) {
                return false;
                break;
            }
        }
        return true;
    }

    event VoterCreated(string name, uint256 voterId, address accountAddress);
    event CandidateCreated(string name, string party);
    event VoterVoted(uint256 voterId, uint256 candidateId);
}
}
