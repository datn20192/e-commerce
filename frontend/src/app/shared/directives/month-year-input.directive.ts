import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[MonthYearInput]'
})

export class MonthYearInput {

    @Output() nomalized:EventEmitter<any> = new EventEmitter();

    constructor(
        private el: ElementRef
    ) {}

    @HostListener('keydown') onKeyDown() {
        let e = <KeyboardEvent> event;
        let value = this.el.nativeElement.value;
        // Allow
        if(
            [8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||            
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)
        ){
            return ;
        }

        // Ensure that it is a number and stop the keypress
        else if(
            // Prevent: shift
            e.shiftKey || 
            // Prevent: characters are different from number 
            e.keyCode < 48 || e.keyCode > 57 || 
            // Prevent: when it has length equal to 7 (MM/YYYY)
            value.length==7 ||
            // Prevent: when it has month > 12
            (value.length==1 && parseInt(value)>1) || (value.length==2 && parseInt(value)>12)
        ) e.preventDefault();

        // Notify that it was entered month completely
        else if(value.length==2){
            console.log(value);
            this.nomalized.emit('');
        }
        
    }
    
}