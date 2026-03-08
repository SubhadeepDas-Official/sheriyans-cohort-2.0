import H1 from './script1.js'
import H2 from './script2.js'

let parent = React.createElement('div',{id:'parent'},[H1(),H2()])

let main = document.querySelector('main')
let root = ReactDOM.createRoot(main)
root.render(parent)