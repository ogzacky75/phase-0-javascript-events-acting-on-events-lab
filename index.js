function moveDodgerLeft(){

	const leftNumbers = dodger.style.left.replace("px", "")
	const left = parseInt(leftNumbers, 10)

	if (left>0){
		dodger.style.left = `${left-1}px`
	}
}

document.addEventListener('keydown', e=>{
	if (e.key === "ArrowLeft"){
		moveDodgerLeft()
	}
})

function moveDodgerRight(){
	const rightNumbers = dodger.style.left.replace ("px", "")
	const right = parseInt(rightNumbers, 10)

	if (right>0){
		dodger.style.left = `${right+1}px`
	}
}

document.addEventListener('keydown',e=>{
	if (e.key === "ArrowRight"){
		moveDodgerRight()
	}
})

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

