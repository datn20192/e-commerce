import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[NumbericInput]'
})

export class NumbericInput {

    @Input('NumbericInput') maxLength: number;

    constructor(
        private el: ElementRef
    ) {}

    @HostListener('keydown') onKeyDown() {
        let e = <KeyboardEvent> event;
        let valLenght = this.el.nativeElement.value.length;
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
        if(e.shiftKey || e.keyCode < 48 || e.keyCode > 57 || valLenght==this.maxLength) e.preventDefault();
    }
    
}