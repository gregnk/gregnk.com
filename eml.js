function loadFunctions() {
	
	var e = document.getElementById("eml");
	
	e.hidden = false;
	
	e.onclick = function() {
		const es = "@";
	
		const et_b = "com";
		const et_a = ".";

		const ea_a = "greg";
		const ea_b = "ory";

		const ed_a = "gr";
		const ed_b = "eg";
		const ed_c = "nk";
		
		document.getElementById("eml").innerHTML = "<a href=\"mailto:" + ea_a + ea_b + es + ed_a + ed_b + ed_c + et_a + et_b + "\">" + ea_a + ea_b + es + ed_a + ed_b + ed_c + et_a + et_b + "</a>";
		
	};
}