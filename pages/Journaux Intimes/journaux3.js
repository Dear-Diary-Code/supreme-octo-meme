const video = document.querySelector('video');
video.autoplay = true;
video.load();
video.onended = function() {
    simulateClick(".return");
}
/**
 * found on stackoverflow at https://stackoverflow.com/a/17569610/5016557
 * allow to simulate a click on a link
 */
function simulateClick(target) {
    // on créé l'objet evenement 
    const event = new MouseEvent("click", {isTrusted: true});
    // on récupère le lien sur lequel nous voulons "cliquer"
    const redirectLinkDom = document.querySelector(target);
    // on déclenche l'évenement sur le lien (en gros on clique virtuellement dessus)
    redirectLinkDom.dispatchEvent(event);
  }