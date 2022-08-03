n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
setCurrentDate()

const headtabs = document.querySelectorAll('[data-headtab-target]')
const headtabContents = document.querySelectorAll('[data-headtab-content]')

headtabs.forEach(headtab =>
{
	headtab.addEventListener('click', () =>
	{
		const target = document.querySelector(headtab.dataset.headtabTarget)
		headtabContents.forEach(headtabContent =>
		{
			headtabContent.classList.remove('active')
		})
		headtabs.forEach(headtab =>
		{
			headtab.classList.remove('active')
		})
		headtab.classList.add('active')
		target.classList.add('active')
	})
})

function convertMonthStr()
{
	switch(m)
	{
		case 1:
			return 'January'
		case 2:
			return 'February'
		case 3:
			return 'March'
		case 4:
			return 'April'
		case 5:
			return 'May'
		case 6:
			return 'June'
		case 7:
			return 'July'
		case 8:
			return 'August'
		case 9:
			return 'September'
		case 10:
			return 'October'
		case 11:
			return 'November'
		case 12:
			return 'December'
		default:
			return 'January'
	}
}
function setCurrentDate()
{
	document.getElementById("date").innerHTML = d +" "+ convertMonthStr() +", "+ y;
}
