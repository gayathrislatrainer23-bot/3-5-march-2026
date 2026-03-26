1.React- js library
2.vite && cra
terminal ---  ctrl+j

3. work flow
node-module --> store dependencies

4. public- static files
5. index.html - entry point, single page
6. src - dynamic folder
7. package.json - meta data

8. comp is building block of react
   2 types comp
   1. class comp and  functional comp

1. functional comp
    --> js fun it returns jsx


    function BoxModel(){

        return (
jsx
        )
    }


jsx -- js xml , html like syntax

function Box (){
    return (
        <div>
        </div>
    )
}

jsx -- it is a js xml , it is html like syntax

rule
1. one parent element
 2.  {} embed js variables
 3. inline -style using {{}}
 4. className instead of class


 Block-level vs Inline Elements, Common Tags (p, h1-h6, div, span, etc.)

Semantic Tags (header, footer, nav, section, article, aside, main)

Formatting Tags (b, i, u, strong, em, mark, small, etc.), Interactive Tags (a, button, input, textarea)

Forms: input types, labels, placeholders, required, basic form validation

 Tables, Lists (ul, ol, li, table, tr, td, th), Iframes & Embeds

Do this in react components

props task:

props Practice

Objective: Pass data between components

Create a component StudentCard that accepts props: name, age, grade.


Props

1: WeatherInfo with Object Prop
    Weatherdisplay - child
     Create a component that accepts a single object as a prop
          (example: { city: "Chennai", temp: 30 }) and displays:
     output:
              Current temperature in Chennai is 30°C





 2: User Login Status with Conditional Prop

        Pass a user object as a prop 
         (example: { name: "Manu", isLoggedIn: true }).

     output:

"Welcome back!" if isLoggedIn is true, otherwise show "Please login".


 3: Colors with Array Prop
 Pass an array of colors as a prop (example: ["Red", "Blue", "Yellow"]).
    Display them in one line like:
     output:
         Primary colors are: Red, Blue, Yellow

