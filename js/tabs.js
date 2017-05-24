var tabInicial=1;
$(document).on("ready",main);


function main () {
	console.log("ESTOY EN MAIN");
	$("#tabs a").on("click",openTab);
	$("#subTabs a").on("click",openSubTab);
	$(".tabContent").eq(tabInicial-1).fadeIn();
	$(".subTabContent").eq(tabInicial-1).fadeIn();
	$("#tabs a").eq(tabInicial-1).addClass("currentTab");
	$("#subTabs a").eq(tabInicial-1).addClass("subCurrentTab");
}

function openTab () {
	$(".tabContent").hide();
	$("#tabs a").removeClass("currentTab");
	console.log("ESTOY QUITANDO CLASE");
	$(".tabContent").eq($(this).index()).fadeIn();
	$(this).addClass("currentTab");
	return false;
}
function openSubTab(){
	$(".subTabContent").hide();
	$("#subTabs a").removeClass("subCurrentTab");
	$(".subTabContent").eq($(this).index()).fadeIn();
	$(this).addClass("subCurrentTab");
	return false;
}