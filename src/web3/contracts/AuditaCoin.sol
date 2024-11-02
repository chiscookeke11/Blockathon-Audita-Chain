// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AuditaCoin is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 1_000_000_000 * 10 ** 18;
    uint256 public constant TOKENS_PER_AUDIT = 100 * 10 ** 18;

    constructor() ERC20("Audita Coins", "AUDITA") Ownable(msg.sender) {
        _mint(msg.sender, 1_000_000 * 10 ** 18);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Exceeds max supply");
        _mint(to, amount);
    }

    function rewardAudit(address auditor) public onlyOwner {
        require(
            totalSupply() + TOKENS_PER_AUDIT <= MAX_SUPPLY,
            "Exceeds max supply"
        );
        _mint(auditor, TOKENS_PER_AUDIT);
    }
}
