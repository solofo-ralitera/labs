## Route Guard

```
match route -> load config -> route activation (data, component)
|            |              |
CanMatch     CanLoad        CanDeactivate
                            CanActivateChild
                            CanActivate
```