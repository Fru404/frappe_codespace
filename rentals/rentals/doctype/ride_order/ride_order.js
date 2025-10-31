// Copyright (c) 2025, phrous and contributors
// For license information, please see license.txt
frappe.ui.form.on("Ride Order", {
	refresh(frm) {
        if (frm.doc.status === "New"){
            frm.add_custom_button("Accept", () => {
        //status => Accepted
            frm.set_value("status", "Accepted");
            frm.save();
           }, "Actions")//Group the buttons under one drop down

           frm.add_custom_button("Rejected", () => {
        //status => Accepted
            frm.set_value("status", "Rejected");
            frm.save();
           },"Actions")
        }
       
 	},
    status(frm){
        console.log("Status Changed!")
    }
 });
