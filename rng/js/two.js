const header = document.querySelector('.header');
const hashnode = document.querySelector('.hashnode');
const block =  document.querySelector('.block');
const line =  document.querySelector('.line');




const annotation = annotate(header, { type: 'highlight', color:'skyblue' });
const annotation2 = annotate(hashnode, { type:'circle', color:'yellow', padding:7});
const annotation3 = annotate(line, { type: 'underline', color:'blue' });
const annotation4 = annotate(block, {type:'bracket', color:'pink',brackets: ['left', 'right'], strokeWidth:5});


const array = annotationGroup([annotation, annotation2, annotation3, annotation4]);
array.show()
