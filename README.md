## [Angular - Service](https://angular.io/guide/architecture-services)
- Injection de dépendance
    - quesako
    - delegation de new (Injector)
- class service
- Décorateur @Injectable
    - provideIn root
    - Injection dans un component
        - constructeur
        - fonction inject
        - (r) use case constructeur VS inject
    - erreur `ERROR NullInjectorError`
- Injection Token
    - @Component providers (standalone)
        - provide (uk)
            - constructor decorateur @Inject('TOKEN')
            - Unicité avec [InjectionToken](https://angular.io/api/core/InjectionToken)
        - useClass
        - useValue
        - useFactory
- singleton: @provideIn VS providers[]
- structure des services
    - component VS service
- Injection entre service
- (r) Implementer un système de DI

> switch main

