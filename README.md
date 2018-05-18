catastrophe-js
==============

A simple `Kotlin-JS` library to model elemental catastrophe equations using the type
safety of Kotlin and the convenience of `JavaScript` as a target platform.

## Catastrophe Theory

I don't know much about it, but the equations were simple enough:

  * https://en.wikipedia.org/wiki/Catastrophe_theory
  
Essentially, as an engineer focusing on distributed systems, I want to know if I can apply
`Catastrophe Theory` to the instrumentation of my systems.  Also, I wanted to write something
in `Kotlin-JS`.

## TODO:

  *  Model a basic catastrophe scenario using the Fold catastrophe:

      * V = x^3 + ax
    
      * "At negative values of a, the potential has two extrema - one stable, and one unstable. If the parameter a is slowly increased, the system can follow the stable minimum point. But at a = 0 the stable and unstable extrema meet, and annihilate. This is the bifurcation point. At a > 0 there is no longer a stable solution. If a physical system is followed through a fold bifurcation, one therefore finds that as a reaches 0, the stability of the a < 0 solution is suddenly lost, and the system will make a sudden transition to a new, very different behaviour. This bifurcation value of the parameter a is sometimes called the "tipping point"."

      * This means we need to model a "tipping point" as our first scenario and graph the results on the DOM.
 
  *  Add unit tests (duh!)
  
  *  Add graphing
  
  *  Distribute using UMD format
  
  *  Create interesting cataastrophe models and include them as samples in the repo