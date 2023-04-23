// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorage {
    // This get initilized by zero
    uint  favNumber ;

    mapping(string => uint256) public nameToFavNumber;
   
    struct People{
        uint256 favNumber;
        string name;
    }

    People[] public peopleArr;

    function store(uint _favoriteNumber) public virtual  {
        favNumber = _favoriteNumber;
    }

    // view, pure
    function retrieve() public view returns (uint256) {
        return favNumber;
    }

    // calldata, memory , storage
    function addPerson(string calldata _name,uint256 _favNumber) public {
        peopleArr.push(People(_favNumber,_name));
        nameToFavNumber[_name] = _favNumber;
    }
}
