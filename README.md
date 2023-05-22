# Component

## Structure
- .ts, .html, .css, .spec.ts
    - [encapsulation css](https://angular.io/guide/view-encapsulation)
    - [inline style/template](https://angular.io/guide/component-styles)

## Binding et change deletction
- binding model->vue, test avec interval
- [zone.js](https://angular.io/guide/zone)
- Test zone > switch branch 3.1

## Binding et event
- html event vue->model, ex click, input...

## Interaction entre composant
- création new component > ng generate component [nom composant] --standalone ( == ng g c [nom composant])
- standalone vs module (cf branche 2.1)
- import CommonModule
- selector, balise

    ### Partage données [parent->enfant](https://angular.io/guide/inputs-outputs)
    - @Input decorateur
        - alias
        - required (new)
    - directive
        - avec `[]`
        - sans `[]`

    ### Partage données [enfant->parent](https://angular.io/guide/inputs-outputs)
    - @Output decorateur
    - EventEmitter
        - trigger `.emit`
    - directive `()` (cf html event)
        - $event

    ### Two way binding [parent<->enfant]
    - @Output mot clé: suffix `...Change`
    - `[customDirective]="myModel" (customDirectiveChange)="myModel = $event"` === `[(customDirective)]="myModel"`


