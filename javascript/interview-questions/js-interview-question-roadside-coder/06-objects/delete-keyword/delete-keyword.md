# Understanding the `delete` Keyword in JavaScript

## Scenarios to Consider

### 1. Deleting Non-Existent Properties

**Scenario:** If the property you are trying to delete does not exist, `delete` will have no effect and will return `true`.

**Explanation:** The `delete` operator returns `true` if the property does not exist or if the deletion was successful.

**Example:**

```javascript
const obj = { name: "Devang" };
console.log(delete obj.age); // true (age does not exist)
console.log(obj); // { name: "Devang" }
```

### 2. Deleting Own Properties

**Scenario:** `delete` only affects an object's own properties. If a property with the same name exists on the object's prototype chain, after deletion, the object will use the property from the prototype chain.

**Explanation:** The `delete` operator removes a property from the object if it is an own property. If the property exists on the prototype chain, it will not be deleted from the prototype, and the prototype property will still be accessible.

**Example:**

```javascript
function Person() {
  this.name = "Devang";
}

Person.prototype.age = 24;

const person = new Person();
console.log(person.age); // 24 (inherited from prototype)

delete person.age;
console.log(person.age); // 24 (still inherited from prototype)

delete person.name;
console.log(person.name); // undefined (own property deleted)
```

### 3. Non-Configurable Properties

**Scenario:** Non-configurable properties cannot be removed. This includes properties of built-in objects like Math, Array, Object and properties that are created as non-configurable with methods like `Object.defineProperty()`.

**Explanation:** Properties defined as non-configurable cannot be deleted. This is often the case for properties of built-in objects or properties explicitly set as non-configurable.

**Example:**

```javascript
const obj = {};
Object.defineProperty(obj, "name", {
  value: "Devang",
  configurable: false,
});

console.log(delete obj.name); // false (property is non-configurable)
console.log(obj.name); // Devang (still exists)
```

### 4. Deleting Variables

**Scenario:** Deleting variables, including function parameters, never works. `delete variable` will throw a `SyntaxError` in strict mode, and will have no effect in non-strict mode.

**Explanation:** Variables declared with `var`, `let`, or `const` cannot be deleted using the `delete` operator. Attempting to do so in strict mode results in an error.

**Example:**

```javascript
var name = "Devang";

// In non-strict mode
console.log(delete name); // false
console.log(name); // Devang (still exists)

// In strict mode
("use strict");
delete name; // SyntaxError
```

### 5. Global and Function Scope Variables

**Scenario:** Any variable declared with `var` cannot be deleted from the global scope or from a function's scope, because while they may be attached to the global object, they are not configurable.

**Explanation:** Variables declared with `var` at the global level or within a function scope are non-configurable and thus cannot be deleted.

**Example:**

```javascript
var globalVar = "Devang";

console.log(delete globalVar); // false
console.log(globalVar); // Devang (still exists)
```

### 6. Variables Declared with `let` or `const`

**Scenario:** Any variable declared with `let` or `const` cannot be deleted from the scope within which they were defined, because they are not attached to an object.

**Explanation:** Variables declared with `let` or `const` are block-scoped and are not properties of the global object, so they cannot be deleted.

**Example:**

```javascript
let name = "Devang";

console.log(delete name); // false
console.log(name); // Devang (still exists)
```

        Note: In strict mode:
          - deleting non-configurable properties of a object will throw TypeError
          - deleting variables (decalred with let, const or var) will throw SyntaxError
