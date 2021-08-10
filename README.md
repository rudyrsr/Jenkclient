# Code Team Angular

Este proyecto fué generado con Angular CLI 6.0.3

### Ejecutar el proyecto en Modo Preview(Desarrollo)

```
ng serve -o
```
El comando anterior abre el browser por defecto en `http://localhost:4200/.


## Pasos para estructurar un módulo y componentes con Angular CLI 
### Para crear un nuevo módulo

```
ng generate module employee --module app --routing
```

### Creando componentes

```
ng generate component employee/employee-list
ng generate component employee/employee-add
ng generate component employee/employee-view
```

### Resultado

```
|- app
    |- employee
        |- employee-list
        |- employee-add
        |- employee-view
        |- employee.module.ts
        |- employee-routing.module.ts
    |- app.module.ts        
```

