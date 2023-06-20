## [Angular - Service](https://angular.io/guide/architecture-services)
- Quesako
    - component VS service
- Injection de dépendance
    - quesako
    - delegation de new (Injector)
- class service
- Injection dans un component
    - providers
        - provide
        - useClass
    - fonction inject
        - initialisation
        - constructeur
    - injection dans constructeur
    - (r) use case constructeur VS inject
    - providers->useClass => new Class()
- singleton
    - Décorateur @Injectable
    - providedIn root
    - usage: données partagées
        - intro NgRx
- erreur `ERROR NullInjectorError`
    - (r) résolution des dépendance (injector tree)

- Injection Token
    - @Component providers (standalone)
        - provide (uk)
            - constructor decorateur @Inject('TOKEN'), @Inject(MyClass)
            - Unicité avec [InjectionToken](https://angular.io/api/core/InjectionToken)
        - useClass
        - useValue
        - useFactory
        - useExisting
    - {provide: MyClass, useClass: MyClass} == MyClass
- structure des services
- Injection entre service
- (r) Implementer un système de DI

> switch main

