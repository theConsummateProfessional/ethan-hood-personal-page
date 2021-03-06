var div_state = {}
function hide_others(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        div_state[id] = (div_state[id]) ? false : true;
        for(var div in div_state) {
            if(div_state[div] && div != id) {
                document.getElementById(div).style.display = 'none';
                div_state[div] = false;
            }
        }
        divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');
    }
}