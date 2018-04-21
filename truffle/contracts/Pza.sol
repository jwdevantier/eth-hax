pragma solidity ^0.4.4;

import '../../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract Pza is StandardToken {
    string public name = 'Pza';
    string public symbol = 'Pza';
    uint8 public decimals = 0;
    uint public INITIAL_SUPPLY = 8; // slices of pizza

    function Pza() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}