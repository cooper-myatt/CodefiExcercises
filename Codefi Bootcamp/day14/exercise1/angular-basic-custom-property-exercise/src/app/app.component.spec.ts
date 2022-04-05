/*
## Exercise 1: Allow a child component to receive values from the parent component using the input decorator

1. Create a new angular project called `angular-basic-custom-property-exercise`
2. Generate a component called user, nest user in the app component
3. In `app.component.ts`, create a instance property called `name` of type string and set it to your name.
4. In `user.component.ts`, create a instance property called `myName` of type string and set it initially to an empty string. Then, configure this property by the `@Input()` Decorator
  - Create a paragraph element in user.component.html. Set its content to `My name is ` follow by the value of `myName`
5. In `app.component.html`, pass down the name property to the user component
6. run `ng serve`, and you should see your name on the webpage


<img src="../C14__Components-Databinding__Angular/resources/exercise-1.png" width="400px">*/
