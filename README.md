## Structural directive
- create attribute directive, blink
- préfix * / ng-template, `<ng-template customDirective>` == `<div *customDirective>`
- DI:
    - ViewContainerRef
    - TemplateRef<unknown>
    - !ElementRef
- AfterViewInit
    - ViewContainer createEmbeddedView
- (l) Implement blink
- Multiple Input
    - <> attribute directive
    - Camel: @Input('blinkOtherparameter')
- (r) Implémenter un directive pour afficher une liste de texte, tips:
    - contexte dans un template (createEmbeddedView)
    - variable dans template (as, #)

> back to branch 5
