# lodash-size-testing

Lodash is a handly util lib, but most of us only using part of Lodash, install full Lodash for partially usage is not very practice.

So what is the best way to partially import/bundle lodash?

I found those three way you can partially import Lodash, but which one is the best?

Desctuction import  
`import { pick } from 'lodash'`  

Cherry-pick  
`import pick from 'lodash/pick'`  

Install seperate lodash  module   
`npm i lodash.pick`   
`import pick from 'lodash.pick'`


Test

I create a repo for benchmark, I pickup some offen used function for stimulate real project, and uglify bundle it by webpack use this three way.
You can clone the repo and have a try you self.

here is the result I got.
destructionImport.bundle.js  72.1 kB
cherryPick.bundle.js  38.8 kB
separated.bundle.js   155 kB

conclusion

BAD - Desctuction import  
You will still have all you lodash in you code.
`import { pick } from 'lodash'`  

VERY BAD - Install seperate lodash module 
You will make you seperate lodash even larger then origin lodash if you install a lot of different one.
I think it's because those separate repo have some duplicate lodash core code which webpack can't udnerstand and reuse it.
`npm i lodash.pick`   
`import pick from 'lodash.pick'`

GOOD - Cherry-pick  
Make you lodash smaller
`import pick from 'lodash/pick'` 
