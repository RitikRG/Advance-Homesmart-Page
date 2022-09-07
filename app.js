const productNav = document.querySelector('#navLinkProducts');
const serviceNav = document.querySelector('#serviceLinkProducts');
const developerNav = document.querySelector('#developerLinkProducts');
const resourcesNav = document.querySelector('#resourcesLinkProducts');
const productFloatbox = document.querySelector('#product-Floatbox');
const serviceFloatbox = document.querySelector('#service-Floatbox');
const developerFloatbox = document.querySelector('#developer-Floatbox');
const resourcesFloatbox = document.querySelector('#resources-Floatbox');
// mobinav
const moviNavOpen = document.querySelector('#moviNavOpen');
const moviNavClose = document.querySelector('#moviNavClose');
const mobiNavbar = document.querySelector('#mobiNavbar');








// productnav
productNav.addEventListener('click',()=>{productFloatbox.classList.remove('hidden')})
productFloatbox.addEventListener('mouseenter',()=>{productFloatbox.classList.remove('hidden')})
productFloatbox.addEventListener('mouseleave',()=>{productFloatbox.classList.add('hidden');})
//servicenav
serviceNav.addEventListener('click',()=>{serviceFloatbox.classList.remove('hidden')})
serviceFloatbox.addEventListener('mouseenter',()=>{serviceFloatbox.classList.remove('hidden')})
serviceFloatbox.addEventListener('mouseleave',()=>{serviceFloatbox.classList.add('hidden')})
//developernav
developerNav.addEventListener('click',()=>{developerFloatbox.classList.remove('hidden')})
developerFloatbox.addEventListener('mouseenter',()=>{developerFloatbox.classList.remove('hidden')})
developerFloatbox.addEventListener('mouseleave',()=>{developerFloatbox.classList.add('hidden')})
//resources section
resourcesNav.addEventListener('click',()=>{resourcesFloatbox.classList.remove('hidden')})
resourcesFloatbox.addEventListener('mouseenter',()=>{resourcesFloatbox.classList.remove('hidden')})
resourcesFloatbox.addEventListener('mouseleave',()=>{resourcesFloatbox.classList.add('hidden')})
//mobinav toggle
moviNavOpen.addEventListener('click',()=>{
    moviNavClose.classList.toggle('hidden');
    moviNavOpen.classList.toggle('hidden');
    mobiNavbar.classList.toggle('hidden');
})
moviNavClose.addEventListener('click',()=>{
    moviNavClose.classList.toggle('hidden');
    moviNavOpen.classList.toggle('hidden');
    mobiNavbar.classList.toggle('hidden');
})

// connection form
