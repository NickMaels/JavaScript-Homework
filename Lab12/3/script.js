let body=document.documentElement;

function up() 
{
	if (body.scrollHeight-body.scrollTop==body.clientHeight)window.scrollTo(0, 100);		
}