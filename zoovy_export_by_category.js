var range = {
    first: 23,
    last: 63 // this checkbox is included in the range
}

function runMacro() {
    macro = "VERSION BUILD=8920312 RECORDER=FX\n";

    for (var i = range.first; i <= range.last; i++) {
        macro += "TAG POS=1 TYPE=LABEL FORM=NAME:productExportToolForm ATTR=data-key:" + i + " CONTENT=YES\n";
    }
        
    iimPlayCode(macro);
    iimClose();
}

runMacro();
