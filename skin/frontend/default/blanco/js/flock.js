jQuery(document).ready(function(){

	/* COMBINE SIZES IN LAYERED NAVIGATION */

	var clthsize = jQuery("#filterSize");
	var pantsize = jQuery("#filterPantSize");
	var shoesize = jQuery("#filterShoeSize");
	var ringsize = jQuery("#filterRingSize");
	if (clthsize.length > 0){
		// using clothing size for our base
		if (pantsize.length + shoesize.length + ringsize.length > 0)
			clthsize.prepend("<ol class='subfilter first'>Clothes</ol>")
		if (pantsize.length > 0){	
			clthsize.append("<ol class='subfilter'>Pants</ol>")
					.append(pantsize.find("ol"));
			pantsize.prev().remove();
			pantsize.next().remove();
			pantsize.remove();
		}
		if (shoesize.length > 0){
			clthsize.append("<ol class='subfilter'>Shoes</ol>")
					.append(shoesize.find("ol"));
			shoesize.prev().remove();
			shoesize.next().remove();
			shoesize.remove();
		}
		if (ringsize.length > 0){
			clthsize.append("<ol class='subfilter'>Rings</ol>")
					.append(ringsize.find("ol"));
			ringsize.prev().remove();
			ringsize.next().remove();
			ringsize.remove();
		}

	}else if (pantsize.length > 0){
		// using pant size for our base
		if (shoesize.length + ringsize.length > 0)
			pantsize.prepend("<ol class='subfilter first'>Pants</ol>").prev().text("Size");
		if (shoesize.length > 0){
			pantsize.append("<ol class='subfilter'>Shoes</ol>")
					.append(shoesize.find("ol"));
			shoesize.prev().remove();
			shoesize.next().remove();
			shoesize.remove();
		}
		if (ringsize.length > 0){
			pantsize.append("<ol class='subfilter'>Rings</ol>")
					.append(ringsize.find("ol"));
			ringsize.prev().remove();
			ringsize.next().remove();
			ringsize.remove();
		}

	}else if (shoesize.length > 0 && ringsize.length > 0){
		// adding ring size to shoe size
		shoesize.prepend("<ol class='subfilter first'>Shoes</ol>")
				.append("<ol class='subfilter'>Rings</ol>").append(ringsize.find("ol"))
				.prev().text("Size");
		ringsize.prev().remove();
		ringsize.next().remove();
		ringsize.remove();
	}

});