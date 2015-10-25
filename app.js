 var indexvalues = 0;

var name = [];

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var db = Titanium.Database.install ('db.sqlite','dbversion1');
Titanium.Database.open ('dbversion1');
db.execute('CREATE TABLE IF NOT EXISTS tbNameContact(Name TEXT, Sort INT) ');



var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

var txtarea = Titanium.UI.createTextArea({
	title:'Text Area',
	backgroundColor:'black',
	color:'white',
	left: 5,
	top: 5,
	width:195, 
	height: 60,
	font:{fontSize: '28dp'},
	textAlign:'left'
});

win1.add(txtarea);

var btnplus = Titanium.UI.createButton({
	title: '+',
	backgroundColor: 'black',
	color: 'white',
	left: 205,
	top: 10,
	width: 50,
	height: 50,
	font:{fontSize:'40dp'}
});
win1.add(btnplus);

var btnOK = Titanium.UI.createButton({
	title: 'OK',
	backgroundColor: 'black',
	color: 'white',
	left: 260,
	top: 10,
	width: 50,
	height: 50,
	font:{fontSize:'22dp'}
});
win1.add(btnOK);

var btnrandom = Titanium.UI.createButton({
	title:'Random',
	backgroundColor:'black',
	color:'white',
	left:5,
	top:70,
	width:150,
	height:50,
	font:{fontSize : '28dp'},
	
});
win1.add(btnrandom);

var btndelete = Titanium.UI.createButton({
	title:'Remove',
	backgroundColor: 'black',
	color:'white',
	left: 160,
	top: 70,
	width: 150,
	height:50,
	font:{fontSize: '28dp'},
});
win1.add(btndelete);

var tableview = Titanium.UI.createTableView({
	touchEnabled: true,
	scrollable: true,
	editable:true,
	title:'Table View',
	backgroundColor:'black',
	color:'white',
	left: 5,
	top: 130,
	width:310,
	height:215,
	font:{fontSize: '28dp'},
	
});

win1.add(tableview);
txtarea.blur();
//var row = Titanium.UI.createTableViewRow({
	//title:'',
//});
//win1.add(row);


Ti.include('events.js','function.js');
//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
