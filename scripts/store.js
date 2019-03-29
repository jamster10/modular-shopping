'use strict';
/* global Item */

const store = (function(){
  const items= [

  ];

  let hideCheckedItems= false;
  let searchTerm= '';


  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById: findById,
    addItem: addItem,
    findAndToggleChecked: findAndToggleChecked,
    findAndUpdateName: findAndUpdateName,
    findAndDelete: findAndDelete,
    setSearchTerm: setSearchTerm,
    toggleCheckedFilter: toggleCheckedFilter,
  };

}() );


function findById(idNum){
  return store.items.find(item => item.id === idNum);
}

function findAndToggleChecked (id){
  const  foundItem = this.findById(id); 
  foundItem.checked = !foundItem.checked;
}


function addItem (name){
  try {
    Item.validateName(name);
    this.items.push(Item.create(name));
    console.log(this);

  } catch (e){
    console.log(`Cannot add name: ${e.message}`);
  }
}

function findAndUpdateName (id, newName){
  try {
    Item.validateName(newName);
    const foundItem = this.findById(id);
    foundItem.name = newName;

  } catch(e){
    console.log(`Cannot update name: ${e.message}`);
  }
}

function findAndDelete (id){
  this.items = this.items.filter(item => item.id !== id);
}

//edit views
function setSearchTerm(value){
  this.searchTerm = value;
}

function toggleCheckedFilter(){
  this.hideCheckedItems = !this.hideCheckedItems;
}