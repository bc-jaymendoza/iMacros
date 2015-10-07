var main = {
    start: 23,
    end: 63 // the checkbox is included in the range
}

function runMacro() {
    macro = "VERSION BUILD=8920312 RECORDER=FX\n";

    for (var i = main.start; i <= main.end; i++) {
        macro += "TAG POS=1 TYPE=LABEL FORM=NAME:productExportToolForm ATTR=data-key:" + i + " CONTENT=YES\n";
    }
        
    imPlayCode(macro);
    iimClose();
}

runMacro();
