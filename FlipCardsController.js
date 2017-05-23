({
	doInit : function(component, event, helper) {
		console.log("Inside doInit");        
        console.log("Exiting doInit");
	},
    loadScripts: function(component, event, helper) {
		console.log("Inside loadScripts");      
        helper.getCards(component);       
        window.setTimeout($A.getCallback(function() {
        	$(".back").css("display", "block");
        	$(".card").flip({trigger: 'hover'});
        	}), 
        500);
        console.log("Exiting loadScripts");
	},
    handleClick: function(component, event, helper) {
		console.log("Inside handleClick");      				
        console.log("Exiting handleClick");
	},
    doneRendering: function(component, event, helper) {
		console.log("Inside doneRendering");      				   	          
        console.log("Exiting doneRendering");
	}
})