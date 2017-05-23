({
    getCards : function(component) {        
        console.log("Inside getCards helper .... ");
        var action = component.get("c.getCards");   
        action.setCallback(this, function(response) {
            var state = response.getState();            
            if (state === "SUCCESS") {
                component.set("v.services",response.getReturnValue());  
            }
        });        
        $A.enqueueAction(action);
    }
})