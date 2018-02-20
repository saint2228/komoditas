/*
frappe.listview_settings['Rekap Komoditas'] = {
	add_fields: ["status", "docstatus", "info_dari"],
	get_indicator: function(doc) {
		if((doc.info_dari)=='Jakarta') {
			return [__("Jakarta"), "orange", "info_dari,=,Jakarta"];
		} else if((doc.info_dari)=='Surabaya') {
			return [__("Surabaya"), "green", "info_dari,=,Surabaya"]
		}
	},
	right_column: "info_dari"
};


frappe.listview_settings['Rekap Komoditas'] = {
	add_fields: ["status", "docstatus", "info_dari"],
	get_indicator: function(doc) {
		if(doc.info_dari) {
			return [__("Jakarta"), "blue", "info_dari,=,Jakarta"];
		} else {
			return [__("Surabaya"), "orange", "info_dari,=,Surabaya"];
		}
	}
};

frappe.listview_settings['Rekap Komoditas'] = {
	onload: function(me) {
		me.page.set_title(__("Rekap Komoditas"));
	},
	add_fields: ["docstatus", "info_dari"],
	get_indicator: function(doc) {
		if(doc.info_dari) {
			return [__("Jakarta"), "green", "info_dari,=,Jakarta"];
		} else {
			return [__("Surabaya"), "darkgrey", "info_dari,=,Surabaya"];
		}
	}
}


frappe.listview_settings['Rekap Komoditas'] = {
  add_fields: ["status", "docstatus", "info_dari"],
	get_indicator: function(doc) {
		if(doc.status == "Draft" && doc.info_dari == "Jakarta")
			return [__(doc.info_dari), "green"];
		else if(doc.status == "Draft" && doc.info_dari == "Surabaya")
			return [__(doc.info_dari), "red"];
	}
};

frappe.listview_settings['Rekap Komoditas'] = {
	get_indicator: function(doc) {
		var colour = {'Jakarta': 'green', 'Surabaya': 'blue'};
		return [__(doc.info_dari), colour[doc.info_dari], "info_dari,=," + doc.info];
	},
}
*/

frappe.listview_settings['Rekap Komoditas'] = {
  add_fields: ["info_dari", "tanggal","nama_pengirim"],

};
