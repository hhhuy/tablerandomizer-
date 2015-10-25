btnplus.addEventListener('click', function(e){
Titanium.Database.open ('dbversion1');
db.execute("INSERT INTO tbNameContact(Name, Sort) VALUES ('"+ txtarea.value +"',1)");

txtarea.setValue('');
	// save name to table view
	//table view empty
});

btnOK.addEventListener('click', function(e){
	var row;
	var name2 = [];

var name = db.execute("SELECT Name FROM tbNameContact");

while(name.isValidRow()){
	
	var restaurant = name.fieldByName('Name');
	var order = name.fieldByName('Sort');
	
	
	
	 row = Titanium.UI.createTableViewRow({
		text: restaurant,
	});
	name2.push(row);
	name.next();
	
	//alert(restaurant + order);
}
tableview.setData(name2);
name.close();
txtarea.blur();
	//TableView.setData(name);
	
});

btnrandom.addEventListener('click', function(e) {
	var ran;
	//indexvalues = ran;
	var getrow = db.execute("SELECT * FROM tbNameContact ");
	//indexvalues = ran;
	ran = Math.floor((Math.random() * getrow.rowCount)) ;
	//alert(ran);
	indexvalues = ran;
	//tableview.data[0].rows[ran].backgroundColor = 'blue';
	txtarea.blur();
	win2.open();
	label2.setText(tableview.data[0].rows[ran].text);
	//alert(ran);
	
});

btndelete.addEventListener('click', function(e){
	//tableview.data[0].rows[indexvalues].text;
	var delrow = db.execute("DELETE FROM tbNameContact WHERE Name = '"+ tableview.data[0].rows[indexvalues].text +"'" );
	var alertYesNo = Titanium.UI.createAlertDialog({
        message: 'You Just Deleted One Name ',
 });
	alertYesNo.show();
	//btnOK.fireEvent('click');
	
});

tableview.addEventListener('click', function(e){  
	//var clickrow = db.execute("SELECT * FROM tbNameContact");
	tableview.data[0].rows[indexvalues].backgroundColor = 'black';
	
	var newindex = e.index;
	indexvalues = newindex;
	tableview.data[0].rows[newindex].backgroundColor = 'blue';

	
});
