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

## Practical Cusp Catastrophe Example

  * https://en.wikipedia.org/wiki/Catastrophe_theory#/media/File:Pitchfork_bifurcation_left.svg
  
"A famous suggestion is that the cusp catastrophe can be used to model the behaviour of a stressed dog, which may respond by becoming cowed or becoming angry.[1] The suggestion is that at moderate stress (a > 0), the dog will exhibit a smooth transition of response from cowed to angry, depending on how it is provoked. But higher stress levels correspond to moving to the region (a < 0). Then, if the dog starts cowed, it will remain cowed as it is irritated more and more, until it reaches the 'fold' point, when it will suddenly, discontinuously snap through to angry mode. Once in 'angry' mode, it will remain angry, even if the direct irritation parameter is considerably reduced."

## TODO:

  *  Model a basic catastrophe scenario using the Fold catastrophe:

      * V = x^3 + ax
    
      * "At negative values of a, the potential has two extrema - one stable, and one unstable. If the parameter a is slowly increased, the system can follow the stable minimum point. But at a = 0 the stable and unstable extrema meet, and annihilate. This is the bifurcation point. At a > 0 there is no longer a stable solution. If a physical system is followed through a fold bifurcation, one therefore finds that as a reaches 0, the stability of the a < 0 solution is suddenly lost, and the system will make a sudden transition to a new, very different behaviour. This bifurcation value of the parameter a is sometimes called the "tipping point"."

      * This means we need to model a "tipping point" as our first scenario and graph the results on the DOM.
 
  *  Add unit tests (duh!)
  
  *  Add graphing
  
  *  Distribute using UMD format
  
  *  Create interesting cataastrophe models and include them as samples in the repo
  
  * Add equations and models from:
  
      * https://www.math.wisc.edu/~robbin/catastrophe/catastrophe_talk.pdf
      
  * Model a catastrophe modeled on the Cusp pattern:
  
      * V = x^4 + a(x^2) + bx
      
      * "The cusp geometry is very common, when one explores what happens to a fold bifurcation if a second parameter, b, is added to the control space. Varying the parameters, one finds that there is now a curve (blue) of points in (a,b) space where stability is lost, where the stable solution will suddenly jump to an alternate outcome."
  
      * "But in a cusp geometry the bifurcation curve loops back on itself, giving a second branch where this alternate solution itself loses stability, and will make a jump back to the original solution set. By repeatedly increasing b and then decreasing it, one can therefore observe hysteresis loops, as the system alternately follows one solution, jumps to the other, follows the other back, then jumps back to the first."
  
      * "However, this is only possible in the region of parameter space a < 0. As a is increased, the hysteresis loops become smaller and smaller, until above a = 0 they disappear altogether (the cusp catastrophe), and there is only one stable solution."
      
      * "The remaining simple catastrophe geometries are very specialised in comparison, and presented here only for curiosity value."
  
      * https://content.sciendo.com/view/journals/foli/11/1/article-p61.xml
      
  ## Credits
  
  All quotes are from Wikipedia.org unless stated otherwise. All content provided at external links are linked here for educational purposes only.