// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract ContractAuditor {
    struct AuditFinding {
        string category;
        string description;
        uint8 severity; // 1: Info, 2: Low, 3: Medium, 4: High
        bool isResolved;
        uint256 timestamp;
    }

    struct AuditResult {
        address contractAddress;
        uint256 timestamp;
        bool isPassed;
        uint256 highSeverityCount;
        uint256 mediumSeverityCount;
        uint256 lowSeverityCount;
        uint256[] findingIds;
        address auditor;
    }

    // Mapping from contract address to audit results
    mapping(address => AuditResult[]) public contractAudits;
    AuditFinding[] public findings;
    // Mapping to track if a contract is currently verified
    mapping(address => bool) public verifiedContracts;
    
    event AuditCompleted(address indexed contractAddress, bool isPassed, uint256 timestamp);
    event FindingAdded(uint256 indexed findingId, address indexed contractAddress, string category, uint8 severity);
    event FindingResolved(uint256 indexed findingId, address indexed contractAddress);
    
    // Access control
    address public owner;
    mapping(address => bool) public authorizedAuditors;
    
    constructor() {
        owner = msg.sender;
        authorizedAuditors[msg.sender] = true;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    modifier onlyAuditor() {
        require(authorizedAuditors[msg.sender], "Only authorized auditors can call this function");
        _;
    }

    function addAuditor(address _auditor) external onlyOwner {
        authorizedAuditors[_auditor] = true;
    }

    function removeAuditor(address _auditor) external onlyOwner {
        require(_auditor != owner, "Cannot remove owner as auditor");
        authorizedAuditors[_auditor] = false;
    }

    function submitFinding(
        address _contractAddress,
        string calldata _category,
        string calldata _description,
        uint8 _severity
    ) external onlyAuditor returns (uint256) {
        require(_severity >= 1 && _severity <= 4, "Invalid severity level");
        
        uint256 findingId = findings.length;
        findings.push(AuditFinding({
            category: _category,
            description: _description,
            severity: _severity,
            isResolved: false,
            timestamp: block.timestamp
        }));
        
        emit FindingAdded(findingId, _contractAddress, _category, _severity);
        return findingId;
    }

    // Function to submit a complete audit
    function submitAudit(
        address _contractAddress,
        bool _isPassed,
        uint256[] calldata _findingIds
    ) external onlyAuditor {
        uint256 highCount = 0;
        uint256 mediumCount = 0;
        uint256 lowCount = 0;
        
        // Count findings by severity
        for (uint256 i = 0; i < _findingIds.length; i++) {
            AuditFinding storage finding = findings[_findingIds[i]];
            if (finding.severity == 4) highCount++;
            else if (finding.severity == 3) mediumCount++;
            else if (finding.severity == 2) lowCount++;
        }
        
        // Create and store audit result
        AuditResult memory result = AuditResult({
            contractAddress: _contractAddress,
            timestamp: block.timestamp,
            isPassed: _isPassed,
            highSeverityCount: highCount,
            mediumSeverityCount: mediumCount,
            lowSeverityCount: lowCount,
            findingIds: _findingIds,
            auditor: msg.sender
        });
        
        contractAudits[_contractAddress].push(result);
        verifiedContracts[_contractAddress] = _isPassed;
        
        emit AuditCompleted(_contractAddress, _isPassed, block.timestamp);
    }

    // Function to mark a finding as resolved
    function resolveFinding(uint256 _findingId) external onlyAuditor {
        require(_findingId < findings.length, "Finding does not exist");
        findings[_findingId].isResolved = true;
        emit FindingResolved(_findingId, msg.sender);
    }

    // View functions
    function getAuditCount(address _contractAddress) external view returns (uint256) {
        return contractAudits[_contractAddress].length;
    }

    function getLatestAudit(address _contractAddress) external view returns (
        bool isPassed,
        uint256 timestamp,
        uint256 highSeverityCount,
        uint256 mediumSeverityCount,
        uint256 lowSeverityCount,
        address auditor
    ) {
        AuditResult[] storage audits = contractAudits[_contractAddress];
        require(audits.length > 0, "No audits found for this contract");
        
        AuditResult storage latest = audits[audits.length - 1];
        return (
            latest.isPassed,
            latest.timestamp,
            latest.highSeverityCount,
            latest.mediumSeverityCount,
            latest.lowSeverityCount,
            latest.auditor
        );
    }

    function getFinding(uint256 _findingId) external view returns (
        string memory category,
        string memory description,
        uint8 severity,
        bool isResolved,
        uint256 timestamp
    ) {
        require(_findingId < findings.length, "Finding does not exist");
        AuditFinding storage finding = findings[_findingId];
        return (
            finding.category,
            finding.description,
            finding.severity,
            finding.isResolved,
            finding.timestamp
        );
    }

    function isContractVerified(address _contractAddress) external view returns (bool) {
        return verifiedContracts[_contractAddress];
    }
}