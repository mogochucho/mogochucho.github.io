const getLocal = async()=>document
  .querySelector('.select-file > .script-local')
  .files[0].text();
const getRemote = async()=>fetch(
    document.querySelector('.select-file > .script-remote')
      .value
  ).then(x=>x.text());

window.addEventListener('load',()=>{
	document.querySelector('.select-file > .script-remote')
	  .addEventListener(
	    'change',
	    async()=>localStorage.init = await getRemote()
	  );
	const scriptLocal = document
	  .querySelector('.select-file > .script-local');
	document.querySelector('.select-file > .button-get-local')
	  .addEventListener('click',()=>scriptLocal.click());
	document.querySelector('.select-file > .script-local')
	  .addEventListener(
	    'change',
	    async()=>localStorage.init = await getLocal()
	  );
	eval(localStorage.init || '');
});
