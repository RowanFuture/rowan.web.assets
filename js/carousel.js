const carousel = document.getElementById('game-carousel');
const carousel_children = carousel.children;
// var active_index = 0;
// var active = carousel_children[active_index].children[0];
for(let i = 0; i < carousel_children.length; i++){
	let sel = carousel_children[i].children[0].children[0];
	let selpar = carousel_children[i].children[0];
	let val = (100/(carousel_children.length-1))*(i-(carousel_children.length-1)/2);
	let sign = -1+2*(val >= 0);
	sel.transform_val = `-50% + ${sign} * min(${Math.abs(val/100*(carousel_children.length-1)*16)}rem, ${Math.abs(val*.5)}vw)`;
	// console.log(sel.transform_val);//calc(${sel.transform_val})
	sel.default_transform = ` translateZ(${i*2}vw) translateX(0) translateY(${10-i}%)  `;
	selpar.default_brightness = `brightness(${(i/(carousel_children.length-1))*.2+.8})`;
	setTimeout(function(){
		sel.style.transform = sel.default_transform;
	},100*i);
	selpar.style.filter =  selpar.default_brightness;
	selpar.style.transform = `translateX(calc(${sel.transform_val}))`;
	sel.addEventListener("mouseenter", (e) => {
		// console.log(e.target);
		// e.target.style.transform = `translateX(${sel.transform_val - 5}%) rotate(5deg) translateY(-30%)`;
		e.target.style.transform = `translateX(-5%) rotateX(10deg) rotateY(20deg) translateY(max(-6rem, -12vh))`;
		e.target.parentElement.style.filter = "brightness(1.1)";
		e.target.children[0].style.transform = "translateY(30%) translateX(10%)";
		e.target.children[1].style.transform = "translateY(60%) translateX(40%)";
		console.log(e.target.children[0]);
		for(let i = 0; i < carousel_children.length; i++){
			let sel = carousel_children[i].children[0].children[0];
			let selpar = carousel_children[i].children[0];
			// if(sel != e.target)sel.style.transform = `translateX(${sel.transform_val - 5}%) translateY(0%)`;
			if(sel != e.target){
				sel.style.transform = sel.default_transform+" rotateX(20deg) translateY(min(5rem, 10vh))";//30
				selpar.style.filter = `brightness(${.6+(i/(carousel_children.length-1))*.2})`;
				sel.children[0].style.transform = "";
				sel.children[1].style.transform = "";
			}
		}
	});
	/*sel.addEventListener("mousemove", (e) => {
		console.log(e.target);
		let box = e.target.getBoundingClientRect();
		let xAxis = -(box.left + box.width / 2 - e.pageX) / box.width * 60;
		let yAxis = (box.top + box.height / 2 - e.pageY) / box.height * 60;
		e.target.classList.add('moving');
		// e.target.style.transform = `translateX(${sel.transform_val - 5}%) rotate(5deg) translateY(-30%)`;
		e.target.style.transform = `translateX(${sel.transform_val - 5}%) rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(0%)`;
	});*/
	sel.addEventListener("mouseleave", (e) => {
		for(let i = 0; i < carousel_children.length; i++){
			let sel = carousel_children[i].children[0].children[0];
			let selpar = carousel_children[i].children[0];
			sel.style.transform = sel.default_transform;
			selpar.style.filter = selpar.default_brightness;
			sel.children[0].style.transform = "";
			sel.children[1].style.transform = "";
		}
		// e.target.style.transform = `translateX(${sel.transform_val}%)`;
	});
}
/*setInterval(() => {
	active.style.transform = `skewX(25deg) translateX(${active_index*20}%)`;
	active_index++;
	if(active_index >= carousel_children.length)
		active_index = 0;
	active = carousel_children[active_index].children[0];
	active.style.transform = 'skew(0) translateX(-50}%)';
	// `translateX(${active_index*10}%) !important`;
	console.log(active.style.transform);
},1000);*/