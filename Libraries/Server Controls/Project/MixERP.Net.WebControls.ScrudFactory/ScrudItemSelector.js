﻿function sisGetParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

function sisUpdateValue(val) {
    var ctl = sisGetParameterByName('AssociatedControlId');
    $('#' + ctl, parent.document.body).val(val);
    closeWindow();
};

function closeWindow() {
    parent.jQuery.colorbox.close();
    parent.closeItemSelector();
};

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        top.close();
    }
};