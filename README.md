## Structural directive
- create attribute directive, blink: ng-container + ng-template
- DI:
    - ViewContainerRef
    - TemplateRef<unknown>
    - !ElementRef
- AfterViewInit
    - ViewContainer createEmbeddedView
- (l) Implement blink
- préfix * / ng-template, `<ng-template customDirective>` == `<div *customDirective>`
- Multiple Input
    - <> attribute directive
    - Camel: @Input('blinkOtherparameter')
- (r) Implémenter un directive pour afficher une liste de texte, tips:
    - contexte dans un template (createEmbeddedView)
    - variable dans template (as, #, @ViewChild(static, read...))
- !import pour standalone
> back to branch 5
