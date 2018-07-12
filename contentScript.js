/* metabar */
var metabar = document.getElementsByClassName("metabar")[0];
metabar.parentElement.removeChild(metabar);

var metabarSpacer = document.getElementsByClassName("metabar--spacer")[0];
metabarSpacer.parentNode.removeChild(metabarSpacer);

var bottomBar = document.getElementsByClassName("u-fixed u-bottom0")[0];
bottomBar.parentNode.removeChild(bottomBar);

var postActionsBar = document.getElementsByClassName("postActionsBar")[0];
postActionsBar.parentNode.removeChild(postActionsBar);
