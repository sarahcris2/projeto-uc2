// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Payment {
    
    address public dono;
    constructor (){
        dono = msg.sender;
    }
    // funçao para permiter o recebimento de pagamentos
    receive() external payable {}

    function enviarpagamento(address payable destinatario) public payable{
        require(msg.value > 0, "Valor precisa ser maior que 0");
        destinatario.transfer(msg.value);
    }
    function saldoContrato() public view returns (uint) {
        return address(this).balance;
    }
}
