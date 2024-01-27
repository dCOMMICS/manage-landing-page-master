// require

const annotate = RoughNotation.annotate;

const annotationGroup = RoughNotation.annotationGroup;

// method 1 single selection

let e = document.querySelector('.content-1');
const annotation = annotate(e, {
    type: 'underline'
});

// run 
annotation.show();

// method 2 group selection

const g1 = annotate (document.querySelector('.content-1'), {
    type: 'underline',
    color:'##d9ed5d'
});

// run
const  ag = annotationGroup([g1]);
ag.show();