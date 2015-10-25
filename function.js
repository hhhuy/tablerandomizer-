

function namecheck(){
var row;
var data1 = [];
for (var i = 0; i < name.length; i++){
	row = Titanium.UI.createTableViewRow({
		text: name[i],
	});
	data1.push(row);
}
		//row.setTitle(name[i]);
tableview.setData(data1);
} 