Did you know that if you provide a service to a eagerly loaded module, it will be registered to root injector ?

There’s no way to provide a service to only a module scope when it’s eagerly loaded. 
If you provide a service on module level, it will be registered to the root injector, making it available for all components, directives, pipes and modules.

Open DashboardModule, you'll see AboutService wasn't provided, however on DashboardComponent dependency injection works properly since AboutModule has registered AboutService to the root injector.