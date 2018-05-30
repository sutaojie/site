var hashTable ={
	
}

for( key in hashTable){
var ta = document.querySelector('#ta');
var tr = document.createElement('tr');
var td = document.createElement('td');
var tdd = document.createElement('td');
var txt = document.createTextNode(key);
var content = document.createTextNode(hashTable[key]);
var table = ta.parentNode;
td.appendChild(txt);
tdd.appendChild(content);
tr.appendChild(td);
tr.appendChild(tdd);
table.appendChild(tr);
}